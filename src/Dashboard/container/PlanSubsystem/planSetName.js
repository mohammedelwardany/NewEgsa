import  React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ResponsiveDateTimePickers from './DateTimeBicker';
import { useDispatch, useSelector } from 'react-redux';
import { TakePlanName } from '../../../Redux/PlanSlice';

const PlanSetName = () => {
  const {planName} = useSelector(state => state.plan)
  const dispatch=useDispatch()
    return(
        <div style={{marginTop:40}}>
        
          <div className="editinfo p-20 bg-white rad-10 bs">
            
            <div className="mb-15 between-flex">
    
          <div className="p-10 bg-white rad-10" style={{width: "72%"}}>
            <h2 className="mt-0 mb-10">plan name</h2>


            <div className="mb-15">
              <label className="fs-14 c-grey d-block mb-5" for="last">name</label>
              <input
                className="b-none border-ccc p-10 rad-6 d-block w-full"
                id="last"
                type="text"
                placeholder="0"
                onChange={(planName)=>{dispatch(TakePlanName({planName:planName.target.value}))}}
                value={planName}
              />
              
            </div>

            </div>
            
           </div>
      
          </div>


          </div>
 
        )
  
}

export default PlanSetName;