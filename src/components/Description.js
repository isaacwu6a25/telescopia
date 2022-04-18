import React, { Component } from 'react';
import "./Description.css";

class Description extends Component {
    render() { 
        return (
            <div className = "description">
                
                <div className = "container">
                
                    <h1 style = {{border: '1px #000000 solid'}}>Project description</h1>
                    <h2>stuff here</h2>
                </div>
                    
            </div>
        );
    }
}
 
export default Description;