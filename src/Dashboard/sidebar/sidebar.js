import React from 'react';
import '../../css/framework.css';
import '../../css/master.css';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  FormOutlined,
  ShopOutlined,
  SyncOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import InsideRoute from '../insideRoute';

import Container from '../container/container';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Headersystem from '../container/header/header';
import { useEffect } from 'react';
import NotificationSystem from '../notification';
import { useDispatch } from 'react-redux';
import { GetUserData } from '../../Redux/UserSlice';

const { Header, Content, Footer, Sider } = Layout;
  const sidebarNav =
    [{
      id: 1,
      pagename: "Dashboard",
      refrence: "/system",
      icon: <AppstoreOutlined/>
    },
    {
      id: 2,
      pagename: "Profile",
      refrence: "/system/Profile",
      
      icon: <UserOutlined/>
    }
      ,
    {
      id: 3,
      pagename: "Create Plans",
      refrence: "/system/CreatePlan",
      
      icon: <FormOutlined />
    }
    
    
      , {
      id: 4,
      pagename: "PlayBack",
      refrence: "/system/PlayBack",
      
      icon: <SyncOutlined />
    }
    , {
      id: 5,
      pagename: "Comunity",
      refrence: "/system/blog",
    
      icon: <TeamOutlined/>
    }

    ]

// const Sidebar = () => {
//   const [active, setactive] = useState("")
//   const [defaultBtn, setdefaultBtn] = useState()

//   const [activeButtonId, setActiveButtonId] = useState(defaultBtn ? defaultBtn.id : null);

//   return (
//     <div className="page d-flex">
//       <div className="sidebar bg-white p-20 p-relative">
//         <h3 className="p-relative txt-c mt-0">FCC Dashboard</h3>
//         <img src="imgs/rover.jpg" alt="" style={{ width: "100%" }} />
//         <ul>
//           <nav>
//             {


//               sidebarNav.map(((sidebarNav, i) => {
//                 const handleButtonClick = event => {
//                   setActiveButtonId(Number(event.target.value));
//                   console.log(i)
//                 }
//                 return (

//                   <li key={sidebarNav.id}>
//                     <Link className={
//                       sidebarNav.id === activeButtonId ? "active d-flex align-center fs-14 c-black rad-6 p-10" : "d-flex align-center fs-14 c-black rad-6 p-10"} to={sidebarNav.refrence} onClick={handleButtonClick}>
//                       <i className={sidebarNav.icon}></i>
//                       <span>{sidebarNav.pagename}</span>
//                     </Link>
//                   </li>
//                 )

//               })

//               )
//             }
//           </nav>
//           {/* <li >
//             <a className="active d-flex align-center fs-14 c-black rad-6 p-10" href='/system' >
//               <i className="fa-regular fa-chart-bar fa-fw"></i>
//               <span>Dashboard</span>
//             </a>
//           </li>


//           <li >
//             <a className="d-flex align-center fs-14 c-black rad-6 p-10" to="./profile" >
//               <i className="fa-regular fa-user fa-fw"></i>
//               <span>Profile</span>
//             </a>
//           </li>
//           <li >
//             <a className="d-flex align-center fs-14 c-black rad-6 p-10" >
//               <i className="fa-solid fa-diagram-project fa-fw"></i>
//               <span>Plans</span>
//             </a>
//           </li>  
//           <li >
//             <a className="d-flex align-center fs-14 c-black rad-6 p-10" >
//               <i className="fa-solid fa-chart-line fa-fw"></i>
//               <span>Statistics</span>
//             </a>
//           </li>  
//           <li >
//             <a className="d-flex align-center fs-14 c-black rad-6 p-10" >
//               <i className="fa-sharp fa-solid fa-sheet-plastic fa-fw"></i>
//               <span>Create Plans</span>
//             </a>
//           </li>  
//           <li >
//             <a className="d-flex align-center fs-14 c-black rad-6 p-10" >
//               <i className="fa-solid fa-repeat fa-fw"></i>
//               <span>PlayBack</span>
//             </a>
//           </li>   */}

//         </ul>

//       </div>
//       <Container />

//     </div>
//   )

// }

// export default Sidebar;





// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   AppstoreOutlined,
//   TeamOutlined,
//   ShopOutlined,
// ]
const Navigation=sidebarNav.map((item, index) => ({
  key: item.refrence,
  icon: item.icon,
  label: item.pagename,
  link:item.refrence
}));
const Sidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
    useEffect(() => {
    // console.log('Location changed!', `.${location.pathname}`);
    // return () => {
    //   second
    // }
    dispatch(GetUserData())
  }, [])
  
  return (
    <Layout hasSider>
      <Sider   
      collapsed={false}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        
        <img src='imgs/logoWhite.png' style={{width:"25vh" ,margin:"auto" , paddingInline:"4vh",marginBlock:"5vh"}}/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={"/system"} selectedKeys={location.pathname} items={Navigation} onSelect={(e)=>{navigate(e.item.props.link)}}/>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
<Headersystem/>
          
        </Header>

        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <NotificationSystem/>
<div>
  <InsideRoute/>
</div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Space Rover ©2023 Created by Astrotech Squad
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Sidebar;