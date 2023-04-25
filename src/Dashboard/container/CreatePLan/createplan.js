import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import Parameters from '../PlanSubsystem/parameters';
import PlanSubsystem from '../PlanSubsystem/PlanSubsystem';
import PlanTable from '../PlanTable/PlanTable';
import AcceptPlanSection from '../PlanSubsystem/acceptPlanSection';
import PlanSetName from '../PlanSubsystem/planSetName';
import { useDispatch, useSelector } from 'react-redux';
import { GetFixedPlannData, GetPlanData, GetPlannData } from '../../../Redux/PlanSlice';
import { useEffect } from 'react';
import CPModal from './planInits/modal';
import '../../../css/framework.css';
import '../../../css/master.css';
import FixedPlansPanel from '../PlanSubsystem/FixedPlanPanel';
import CPAddModal from './addCommends/Addmodal';
const CreatePlan = () => {
  const { allPlanData } = useSelector(state => state.plan)
  const { planName } = useSelector(state=>state.plan)
  const { planDateTime } = useSelector(state => state.plan)
  // const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch()
  useEffect(() => {
    // setOpen(true)
    // console.log(open)
    dispatch(GetPlannData());
    dispatch(GetFixedPlannData());


  }, [dispatch])


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (<>
    <div>
      <div className=' m-20 gap-20'>

        <h1 className="p-relative">Create Plan</h1>
      </div>
      <div >
        <div className="settings-page m-20 d-grid gap-20">


          <div className="welcome bg-white rad-10 txt-c-mobile block-mobile p-20 rad-10 m-20 bs">
            <div className='d-flex between-flex'>
              <h2 className="mt-0 mb-20">Execution</h2>
              <div style={{ display: 'flex', alignItems: "end", justifyContent: 'end' }}>

                <CPModal />
              </div>
            </div>


            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginLeft={1}>
                <Grid xs={6}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: 'start', justifyContent: 'center' }}>

                    <div className='d-flex align-center fs-15 fw-bold mt-10'><span className="c-grey">plan id :</span>12</div>
                    <div className='d-flex align-center fs-15 fw-bold mt-10'><span className="c-grey">plan name :</span>{planName}</div>
                    <div className='d-flex align-center fs-15 fw-bold mt-10'><span className="c-grey">plan size :</span>12</div>
                  </div>

                </Grid>
                <Grid xs={6}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: 'start' }}>

                    <div className='d-flex align-center fs-15 fw-bold mt-10'><span className="c-grey">execution time :</span>{planDateTime}</div>
                    <div className='d-flex align-center fs-15 fw-bold mt-10'><span className="c-grey">Rover id :</span>RVR1233Q</div>
                    <div className='d-flex align-center fs-15 fw-bold mt-10'><span className="c-grey">Rover status :</span>12</div>
                  </div>
                </Grid>
                {/* <Grid xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid xs={6}>
          <Item>4</Item>
        </Grid> */}
              </Grid>
            </Box>





            {/* <button className="visit d-block fs-14 bg-blue c-white btn-shape" >edit info</button> */}


          </div>
          <div >

            {/* <PlanSubsystem/>
        <div>
        <Parameters/>
        </div> */}
            <AcceptPlanSection />


          </div>
        </div>

        <div className="m-20 d-grid gap-20">

          <PlanTable statusstate={"none"}
            dataSet={allPlanData}
            planName={planName}
            planDate={planDateTime}
            elementsss={
              <>
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                  <CPAddModal />


                </Stack>
              </>

            }
          />

        </div>


      </div>






    </div>

  </>)
}

export default CreatePlan;