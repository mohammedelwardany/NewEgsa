import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import { CChart } from '@coreui/react-chartjs';


const Radar = () => {
  
    return(  
        <div className="quick-draft bg-white rad-10 txt-c-mobile block-mobile bs">
        <CChart 
type="radar"
data={{
labels: [
 'Eating',
 'Drinking',
 'Sleeping',
 'Designing',
 'Coding',
 'Cycling',
 'Running',
],
datasets: [
 {
   label: 'My First dataset',
   backgroundColor: 'rgba(220, 220, 220, 0.2)',
   borderColor: 'rgba(220, 220, 220, 1)',
   pointBackgroundColor: 'rgba(220, 220, 220, 1)',
   pointBorderColor: '#fff',
   pointHighlightFill: '#fff',
   pointHighlightStroke: 'rgba(220, 220, 220, 1)',
   data: [65, 59, 90, 81, 56, 55, 40],
 },
 {
   label: 'My Second dataset',
   backgroundColor: 'rgba(151, 187, 205, 0.2)',
   borderColor: 'rgba(151, 187, 205, 1)',
   pointBackgroundColor: 'rgba(151, 187, 205, 1)',
   pointBorderColor: '#fff',
   pointHighlightFill: '#fff',
   pointHighlightStroke: 'rgba(151, 187, 205, 1)',
   data: [28, 48, 40, 19, 96, 27, 100],
 },
],
}}
/>
       </div>
        )
  
}

export default Radar;