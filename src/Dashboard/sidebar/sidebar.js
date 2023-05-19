import React from 'react';
import '../../css/framework.css';
import '../../css/master.css';
import Container from '../container/container';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  const [active, setactive] = useState("")
  const [defaultBtn, setdefaultBtn] = useState()

  const [activeButtonId, setActiveButtonId] = useState(defaultBtn ? defaultBtn.id : null);
  const sidebarNav =
    [{
      id: 0,
      pagename: "Dashboard",
      refrence: "/system",
      active: "",
      icon: "fa-regular fa-chart-bar fa-fw"
    },
    {
      id: 1,
      pagename: "Profile",
      refrence: "/system/Profile",
      active: "",
      icon: "fa-regular fa-user fa-fw"
    }
      ,
    {
      id: 2,
      pagename: "Create Plans",
      refrence: "/system/CreatePlan",
      active: "",
      icon: "fa-sharp fa-solid fa-sheet-plastic fa-fw"
    }
    , {
      id: 3,
      pagename: "online results",
      refrence: "/system/OnlineResults",
      active: "",
      icon: "fa-solid fa-repeat fa-fw"
    }
    ,
      , {
      id: 4,
      pagename: "PlayBack",
      refrence: "/system/PlayBack",
      active: "",
      icon: "fa-solid fa-repeat fa-fw"
    }
    , {
      id: 5,
      pagename: "Comunity",
      refrence: "/system/blog",
      active: "",
      icon: "fa-solid fa-repeat fa-fw"
    }

    ]
  return (
    <div className="page d-flex">
      <div className="sidebar bg-white p-20 p-relative">
        <h3 className="p-relative txt-c mt-0">FCC Dashboard</h3>
        <img src="imgs/rover.jpg" alt="" style={{ width: "100%" }} />
        <ul>
          <nav>
            {


              sidebarNav.map(((sidebarNav, i) => {
                const handleButtonClick = event => {
                  setActiveButtonId(Number(event.target.value));
                  console.log(i)
                }
                return (

                  <li key={sidebarNav.id}>
                    <Link className={
                      sidebarNav.id === activeButtonId ? "active d-flex align-center fs-14 c-black rad-6 p-10" : "d-flex align-center fs-14 c-black rad-6 p-10"} to={sidebarNav.refrence} onClick={handleButtonClick}>
                      <i className={sidebarNav.icon}></i>
                      <span>{sidebarNav.pagename}</span>
                    </Link>
                  </li>
                )

              })

              )
            }
          </nav>
          {/* <li >
            <a className="active d-flex align-center fs-14 c-black rad-6 p-10" href='/system' >
              <i className="fa-regular fa-chart-bar fa-fw"></i>
              <span>Dashboard</span>
            </a>
          </li>


          <li >
            <a className="d-flex align-center fs-14 c-black rad-6 p-10" to="./profile" >
              <i className="fa-regular fa-user fa-fw"></i>
              <span>Profile</span>
            </a>
          </li>
          <li >
            <a className="d-flex align-center fs-14 c-black rad-6 p-10" >
              <i className="fa-solid fa-diagram-project fa-fw"></i>
              <span>Plans</span>
            </a>
          </li>  
          <li >
            <a className="d-flex align-center fs-14 c-black rad-6 p-10" >
              <i className="fa-solid fa-chart-line fa-fw"></i>
              <span>Statistics</span>
            </a>
          </li>  
          <li >
            <a className="d-flex align-center fs-14 c-black rad-6 p-10" >
              <i className="fa-sharp fa-solid fa-sheet-plastic fa-fw"></i>
              <span>Create Plans</span>
            </a>
          </li>  
          <li >
            <a className="d-flex align-center fs-14 c-black rad-6 p-10" >
              <i className="fa-solid fa-repeat fa-fw"></i>
              <span>PlayBack</span>
            </a>
          </li>   */}

        </ul>

      </div>
      <Container />

    </div>
  )

}

export default Sidebar;