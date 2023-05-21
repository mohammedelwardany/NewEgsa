import  React from 'react';
import '../../css/land.css';
import '../../css/normalize.css';
import Header from './header';
import Start from './start';
import Footer from './footer';
const Services = () => {

    return(
      <>
      <Header/>
    <div className="services" id="services">
    <h2 className="main-title">Our Services</h2>
    <div className="container">
      <div className="box">
        <i className="fas fa-solid fa-satellite fa-4x"></i>
        <h3>Communication</h3>
        <div className="info">
          <a href="#">Between earth & space</a>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-solid fa-users fa-4x"></i>
        <h3>Community</h3>
        <div className="info">
          <a href="#">Between users</a>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-solid fa-newspaper fa-4x"></i>
        <h3>News</h3>
        <div className="info">
          <a href="#">Get last update</a>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-sharp fa-solid fa-sheet-plastic fa-4x"></i>
        <h3>Plans</h3>
        <div className="info">
          <a href="#">Explore space</a>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-solid fa-square-poll-vertical fa-4x"></i>
        <h3>Online session</h3>
        <div className="info">
          <a href="#">Get resut online </a>
        </div>
      </div>
      <div className="box">
      <i className="fas fa-solid fa-rotate fa-4x"></i>
        <h3>Playback</h3>
        <div className="info">
          <a href="#">Get resut later</a>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </>
     ) 
}
    
export default Services;