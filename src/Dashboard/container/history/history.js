import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';

const History = () => {
  
    return(
    <div className="tasks p-20 bg-white rad-10 bs">
      <h2 className="mt-0 mb-20">History Plans</h2>
      <div className="task-row between-flex">
        <div className="info">
          <h3 className="mt-0 mb-5 fs-15">Record One New Video</h3>
          <p className="m-0 c-grey">Record Python Create Exe Plans</p>
        </div>
        <i className="fa-regular fa-trash-can delete"></i>
      </div>
      <div className="task-row between-flex">
        <div className="info">
          <h3 className="mt-0 mb-5 fs-15">Write Article</h3>
          <p className="m-0 c-grey">Write Low Level vs High Level Languages</p>
        </div>
        <i className="fa-regular fa-trash-can delete"></i>
      </div>
      <div className="task-row between-flex">
        <div className="info">
          <h3 className="mt-0 mb-5 fs-15">Finish Plans</h3>
          <p className="m-0 c-grey">Publish Academy Programming Project</p>
        </div>
        <i className="fa-regular fa-trash-can delete"></i>
      </div>
      <div className="task-row between-flex done">
        <div className="info">
          <h3 className="mt-0 mb-5 fs-15">Attend The Meeting</h3>
          <p className="m-0 c-grey">Attend The Project Business Analysis Meeting</p>
        </div>
        <i className="fa-regular fa-trash-can delete"></i>
      </div>
      <div className="task-row between-flex">
        <div className="info">
          <h3 className="mt-0 mb-5 fs-15">Finish Plans</h3>
          <p className="m-0 c-grey">Finish Teaching Plans</p>
        </div>
        <i className="fa-regular fa-trash-can delete"></i>
      </div>
    </div>
 
     
        )
  
}

export default History;