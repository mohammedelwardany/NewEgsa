import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import CPSteps from './steps';
import PlanSetName from '../../PlanSubsystem/planSetName';
import FixedPlansPanel from '../../PlanSubsystem/FixedPlanPanel';
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 500,
  bgcolor: 'background.paper',
  border: '2px solid #00000035 r',
  borderRadus:30,
  boxShadow: 24,
  p: 4,

};



export default function CPModal({useElement,openstate}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleInterptClose = () => setOpen(false);
    useEffect(() => {
      handleOpen()
    }, [])
    
  return (
    <div>
      <Button onClick={handleOpen} variant="contained" endIcon={<EditIcon />}>
        Edit
      </Button>
        <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        disableAutoFocus={true}
        disableEnforceFocus={true}
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Plan
          </Typography>
          <div className='m-20 gap-20'>
</div>
          <CPSteps
          modalClosee={handleClose}
          />
          
        </Box>
      </Modal>
    </div>
  );
}