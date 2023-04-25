import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { TakeArrange, TakePlanId, TakePlanName, replacmentFlag } from '../../../Redux/PlanSlice';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const GeneralFunction = ({type , formLabel, placeholder , OnType }) => {
  //   const {planName} = useSelector(state => state.plan)
  const dispatch = useDispatch()
  const handleTtping = (e) => {
    
    if (type == 'name')
    {dispatch(TakePlanName({planName:e.target.value}))}
    if (type == 'id')
    {dispatch(TakePlanId({planId:e.target.value}))}
    if (type == 'arrange')
    {dispatch(TakeArrange({arrange:e.target.value}))}
  }
  return (
    <div>


      <div className="mb-15 between-flex">

        <div className="p-10 bg-white rad-10" >


          <div className="mb-15">
            <label className="fs-14 c-grey d-block mb-5" for="last">{formLabel}</label>
            <input
              className="b-none border-ccc p-10 rad-6 d-block w-full"
              id="last"
              type="text"
              placeholder={placeholder}
            onChange={handleTtping}
            // value={planName}
            />

          </div>



        </div>

      </div>


    </div>

  )

}


const EditPlanTable = () => {
  const [alignment, setAlignment] = React.useState('replace');
const dispatch = useDispatch()
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    dispatch(replacmentFlag({replacmentFlag:newAlignment}))
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="replace">replace</ToggleButton>
        <ToggleButton value="take">take place</ToggleButton>
      </ToggleButtonGroup>

      <GeneralFunction
        formLabel={"to no."}
        placeholder={0}
      />
    </>
  )
}

export { GeneralFunction, EditPlanTable };