import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import { CChart } from '@coreui/react-chartjs';
import Line from './line';
import Radar from './radar';
import Doughnut from './doughnut';
import Bar from './bar';

const Tools = () => {
  
    return(
        <div >
    
        <h1 className="p-relative">Statistics</h1>
           <div className="wrapper d-grid gap-20">

          <Line/>
          <Bar/>
          <Radar/>
          <Doughnut/>  
   
         
     </div>
     </div>
        )
  
}

export default Tools;