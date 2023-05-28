import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../../css/land.css';
import '../../css/normalize.css';
import LoadingPtn from './LoadingPtn';
import { DownloadOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
// import logo from "../../../public/imgs/logoblue.png"


// <Route path='/' element={<Landing/>}/>
// <Route path='/about' element={<About/>}/>
// <Route path="/services" element={<Services/>} />
// <Route path="/articles" element={<Articles/>} />
// <Route path='/sign' element={<Sign/>}/>



const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header" id="header">
      <div className="container">
        <a href="#" className="logo">
        <img src="imgs/logoblue.png" style={{width:"20vh"}} alt="" />
          </a>
        <ul className="main-nav">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/services"}>Services</Link></li>
          <li> <Link to={"/articles"}>News</Link></li>
          <li style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Button type="primary" shape="round" onClick={()=>{navigate("/sign")}} icon={<UserOutlined />} size={"large"}>
            join system
          </Button>
          </li>
        </ul>
      </div>
    </div>



  )
}

export default Header;