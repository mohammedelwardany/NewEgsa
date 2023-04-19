import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import CommendPannel from './commendsSubsystem';
import FixedPlansPanel from './FixedPlanPanel';
const  PlanSubsystem = () => {
  
    return(
        <div>
        <h1 className="p-relative">Creating Plan</h1>
        <div className="settings-page m-20 d-grid gap-20"></div>
        <div className="projects p-20 bg-white rad-10 m-20 bs">
          <h2 className="mt-0 mb-20">welcome</h2>
          <div className="responsive-table">
           <CommendPannel/>
          </div>
        </div>
        <FixedPlansPanel/>  

        </div>
        )
  
}

export default PlanSubsystem;