import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
// import '../../RoutePage';
const Welcome = () => {
  
    return(
        <div className="welcome bg-white rad-10 txt-c-mobile block-mobile bs">
        <div className="intro p-20 d-flex space-between bg-eee">
          <div>
            <h2 className="m-0">Welcome</h2>
            <p className="c-grey mt-5">FCC System</p>
          </div>
          <img src="imgs/welcome.png" alt="" />
        </div>
        <img src="imgs/avatar.png" alt="" className="avatar" />
        <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
          <div>Anss Mohamed<span className="d-block c-grey fs-14 mt-10">Developer</span></div>
          <div>80 <span className="d-block c-grey fs-14 mt-10">Projects</span></div>
          <div>$8500 <span className="d-block c-grey fs-14 mt-10">Earned</span></div>
        </div>
        <a className="visit d-block fs-14 bg-blue c-white w-fit btn-shape" to="./profile">Profile</a>
      </div>

 
     
        )
  
}

export default Welcome;