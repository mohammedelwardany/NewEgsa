import  React from 'react';
import '../../css/sign.css';
import  SignUp from './signup';
import  SignIn from './signin';

const Sign = () => {
  
    return(
    <div className="all">
    <div className="contain">
    <input type="checkbox" id="flip"/>
    <div className="covery">
      <div className="front">
        <img src="imgs/space3.jpg" alt=""/>
        <div className="text">
          <span className="text-1">Every new friend is a <br/> new adventure</span>
          <span className="text-2">Let's get connected</span>
        </div>
      </div>
    </div>
      <div className="covery">
      <div className="back">
        <img className="backImg" src="imgs/space4.jpg" alt=""/>
        <div className="text">
          <span className="text-1">Complete miles of journey <br/> with one step</span>
          <span className="text-2">Let's get started</span>
        </div>
      </div>
    </div>
    <div className="forms">
        <div className="form-content">        
          <SignIn/>
          <SignUp/>
    </div>
    </div>
  </div>
   </div>
        )
  
}

export default Sign;