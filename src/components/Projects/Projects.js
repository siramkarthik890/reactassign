import React from 'react';
import './Projects.css';
function Projects(){
    return(
        <div className='pro-or'>
            <h2 className='pro-btn'>Projects</h2>
            

                <div className='project'>
                    <h3>Hospital Management System(3rd Semester)</h3>
                     <div className='pro-dev'>
                        <p>The purpose of this project is to computerize the Front
                         Office Management of Hospital by developing a software
                         which is user friendly, simple, fast, and cost effective</p>
                        <p>It deals with the collection of patient’s information, diagnosis details, etc. </p>
                        <p>Hospital Management System designed using Python, Tkinter and MySQL.</p>
                     </div>
                </div>

                <div className='project'>
                    <h3>Sales Dataset Analysis(5th Semester)</h3>
                    <div className='pro-dev'>
                    <p>Sales Dashboard consists of many Slicers like City, Branches, Products etc. </p>
                    <p>Slicer option shows the Average Shipped Products, Income, Revenue, Rating in Pictorial Representation.</p>
                    <p>Sales Dataset Analysis designed using Microsoft Excel.</p>
                    </div>
                    
                </div>
            
        </div>
    );
}
export default Projects;