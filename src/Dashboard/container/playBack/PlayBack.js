import React from 'react';
import Lines from '../charts/line';
import FixedPlansPanel from '../PlanSubsystem/FixedPlanPanel';
import PlanTable from '../PlanTable/PlanTable';
import ChartHandles from './ChartHandles';
import DayPlanToggle from './DayPlans';
import GetExecutedPlan from './getExecutdPlan';
import GyroResults from './GyroResultsTable';
import GyroSensorStatus from './GyroSensorStatus';
import ImageDispaly from './imagesDisplay';
import MainResults from './MainResultsTable';
import MainSensorStatus from './MainSensorsStatus';
import HandleSlider from './slider';



const PlayBack = () => {
  
    return(<>
    <div>
    <h1 className="p-relative">play Back</h1>
    <div className="settings-page m-20 d-grid gap-20"></div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between" ,flexWrap:"wrap"}}>

{/* <GetExecutedPlan/> */}
<DayPlanToggle/>

</div>
<HandleSlider/>
<ImageDispaly/>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between" ,flexWrap:"wrap"}}>


<ChartHandles/>
<ChartHandles/>


</div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between" ,flexWrap:"wrap"}}>

<div style={{display:"flex",flexDirection:"column"}}>
      <MainSensorStatus/>
<MainResults/>
</div>
<div style={{display:"flex",flexDirection:"column"}}>
      <GyroSensorStatus/>
<GyroResults/>   
</div>


    </div>
        <PlanTable 
        dataSet={[]}/>
    </div>
    
    </>)
}

export default PlayBack;