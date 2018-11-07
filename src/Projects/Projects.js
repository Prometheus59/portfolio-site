import './Projects.css'
import React from 'react';


const ProjectStyle = {
    backgroundColor: '#385677'
};

class Projects extends React.Component{
    render(){
        return(
            <div style={ProjectStyle} className="default">
                <h2 className="title">Projects</h2>
                <h3>Featured Projects</h3>
                <ul className="list">
                    <li>project1</li>
                    <li>project2</li>
                    <li>project3</li>
                    <li>project4</li>
                </ul>

                <h3>Other Projects</h3>
                <ul className="list">
                    <li>Project1</li>
                    <li>Project2</li>
                    <li>Project3</li>
                </ul>
            </div>
        )
    }
}

export default Projects