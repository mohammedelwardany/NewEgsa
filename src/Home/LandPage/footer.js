import  React from 'react';
import '../../css/land.css';

import '../../css/normalize.css';
const Footer = () => {

    return(
<div className="footer">
      <div className="container">
        <div className="box" >
          {/* <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}> */}
          <img src='imgs/logoWhite.png' style={{width:"25vh" ,margin:"1vh"}}/>
          {/* </div> */}
          <ul className="social">
            <li>
              <a href="#" className="facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" className="youtube">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#" className="twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="linkedin-in">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
          
        </div>
        <div className="box">
          <ul className="links">
            <li><a href="#">Important Link 1</a></li>
            <li><a href="#">Important Link 2</a></li>
            <li><a href="#">Important Link 3</a></li>
            <li><a href="#">Important Link 4</a></li>
            <li><a href="#">Important Link 5</a></li>
          </ul>
        </div>
        <div className="box">
          <div className="line">
            <i className="fas fa-map-marker-alt fa-fw"></i>
            <div className="info">Egypt, Giza, Inside The Sphinx, Room Number 220</div>
          </div>
          <div className="line">
            <i className="far fa-clock fa-fw"></i>
            <div className="info">Business Hours: From 10:00 To 18:00</div>
          </div>
          <div className="line">
            <i className="fas fa-phone-volume fa-fw"></i>
            <div className="info">
              <span>+20123456789</span>
              <span>+20198765432</span>
            </div>
          </div>
        </div>
        <div className="box ">
        <div className="line"> <div className="info">Business Hours: From 10:00 To 18:00</div></div>
        <div className="line"> <div className="info">Business Hours: From 10:00 To 18:00</div></div>
        <div className="line"> <div className="info">Business Hours: From 10:00 To 18:00</div></div>
        </div>
      </div>
      <p className="copyright">&copy; Copyright 2023 SPACE ROVER</p>
    </div>
    
     ) 
}
    
export default Footer;