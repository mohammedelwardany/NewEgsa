import  React from 'react';



import '../../../css/framework.css';
import '../../../css/master.css';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
  );
}




const GetExecutedPlan = () => {
  
    return(
        <div className='GetExecutedPlan'>
        <div className="projects p-20 bg-white rad-10 m-20 bs">
          <h2 className="mt-0 mb-20">select plan by date</h2>
          <div >
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

            <BasicDatePicker/>

            </div>
            <div style={{textAlign: "right",marginTop:30}}>
             <a className="button bg-blue c-white btn-shape ml-10" href="#">get executed plan</a>
             </div>
          
          </div>
        </div>

        </div>
        )
  
}

export default GetExecutedPlan;