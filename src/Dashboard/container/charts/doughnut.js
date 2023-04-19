import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import { CChart } from '@coreui/react-chartjs';


const Doughnut = () => {
  
    return(  
        <div className="quick-draft bg-white rad-10 txt-c-mobile block-mobile bs">
            <CChart
  type="doughnut"
  data={{
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10],
      },
    ],
  }}
/>
            </div>
        )
  
}

export default Doughnut;