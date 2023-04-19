import React from 'react';
import PlanTable from '../PlanTable/PlanTable';
import ChartHandles from '../playBack/ChartHandles';
import DayPlanToggle from '../playBack/DayPlans';
import GyroResults from '../playBack/GyroResultsTable';
import GyroSensorStatus from '../playBack/GyroSensorStatus';
import ImageDispaly from '../playBack/imagesDisplay';
import MainResults from '../playBack/MainResultsTable';
import MainSensorStatus from '../playBack/MainSensorsStatus';
import HandleSlider from '../playBack/slider';
import { useDispatch } from 'react-redux';



const OnlineResults = () => {
    
    
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
        <PlanTable/>
    </div>
    
    </>)
}

export default OnlineResults;