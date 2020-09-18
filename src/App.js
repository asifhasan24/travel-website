import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Search from './Components/Search/Search';

export const UserContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser] = useState([])
  return (
    <UserContext.Provider value={ [loggedInUser,setLoggedInUser]}>
    
    
      <Router>
        <Switch>
          <Route path="/home">
           <Home/>
          </Route>
          <Route path="/booking/:id">
           <Booking/>
          </Route>
          <PrivateRoute path="/search">
          <Search/>
          </PrivateRoute>
         
       
          <Route path="/login">
          <Login/>
           
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    
  );
}

export default App;
