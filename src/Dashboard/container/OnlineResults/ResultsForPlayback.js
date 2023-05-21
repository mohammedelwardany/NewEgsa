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
import TableResults from './TableResults';
import PBModal from '../playBack/PlayBackStepsModel';



const ResultsForPlayback = () => {
    
//   const HandleKeyDown = (e)=>{
//     console.log(e.key)
//     }
//     const HandleKeyUp = (e)=>{
//         console.log("null")
//         }  

    
    return(<>
    <div >
    <Row >
        <Col xs={24} sm={24} md={24} lg={18} xl={18}><ImageDispaly/></Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6}><PlanDiscripe extraaa={<PBModal/>}/></Col>
    </Row>
    
    
    <PageCollapse/>
    <div className='p-20 bg-white rad-10 m-20 bs'>
    <TableResults
                                dataa={[
                                    {
                                        key: 'Arrange',
                                        Arrange: '1',
                                        SubSystem: "32",
                                        Commend: "32",
                                        Ack: "32",
                                    },
                                    {
                                        key: 'Arrange',
                                        Arrange: '1',
                                        SubSystem: "32",
                                        Commend: "32",
                                        Ack: "32",
                                    },
                                    {
                                        key: 'Arrange',
                                        Arrange: '1',
                                        SubSystem: "32",
                                        Commend: "32",
                                        Ack: "32",
                                    },
                                    {
                                        key: 'Arrange',
                                        Arrange: '1',
                                        SubSystem: "32",
                                        Commend: "32",
                                        Ack: "32",
                                    },
                                    {
                                        key: 'Arrange',
                                        Arrange: '1',
                                        SubSystem: "32",
                                        Commend: "32",
                                        Ack: "32",
                                    },
                                    {
                                        key: 'Arrange',
                                        Arrange: '1',
                                        SubSystem: "32",
                                        Commend: "32",
                                        Ack: "32",
                                    },
                                    {
                                        key: 'Arrange',
                                        Arrange: '1',
                                        SubSystem: "32",
                                        Commend: "32",
                                        Ack: "32",
                                    },

                                ]}
                                cols={[
                                    {
                                        title: 'Arrange',
                                        dataIndex: 'Arrange',
                                        key: 'Arrange',
                                        width: '30%',
                                        

                                    },
                                    
                                    {
                                        title: 'Sub-System',
                                        dataIndex: 'SubSystem',
                                        key: 'Sub-System',
                                  

                                    },
                                    {
                                        title: 'Commend',
                                        dataIndex: 'Commend',
                                        key: 'Commend',
                                       

                                    },
                                    {
                                        title: 'Ack',
                                        dataIndex: 'Ack',
                                        key: 'Ack',
                               

                                    },
                                ]}
                            />
    </div></div>
    
    </>)
}

export default ResultsForPlayback;