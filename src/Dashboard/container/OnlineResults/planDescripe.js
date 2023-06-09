import { Button, Col, Descriptions, Row } from 'antd';
import RVRModal from './RoverControlModal';
import PBModal from '../playBack/PlayBackStepsModel';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { TakeRoverMessage } from '../../../Redux/onlineSlice';
const PlanDiscripe = ({extraaa}) => {
  const { sensorsData } = useSelector((state) => state.online);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(TakeRoverMessage());
    }, 1000);

    // Clean up the timer on unmount
    return () => clearInterval(intervalId);
  }, [dispatch]);



  
  
  return(
  <div style={{minWidth:"100%",maxWidth:"100%"}}>
    <div >


    
    <Descriptions
      title="Responsive Descriptions"
      style={{}}
      className='p-20 bg-white rad-10 m-20 bs'
      extra={extraaa}

      bordered
      column={{
        xxl: 1,
        xl: 1,
        lg: 1,
        md: 1,
        sm: 1,
        xs: 1,
      }}
    >
      <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
      <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
      <Descriptions.Item label="time">18:00:00</Descriptions.Item>
      <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
      <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    </Descriptions>
    <div className='p-20 bg-white rad-10 m-20 bs'>
      <Row >
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>DHT-11</Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <i class="bi bi-thermometer-sun"></i>
                                &nbsp;
                                {sensorsData.Temperature}°C
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <i class="bi bi-droplet-half"></i>
                                &nbsp;
                                {sensorsData.Humidity}
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>Ultrasonic</Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>

                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <i class="bi bi-arrow-left"></i>
                                <i class="bi bi-arrow-right"></i>

                                &nbsp;
                                {sensorsData.Ultrasonic}cm
                            </Col>
                        </Row>
<br></br>
                        <Row>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>MPU6050</Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <div>x : {sensorsData.Acceleration.x}</div>
                                <div>y : {sensorsData.Acceleration.y}</div>
                                <div>z : {sensorsData.Acceleration.z}</div>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <div>xy : {sensorsData.Gyroscope.xy}°</div>
                                <div>yz : {sensorsData.Gyroscope.yz}°</div>
                                <div>xz : {sensorsData.Gyroscope.xz}°</div>
                            </Col>

                            
                        </Row>
</div>

  </div>
  </div>
)};
export default PlanDiscripe;