import React from 'react';

import './Academic.css';
 function Academic(){
    return(
        <div className='edu'>
            <h2 className='edu-btn'>Education</h2>
            <section className='sec-btn'>
            <div className='clg-btn'>
                    <h3>Lovely Professional University</h3>
                    <h4>B.Tech (computer science and engineering)</h4>
                    <h5>CGPA:- 8.48 (2019-present)</h5>
            </div>
            <div className='clg-btn'>
                    <h3>Sri chaitanya junior college</h3>
                    <h4>XII (Board of Intermediate Education)</h4>
                    <h5>CGPA:- 9.94 (2017-2019)</h5>
            </div>
            <div className='clg-btn'>
                    <h3>Bhashyam High School</h3>
                    <h4>X( Board of Secondary Education)</h4>
                    <h5>CGPA:- 9.7 (2016-2017)</h5>
            </div>
            </section>

        </div>
    );
 }
 export default Academic;