import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';

const Tickets = () => {
  
    return(
        <div className="tickets p-20 bg-white rad-10 bs">
        <h2 className="mt-0 mb-10">Statistics</h2>
        <p className="mt-0 mb-20 c-grey fs-15">Everything About Support Tickets</p>
        <div className="d-flex txt-c gap-20 f-wrap">
          <div className="box p-20 rad-10 fs-13 c-grey">
            <i className="fa-regular fa-rectangle-list fa-2x mb-10 c-orange"></i>
            <span className="d-block c-black fw-bold fs-25 mb-5">2500</span>
            Total
          </div>
          <div className="box p-20 rad-10 fs-13 c-grey">
            <i className="fa-solid fa-spinner fa-2x mb-10 c-blue"></i>
            <span className="d-block c-black fw-bold fs-25 mb-5">500</span>
            Pending
          </div>
          <div className="box p-20 rad-10 fs-13 c-grey">
            <i className="fa-regular fa-circle-check fa-2x mb-10 c-green"></i>
            <span className="d-block c-black fw-bold fs-25 mb-5">1900</span>
            Closed
          </div>
          <div className="box p-20 rad-10 fs-13 c-grey">
            <i className="fa-regular fa-rectangle-xmark fa-2x mb-10 c-red"></i>
            <span className="d-block c-black fw-bold fs-25 mb-5">100</span>
            Deleted
          </div>
        </div>
      </div>
 
     
        )
  
}

export default Tickets;