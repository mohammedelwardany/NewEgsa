import  React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


import '../../../css/framework.css';
import '../../../css/master.css';
import ResponsiveDateTimePickers from './DateTimeBicker';
import { useDispatch, useSelector } from 'react-redux';
import { GetPlayBack, GetPlaybackByDate, GetPlaybackByName } from '../../../Redux/PlayBackSlice';
import { TakeExecuteLaterEnable, pushPlanPayload, pushToArray } from '../../../Redux/PlanSlice';

const AcceptPlanSection = () => {
  const {executeLater} = useSelector(state => state.plan)
  const {dateDesplay} = useSelector(state => state.plan)

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(TakeExecuteLaterEnable())
  };
    return(
        <div className='fs-15 w-full'>
        <div className="projects p-20 bg-white rad-10 m-20 bs">
          <h2 className="mt-0 mb-20">Execution</h2>
          <div >
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

          <FormGroup>
                 <FormControlLabel control={<Switch  checked={executeLater} onChange={handleChange} />} label="Excute Later" />
            </FormGroup>
            <div style={{display:`${dateDesplay}`}}>
            <ResponsiveDateTimePickers/>
            </div>
            <div style={{textAlign: "right",marginTop:20}}>
             <a className="button bg-blue c-white btn-shape ml-10" onClick={()=>dispatch(pushPlanPayload())}>send</a>
             </div>

            </div>
          
          </div>
        </div>

        </div>
        )
  
}

export default AcceptPlanSection;