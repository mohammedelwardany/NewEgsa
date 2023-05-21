import  React from 'react';
import '../../css/land.css';
import '../../css/normalize.css';
import Header from './header';

import Stats from './stats';
import Footer from './footer';
const About = () => {

    return(
      <>
        <Header/>
        <div className="our-skills" id="our-skills">
        <h2 className="main-title">About Us</h2>
        <div className="container">
          <img src="imgs/about.jpg" alt="" />
          <div className="skills">
            <div className="skill">
              <h2>Who we are</h2>
              <h5 style={{marginLeft: "10px" , fontSize:"13.5px"}}>Our team underwent training at the Egyptian Space Agency and began studying space science. We worked on a project related to "Satellite Simulation using Arduino and Embedded Systems" which resulted in us securing a third-place position at the Egyptian Space Agency. 
              </h5><br/>
              <h5 style={{marginLeft: "10px" , fontSize:"13.5px"}}>After completing the project in the training, we decided to continue developing it to serve the space rover and we chose it as our graduation project. We improved the project's interface, software, and functions. Our focus was on enhancing the rover's capabilities and making it more efficient. 
              </h5><br/>
              <h5 style={{marginLeft: "10px", fontSize:"13.5px"}}>Our team's dedication and hard work have resulted in a successful project that has potential applications in space exploration. We are proud of what we have accomplished thus far and look forward to continuing to contribute to the field of space science and technology.
              </h5>
              
            </div>
          </div>
        </div>
      </div>
      <Stats/>
    <Footer/>
    </>
     ) 
}
    
export default About;