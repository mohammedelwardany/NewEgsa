import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import './styles.css'
const MainSensorStatus = () => {
  
    return(
        <div className='ResultsContainer'>

        <div className="welcome bg-white rad-10 txt-c-mobile block-mobile bs m-20" >

        <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
          <div><span className="d-block c-grey fs-14 mt-10">Tempreture</span><h1>30<sup>°C</sup></h1></div>
          <div><span className="d-block c-grey fs-14 mt-10">Humadity</span><h1>35 %</h1></div>
          <div><span className="d-block c-grey fs-14 mt-10">nearest object</span><h1>10 m</h1></div>

        </div>
      </div>
</div>
 
     
        )
  
}

export default MainSensorStatus;