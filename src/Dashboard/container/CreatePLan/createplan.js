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


const CreatePlan = () => {
  const {allPlanData} = useSelector(state => state.plan)
  const {planName} = useSelector(state => state.plan)
  const {planDateTime} = useSelector(state => state.plan)
  
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetPlannData());
    dispatch(GetFixedPlannData());
    
    
  }, [dispatch])
  
    return(<>
    <div>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        <PlanSubsystem/>
        <div>
        <Parameters/>
        <AcceptPlanSection/>
        </div>
        </div>
        
        <PlanTable statusstate={"none"}
        dataSet={allPlanData}
        planName={planName}
        planDate={planDateTime}
        />
      
        
    </div>
    
    </>)
}

export default CreatePlan;