import React from 'react';
import "./TestComponent.css";
import TestCard from './TestCard';
import Maths from './Designer.png';
import Physics from './Physics.jpg';
import Chemistry from './Chemistry.jpg';
import Electronics from './Electronics.jpg';
import ComputerScience from './Computer.jpg';
import Electrical from './Electrical.jpg';
function TestComponent(props) {
    return (
        <div className="Test-box">
            <h2>Upcoming Test</h2>
            <div className="Test-card">
                <div><TestCard src={Chemistry} Subject="Chemistry" Minutes="10" Date="25.05.2024" FromTime={8.45}
                               ToTime={9.00} Noon="A.m"  TestStatus="Start"/></div>
                <div><TestCard src={Maths} Subject="Maths" Minutes="15" Date="25.05.2024" FromTime={8.45} ToTime={9.00}
                               Noon="A.m" TestStatus="Upcoming"/></div>
                <div><TestCard src={Physics} Subject="Physics" Minutes="20" Date="25.05.2024" FromTime={8.45}
                               ToTime={9.00} Noon="A.m" TestStatus="Upcoming"/></div>

                <div><TestCard src={Electronics} Subject="Electronics" Minutes="25" Date="25.05.2024" FromTime={8.45}
                               ToTime={9.00} Noon="A.m" TestStatus="Upcoming"/></div>
                <div><TestCard src={ComputerScience} Subject="Computer Science" Minutes="15" Date="25.05.2024"
                               FromTime={8.45} ToTime={9.00} Noon="A.m" TestStatus="Upcoming"/></div>
                <div><TestCard src={Electrical} Subject="Electrical" Minutes="15" Date="25.05.2024" FromTime={8.45}
                               ToTime={9.00} Noon="A.m" TestStatus="Upcoming"/></div>
                <div><TestCard src={Physics} Subject="Physics" Minutes="15" Date="25.05.2024" FromTime={8.45}
                               ToTime={9.00} Noon="A.m" TestStatus="Upcoming"/></div>

            </div>
        </div>
    );
}

export default TestComponent;