import  React from 'react';
import '../../css/land.css';
import '../../css/normalize.css';

const Steps = () => {

    return(
        <div className="work-steps" id="work-steps">
      <h2 className="main-title">How It Works ?</h2>
      <div className="container">
        <img src="imgs/details-2-office-team-work.svg" alt="" className="image" style={{width:"50%"}} />
        <div className="info">
          <div className="box">
            <img src="imgs/work-steps-2.png" alt="" />
            <div className="text">
              <h3>Plans</h3>
              <p>
                You can create plans and send it to rover to get data you want from space.
              </p>
            </div>
          </div>
          <div className="box">
            <img src="imgs/work-steps-3.png" alt="" />
            <div className="text">
              <h3>Results</h3>
              <p>
                You have two way to get the result from rover first you can see it as online session, second you can see it later on playback.  
              </p>
            </div>
          </div>
          <div className="box">
            <img src="imgs/work-steps-1.png" alt="" />
            <div className="text">
              <h3>Community</h3>
              <p>
                You can connect with other users to know more info and get last updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
     ) 
}
    
export default Steps;