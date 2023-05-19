import { Button, Modal } from 'antd';
import { Layout, Space } from 'antd';
import { useState } from 'react';
import ImageDispaly from '../playBack/imagesDisplay';
const { Header, Footer, Sider, Content } = Layout;





const RVRModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('Plan Excuting ...');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };


  const HandleKeyDown = (e)=>{
    console.log(e.key)
    }
    const HandleKeyUp = (e)=>{
        console.log("null")
        }  
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Control Rover
      </Button>
      <Modal
        title="Control Rover"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={700}
        
      >
          <Space
    direction="vertical"
    style={{
      width: '100%',

    }}
    size={[0, 48]}
    onKeyDown={HandleKeyDown}
    onKeyUp={HandleKeyUp}
  >
<ImageDispaly/>


  </Space>

      </Modal>
    </>
  );
};
export default RVRModal;