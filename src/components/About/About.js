import React from 'react';
import formal from './formal.jpg';
import './About.css';
function About(){
    return(
        <div>
            <div >
                <h2 className='about-btn'>About</h2>
            </div>
            <div className='impa-btn'>
                <div>
                <img src={formal} alt="hero-img" className='hero-img'/>
                </div>
                <div>
                    <p className='abt-para'>
                        Inquisitive, energetic computer science specialist skilled in
                        leadership, with a strong foundation in math, programming
                        logic, and cross-platform coding. Seeking to leverage solid
                        development skills with a focus on collaboration, communication, passion.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default About;