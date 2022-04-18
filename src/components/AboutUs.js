import React, { Component } from 'react';
import "./AboutUs.css";

class AboutUs extends Component {
    render() { 
        return (
            <div className = "aboutUs">
                <h1>About Us</h1>
                <div className = "infobox">
                    <div style = {{display: "flex",flex: "column"}}>
                        <div className = "container" style = {{justifyContent: "center", width: "30vw", padding: "15px"}}>
                            <img className = "image" src = "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt = "Team image so cool"/>
                        </div>
                        <div className = "container" style = {{flexWrap: "wrap", justifyContent: "flex-start", alignItems: "flex-start", width: "50vw", }}>
                            <div style={{marginLeft:"10px"}}>
                                <h2>Team intro</h2>
                                <h3>Insert information here. </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutUs;

 
