import React from 'react';
import './TestCard.css'

function TestCard(props) {
    return (
        <>
            <div className="flex-card">
                <div className="Card">
                    <div>
                        <img className="Card-img" src={props.src} alt="Subject"/>
                    </div>
                    <div className="Card-info">
                        <h3>{props.Subject}</h3>
                        <p>{props.Minutes} Minutes</p>
                        <p>Date : {props.Date}</p>
                        <p>Time : {props.FromTime} {props.Noon} to {props.ToTime} {props.Noon}</p>

                    </div>
                    <div className="Card-button">
                    <button>{props.TestStatus}</button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default TestCard;