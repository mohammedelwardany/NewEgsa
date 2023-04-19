import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip
} from 'chart.js';

import {Bar} from 'react-chartjs-2';
const Welcome = () => {
  
    const data = {
        labels: ['chart.js']
    }

    return(
        <div className="welcome bg-white rad-10 txt-c-mobile block-mobile bs">
        <div>
            <Bar
            data = {data}
            options= {options}
            ></Bar>
        </div>
      </div>

 
     
        )
  
}

export default Welcome;