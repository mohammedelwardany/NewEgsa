import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';

const Header = () => {
  
    return(
        <div className="header">
    
        <div className="head bg-white p-15 between-flex bs2">
          <div className="search p-relative">
            <input className="p-10" type="search" placeholder="Type A Keyword" />
          </div>
          <div className="icons d-flex align-center">
            <span className="notification p-relative">
              <i className="fa-regular fa-bell fa-lg"></i>
            </span>
            <img src="imgs/avatar.png" alt="" />
          </div>
        </div>

        </div>
        )
  
}

export default Header;