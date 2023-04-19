import  React, { useState } from 'react';

import '../../../css/framework.css';
import '../../../css/master.css';
import VerticalToggleButtons from '../PlanSubsystem/commendsSubsystem/button';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from 'react-redux';
import { PostBlogImages } from '../../../Redux/BlogSlice';
import { GetPlanData } from '../../../Redux/PlanSlice';
function BasicDatePicker() {
  const [value, setvalue] = useState("")
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker"  onAccept={(e)=>{console.log(e)}}/>
      </DemoContainer>
    </LocalizationProvider>
  );
}



const DayPlanToggle = () => {
  const dispatch = useDispatch()
  const handlepress = ()=>{
    dispatch(GetPlanData())

  }
    return(
        <div style={{minWidth:"100%"}}>
        <div className="projects p-20 bg-white rad-10 m-20 bs">
        <h2 className="mt-0 mb-20">select plan by date</h2>
          <div >
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

            <BasicDatePicker/>
</div>
            </div>
          <h2 className="mt-0 mb-20">Day Plans</h2>
          <div className="responsive-table">
          {/* <VerticalToggleButtons/> */}
          </div>
          <div style={{textAlign: "right",marginTop:30}}>
             <a className="button bg-blue c-white btn-shape ml-10" onClick={handlepress}>get executed plan</a>
             </div>

        </div>

        </div>
        )
  
}

export default DayPlanToggle;