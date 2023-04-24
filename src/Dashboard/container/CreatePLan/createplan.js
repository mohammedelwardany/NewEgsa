import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import Parameters from '../PlanSubsystem/parameters';
import PlanSubsystem from '../PlanSubsystem/PlanSubsystem';
import PlanTable from '../PlanTable/PlanTable';
import AcceptPlanSection from '../PlanSubsystem/acceptPlanSection';
import PlanSetName from '../PlanSubsystem/planSetName';
import { useDispatch, useSelector } from 'react-redux';
import { GetFixedPlannData, GetPlanData, GetPlannData } from '../../../Redux/PlanSlice';
import { useEffect } from 'react';
import CPModal from './planInits/modal';
import FixedPlansPanel from '../PlanSubsystem/FixedPlanPanel';
import CPAddModal from './addCommends/Addmodal';


const CreatePlan = () => {
  const {allPlanData} = useSelector(state => state.plan)
  const {planName} = useSelector(state => state.plan)
  const {planDateTime} = useSelector(state => state.plan)
  // const [open, setOpen] = React.useState(false);

    const dispatch = useDispatch()
  useEffect(() => {
    // setOpen(true)
    // console.log(open)
    dispatch(GetPlannData());
    dispatch(GetFixedPlannData());
    
    
  }, [dispatch])
  
    return(<>
    <div>
      <CPModal 
      // openstate={open}
      />
      <CPAddModal/>
          <div > 
 
              {/* <PlanSubsystem/>
        <div>
        <Parameters/>
        </div> */}
        <AcceptPlanSection/>

        <PlanTable statusstate={"none"}
        dataSet={allPlanData}
        planName={planName}
        planDate={planDateTime}
        />
        <AcceptPlanSection/>
          </div>
         
      
        
    
      
        
    </div>
    
    </>)
}

export default CreatePlan;