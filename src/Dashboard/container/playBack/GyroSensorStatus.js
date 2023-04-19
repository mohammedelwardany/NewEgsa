import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import './styles.css'
const GyroSensorStatus = () => {
  
    return(
        <div className='ResultsContainer'>

        
        <div className="welcome bg-white rad-10 txt-c-mobile block-mobile bs m-20" >

        <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
          <div><span className="d-block c-grey fs-14 mt-10"><h1>x</h1></span><h2>30</h2></div>
          <div><span className="d-block c-grey fs-14 mt-10"><h1>y</h1></span><h2>30</h2></div>
          <div><span className="d-block c-grey fs-14 mt-10"><h1>z</h1></span><h2>30</h2></div>
          <div><span className="d-block c-grey fs-14 mt-10"><h1>xy</h1></span><h2>30</h2></div>
          <div><span className="d-block c-grey fs-14 mt-10"><h1>xz</h1></span><h2>30</h2></div>
          <div><span className="d-block c-grey fs-14 mt-10"><h1>zy</h1></span><h2>30</h2></div>
        </div>
        
      </div>
</div>
 
     
        )
  
}

export default GyroSensorStatus;