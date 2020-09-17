import React from 'react';
import Mapped from './Mapped';
import { useParams } from 'react-router-dom';
import Fakedata from '../../Fakedata/Place'

const Search = (props) => {
    const { id } = useParams()
    const product = Fakedata.find(pd => pd.id == id);
    return (
        <div >
       
              <h3 style={{textAlign:'center'}}>welcome to</h3>
              <br/>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="https://i.ibb.co/yNnZBGC/Rectangle-26.png" class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="https://i.ibb.co/S3F3Q3X/Rectangle-27.png" class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="https://i.ibb.co/TWKC96Y/Rectangle-28.png" class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col">
                        <Mapped></Mapped>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default Search;