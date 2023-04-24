import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import CPAddSteps from './Addsteps';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 1200,
  bgcolor: 'background.paper',
  border: '2px solid #00000035 r',
  borderRadus:30,
  boxShadow: 24,
  p: 4,

};



export default function CPAddModal({useElement,openstate}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleInterptClose = () => setOpen(false);
    
  return (
    <div>
      <Button onClick={handleOpen}>Opennnn</Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        disableAutoFocus={true}
        disableEnforceFocus={true}
        
      >
        <Box sx={style}>
          <div className='fs-15 w-full '>


         
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Plan
          </Typography>
          <div className='m-20 gap-20'>
</div>
          <CPAddSteps
          modalClosee={handleClose}
          />
          
        <div className='m-20 gap-20'></div>



        <div>
          {`mpu get gyro (3 , 2) , mpu get gyro (3 , 2)`}
        </div>
        
        </div>
        </Box>




      </Modal>
    </div>
  );
}