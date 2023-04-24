import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import CommendPannel from './commendsSubsystem';
import VerticalToggleButtons from './commendsSubsystem/button';
import VerticalPlansToggleButtons from './commendsSubsystem/plansButton';
import { useSelector } from 'react-redux';
const FixedPlansPanel = () => {
  const {FixedPlandata} = useSelector(state => state.plan)

    return(
        <div 
        // style={{maxWidth:700}}
        className='fs-15 w-full'
        >
    <div >
        <div className="projects p-20 bg-white rad-10 m-20 bs">
          <h2 className="mt-0 mb-20">fixed Plans</h2>
          <div className="responsive-table">
          {/* <VerticalToggleButtons/> */}
          <VerticalPlansToggleButtons
          datas={{FixedPlandata}}
          
          />
          </div>
        </div>
</div>
        </div>
        )
  
}

export default FixedPlansPanel;