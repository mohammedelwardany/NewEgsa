import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import Lines from '../charts/line';
const ChartHandles = () => {
  
    return(
        <div className="welcome bg-white rad-10 txt-c-mobile block-mobile bs m-20" style={{minWidth:100,width:600}}>

        <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
            <Lines/>
        </div>
      </div>

 
     
        )
  
}

export default ChartHandles;