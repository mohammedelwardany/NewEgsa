import  React from 'react';
import '../../css/land.css';
import '../../css/normalize.css';

const Start = () => {

    return(
       
        <div className="landing">
        <div className="container" >
          <div className="text">
            <h1>Welcome to space World</h1>
            <p>Join with us in our journey with space rover.</p>
          </div>
          <div className="image">
            <img src="imgs/imageedit_1.png" alt="" />
          </div>
        </div>
        <a href="#" className="go-down">
          <i className="fas fa-angle-double-down fa-2x"></i>
        </a>
      </div>


    
     ) 
}
    
export default Start;