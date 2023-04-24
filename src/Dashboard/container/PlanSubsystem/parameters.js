import  React from 'react';

import PlanSetName from './planSetName';
import { useDispatch, useSelector } from 'react-redux';
import { GetPlanById, TakeDelay, TakeRepeat, nowDate, pushToArray } from '../../../Redux/PlanSlice';

const Parameters = () => {
  const {PlanCommendData} = useSelector(state => state.plan)
  const dispatch = useDispatch();
    return(
        <div>
    {/* <PlanSetName/> */}
        <div className="settings-page m-20 d-grid gap-20"></div>
          <div className="editinfo p-20 bg-white rad-10 bs">
            
            <div className="mb-15 between-flex">
    
          <div className="p-10 bg-white rad-10" style={{width: "72%"}}>
            <h2 className="mt-0 mb-10">General Info</h2>

    <p>commend id :<b>{PlanCommendData.subSystemId}</b> subsystem id:<b>{PlanCommendData.commandID}</b></p>
            <div className="mb-15">
              <label className="fs-14 c-grey d-block mb-5" >Repeat</label>
              <input
                className="b-none border-ccc p-10 rad-6 d-block w-full"
                id="last"
                type="text"
                placeholder="0"
                onChange={(repeat)=>{dispatch(TakeRepeat({repeat:repeat.target.value}))}}
              />
            </div>
            <div className="mb-15">
              <label className="fs-14 c-grey d-block mb-5" >Delay</label>
              <input
                className="b-none border-ccc p-10 rad-6 d-block w-full"
                id="last"
                type="text"
                placeholder="0"
                onChange={(delay)=>{dispatch(TakeDelay({delay:delay.target.value}))}}
              />

            </div>

            </div>
            
           </div>
           <div style={{textAlign: "right"}}>
             <a className="button bg-blue c-white btn-shape ml-10" onClick={()=>{dispatch(pushToArray())}}>add to plan</a>
             </div>
          </div>


          </div>
 
        )
  
}

export default Parameters;