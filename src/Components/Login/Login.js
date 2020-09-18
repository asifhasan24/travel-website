import React, { useContext, useState, } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App'
import { Link, useHistory, useLocation } from 'react-router-dom';


const Login = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    fname: '',
    lname: '',
    email: '',
    photo: '',
    password: '',
    cpassword: ''

  })
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser)
      history.replace(from)

    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
    

  }
  const handleFBLogin = () => {
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(fbProvider).then(function (result) {
      const { displayName, email } = result.user
      const signedInUser = { name: displayName, email }
      console.log(signedInUser, result)
      setLoggedInUser(signedInUser)
      history.replace(from)

    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage)
    });

  }
  const handleSubmit = (e) => {

    if (loggedInUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {

          const newUserInfo = { ...user }
          newUserInfo.error = ''
          newUserInfo.success = true
          setUser(newUserInfo)
          const signedInUser = { name: res.user.displayName, email: user.email }
          console.log(signedInUser, from)
          setLoggedInUser(signedInUser)
          history.replace(from)

        })
        .catch(error => {

          const newUserInfo = { ...user }
          newUserInfo.error = error.message
          newUserInfo.success = false
          setUser(newUserInfo)
        });
    }

    if (!loggedInUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {

          const newUserInfo = { ...user }
          newUserInfo.error = ''
          newUserInfo.success = true
          setUser(newUserInfo)


        })
        .catch(function (error) {

          const newUserInfo = { ...user }
          newUserInfo.error = error.message
          newUserInfo.success = false
          setUser(newUserInfo)
        })
    }
    e.preventDefault()

  }
  const handleBlur = (e) => {

    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)

    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6
      const passwordHasNumber = /\d{1}/.test(e.target.value)
      isFieldValid = (isPasswordValid && passwordHasNumber)
    }
    if (e.target.name === 'cpassword') {
      const password = document.getElementById("txtPassword").value;
      const confirmPassword = document.getElementById("txtConfirmPassword").value;
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
      }
      return true;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user }
      newUserInfo[e.target.name] = e.target.value
      setUser(newUserInfo)

    }
  }



  return (
    <div className="bg-img" style={{ paddingTop: '100px', paddingLeft: '500px' }}>
      <h3 className="mb-5" style={{ color: 'whitesmoke' }}>{loggedInUser ? 'Create an Account' : 'Login'}</h3>

      <form onSubmit={handleSubmit}>

        {loggedInUser && <input type="text" onBlur={handleBlur} name="name" className="mb-3" id="" placeholder="First name" required />}
        <br />
        {loggedInUser && <input type="text" onBlur={handleBlur} name="name" className="mb-3" id="" placeholder="Last name" required />}
        <br />
        <input type="text" onBlur={handleBlur} name="email" className="mb-3" placeholder="your email address" required />
        <br />
        <input type="password" onBlur={handleBlur} name="password" className="mb-3" id="txtPassword" placeholder="your password" required />
        <br />
        {loggedInUser && <input type="password" className="mb-5" onBlur={handleBlur} name="cpassword" id="txtConfirmPassword" placeholder="Confirm password" required />}
        <br />

        <input type="submit" className="btn btn-lg btn-warning" value={loggedInUser ? 'Create an account' : 'Login'} />


        <br />
        <input type="radio" onClick={() => setLoggedInUser(!loggedInUser)} name="newUser" id="" />

        <label style={{ color: 'whitesmoke' }} htmlFor="newUser">{loggedInUser ? 'Already have an account?Login' : 'Dont have an account? Create a account'}</label>


        <br />
      </form>
      <p style={{ color: 'red' }}>{user.error}</p>
      {
        user.success && <p style={{ color: 'red' }}>User {loggedInUser ? 'Created' : 'Logged in'} successfully </p>
      }
      <button onClick={handleGoogleSignIn} type="button" class="btn btn-lg btn-dark mb-2">Contine with Google</button>
      <br />
      <button onClick={handleFBLogin} type="button" class="btn btn-lg btn-dark">Contine with FaceBook</button>

      <br />
    </div>
  );
};

export default Login;