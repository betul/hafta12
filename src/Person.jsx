import React from "react";
import "./Person.css";

function Person({person}) {
    return (
        <div className="card my-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <i className="fas fa-user fa-5x m-3"></i>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="fas fa-signature mr-2"></i>  {person.name} {person.surname}
                            </h5>
                            <div className="row">
                                <div className="col-sm-5">
                                    <p className="card-text">
                                        <i className="fas fa-calendar-alt mr-2"></i> {person.age}
                                    </p>
                                </div>
                                <div className="col-sm-7">
                                    <p className="card-text">
                                        <i className="fas fa-venus-mars mr-2"></i>  {person.gender}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         
        </div>
    );
}

export default Person;
