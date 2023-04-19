import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';

const LastPlan = () => {
  
    return(
        <div className="last-project p-20 bg-white rad-10 bs p-relative">
            <h2 className="mt-0 mb-20">Last Plan Progress</h2>
            <ul className="m-0 p-relative">
              <li className="mt-25 d-flex align-center done">Got The Plan</li>
              <li className="mt-25 d-flex align-center done">Started The Plan</li>
              <li className="mt-25 d-flex align-center done">The Plan About To Finish</li>
              <li className="mt-25 d-flex align-center current">Test The Plan</li>
              <li className="mt-25 d-flex align-center">Finish The Plan & Get Money</li>
            </ul>
            <img className="launch-icon hide-mobile" src="imgs/project.png" alt="" />
          </div>
 
     
        )
  
}

export default LastPlan;