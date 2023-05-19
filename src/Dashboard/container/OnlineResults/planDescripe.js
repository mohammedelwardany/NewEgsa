import { Descriptions } from 'antd';
import RVRModal from './RoverControlModal';
const PlanDiscripe = () => (
  <div style={{minWidth:"100%",maxWidth:"100%"}}>
    <div >

    
    <Descriptions
      title="Responsive Descriptions"
      style={{}}
      className='p-20 bg-white rad-10 m-20 bs'
      extra={<RVRModal/>}
      bordered
      column={{
        xxl: 4,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1,
      }}
    >
      <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
      <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
      <Descriptions.Item label="time">18:00:00</Descriptions.Item>
      <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
      <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
      <Descriptions.Item label="Official">$60.00</Descriptions.Item>
      <Descriptions.Item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
      </Descriptions.Item>
    </Descriptions>
  </div>
  </div>
);
export default PlanDiscripe;