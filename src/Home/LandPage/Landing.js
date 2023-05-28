import  React from 'react';
import '../../css/land.css';
import '../../css/normalize.css';
import Footer from './footer';
import Connect from './connect';
import Steps from './steps';
import Start from './start';
import Header from './header';





const Landing = () => {
  
    return(
      <div>
    <Header/>
    <Start/>
    <Steps/>
    <Connect/>
    <Footer/>  
    </div>
        )
  
}

export default Landing;