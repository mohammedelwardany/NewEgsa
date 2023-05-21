import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import { Avatar, Badge } from 'antd';



import { Button, Modal } from 'antd';
import { useState } from 'react';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
const NotificationModal = ({icon,count}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <a onClick={showModal}>
     
    <Badge count={count}>
      {/* <Avatar shape="square" size="large" /> */}
      {icon}
    </Badge>

      </a>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <></>
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};





const Headersystem = () => {
  
    return(
        // <div className="header">
    
        <div className="head bg-white between-flex bs2" style={{paddingInline:"15px"}}>
          <div className="search p-relative">
            <input className="p-10" type="search" placeholder="Type A Keyword" />
          </div>
          <div className="icons d-flex align-center" style={{justifyContent:"center",alignItems:"center"}}>
            {/* <span className="notification p-relative">
              <i className="fa-regular fa-bell fa-lg"></i>
            </span> */}
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginInline:"1rem"}}>
            <NotificationModal icon={<i className="fa-regular fa-bell fa-lg"></i>} count={3}/>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"0.4rem"}}>
            <a>
            <Avatar size="small" icon={<UserOutlined />} />
            </a>
            </div>
          </div>
        </div>

        // </div>
        )
  
}

export default Headersystem;