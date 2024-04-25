import React from 'react';
import './firstpage.css';
import Profile from './profile.png';

function Firstpage(props) {
    return (
        <div>
            <div className="Navbar">
                <div className="profile">
                    <div><img src={Profile} className="Nav-profile"/></div>
                    <div><h2> Nadish</h2></div>
                </div>
               <span className="Subjects"> <h2>Subjects</h2> </span>
                <div className="Nav-items">
                    <p>Maths</p>
                </div>
                <div className="Nav-items">
                    <p>Physics</p>
                </div>
                <div className="Nav-items">
                    <p>Chemistry</p>
                </div>
                <div className="Nav-items">
                    <p>Electronics</p>
                </div>
                <div className="Nav-items">
                    <p>Computer Science</p>
                </div>
                <div className="Nav-items">

                    <p>Electrical</p>
                </div>
            </div>
        </div>
    );
}

export default Firstpage;
