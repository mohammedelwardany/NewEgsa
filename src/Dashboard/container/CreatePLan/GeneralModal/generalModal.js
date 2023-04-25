import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { GetPlanById, GetPlanByName, TakeArrange, TakePlanId, TakePlanName } from '../../../../Redux/PlanSlice';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 1200,
  bgcolor: 'background.paper',
  border: '2px solid #00000035 r',
  borderRadus: 30,
  boxShadow: 24,
  p: 4,

};



export default function CPGeneralModal({ type, ElementTitle, LinkV, IconButtonV, IconButtonIcon, buttonV, modalTitle, modalElements, buttonColor, ButtonIcon }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const SubmitHandler = () =>{

    if (type == 'name')
    {dispatch(GetPlanByName())}
    if (type == 'id')
    {dispatch(GetPlanById())}
    if (type == 'arrange')
    {dispatch()}

  }
  const onSubmit = () =>{
    SubmitHandler();
    handleClose();
  }
  return (
    <div>
      <Button onClick={handleOpen} style={{ display: buttonV }} color={buttonColor} variant="none" endIcon={ButtonIcon}>
        {ElementTitle}
      </Button>
      <a onClick={handleOpen} style={{ display: { LinkV }, color: 'blue' }}>
        {ElementTitle}
      </a>
      <IconButton style={{ display: IconButtonV }} aria-label="edit" onClick={handleOpen}>
        {IconButtonIcon}
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        disableAutoFocus={true}
        disableEnforceFocus={true}

      >
        <Box sx={style}>
          <div className='fs-15 w-full '>



            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalTitle}
            </Typography>
            <div className='m-20 gap-20'>
            </div>

            <div className='m-20 gap-20'></div>


            {modalElements}


          </div>



          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', pt: 2 }}>
            <Button
              color="inherit"
              sx={{ mr: 1 }}
              onClick={handleClose}
            >
              cancel
            </Button>

            <Button onClick={onSubmit}>
              set
            </Button>
          </Box>


          {/* <Stack justifyContent={'space-between'} direction="row" spacing={2}>
                <Button variant="outlined" color="error" >
                  Cancle
                </Button>
        <Button variant="contained" >
        OK
      </Button>
      </Stack> */}
        </Box>




      </Modal>
    </div>
  );
}