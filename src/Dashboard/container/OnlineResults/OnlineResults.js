import React, { useEffect } from 'react';
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
import PlanDiscripe from './planDescripe';
import PageCollapse from './PageCollapse';
import TapsResult from './taps';
import { Col, Row } from 'antd';



const OnlineResults = () => {
    
    
    return(<>
    <div >
    <h1 className="p-relative">Results</h1>
    <PlanDiscripe/>
    <ImageDispaly/>
    <PageCollapse/>

    </div>
    
    </>)
}

export default OnlineResults;