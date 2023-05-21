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
import { Button, Col, Row } from 'antd';
import TableResults from './TableResults';



const OnlineResults = () => {
    
//   const HandleKeyDown = (e)=>{
//     console.log(e.key)
//     }
//     const HandleKeyUp = (e)=>{
//         console.log("null")
//         }  
        useEffect(() => {
            function handleKeyDown(e) {
              console.log(e.key);
            }
            function handleKeyUp(e) {
                console.log("null");
              }
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('keyup', handleKeyUp);
       
            // Don't forget to clean up
            return function cleanup() {
              document.removeEventListener('keydown', handleKeyDown);
              document.addEventListener('keyup', handleKeyUp);
            }
          }, []);
    
    return(<>
    <div >
    <h1  className="p-relative" style={{marginInline:"2rem"}}>Results</h1>
    <Row >
        <Col xs={24} sm={24} md={24} lg={18} xl={18}><ImageDispaly/></Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6}>      <div className='p-20 bg-white rad-10 m-20 bs'>
      <Row>
        <Col>    <Button type="primary">Primary</Button>
</Col>

      </Row>
      </div>
      <PlanDiscripe/></Col>
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

export default OnlineResults;