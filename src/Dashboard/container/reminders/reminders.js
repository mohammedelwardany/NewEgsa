import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';

const Reminders = () => {
  
    return(
        <div className="reminders p-20 bg-white rad-10 bs p-relative">
        <h2 className="mt-0 mb-25">Reminders</h2>
        <ul className="m-0">
          <li className="d-flex align-center mt-15">
            <span className="key bg-blue mr-15 d-block rad-half"></span>
            <div className="pl-15 blue">
              <p className="fs-14 fw-bold mt-0 mb-5">Check My Tasks List</p>
              <span className="fs-13 c-grey">28/09/2023 - 8:00am</span>
            </div>
          </li>
          <li className="d-flex align-center mt-15">
            <span className="key bg-green mr-15 d-block rad-half"></span>
            <div className="pl-15 green">
              <p className="fs-14 fw-bold mt-0 mb-5">Check My Plans</p>
              <span className="fs-13 c-grey">26/10/2023 - 10:00am</span>
            </div>
          </li>
          <li className="d-flex align-center mt-15">
            <span className="key bg-orange mr-15 d-block rad-half"></span>
            <div className="pl-15 orange">
              <p className="fs-14 fw-bold mt-0 mb-5">Call All My Managers</p>
              <span className="fs-13 c-grey">05/11/2023 - 12:00pm</span>
            </div>
          </li>
          <li className="d-flex align-center mt-15">
            <span className="key bg-red mr-15 d-block rad-half"></span>
            <div className="pl-15 red">
              <p className="fs-14 fw-bold mt-0 mb-5">Finish The Development Plans</p>
              <span className="fs-13 c-grey">20/12/2023 - 2:00pm</span>
            </div>
          </li>
        </ul>
      </div>
 
     
        )
  
}

export default Reminders;