import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { GetPlanByName, TakePlanName } from '../../../../Redux/PlanSlice';

export default function VerticalPlansToggleButtons({dataInvoice,dataKey,datas,dataLabels}) {
  const [view, setView] = React.useState('1');
  const {FixedPlandata} = useSelector(state => state.plan)
  const dispatch = useDispatch();
  const handleChange = async (event, nextView) => {
    setView(nextView);
    console.log(nextView)
    await dispatch(TakePlanName({planName:nextView}))
    dispatch(GetPlanByName())

  };

  return (
    <ToggleButtonGroup
      orientation="horizontal"
      value={view}
      exclusive
      onChange={handleChange}
      style={{display:"flex",flexWrap:"wrap"}}
      
    >


{


FixedPlandata.map(((data,i)=>{
  // const handleButtonClick = event  => {
  //   setActiveButtonId(Number(event.target.value));
  //   console.log(i)
  // }
  return(
    <ToggleButton key={data.id} value={data.name} aria-label="1" style={{margin:"0.5rem 0.5rem 0rem 0.5rem",borderWidth:"0.1rem",borderRadius:"0.5rem",height:"2rem"}}>
    {data.name}
  </ToggleButton>
  )

})

)
}

      

    </ToggleButtonGroup>
  );
}