import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Add from '@mui/icons-material/Add';
import { grey } from '@mui/material/colors';
import { ModalOverflow } from '@mui/joy';
import LeaveForm from './LeaveForm';


export default function BasicModalDialog() {
  const [open, setOpen] = React.useState(false);
  const primary = grey[400]
  
  const clickme = ()=>{
    setOpen(false)
  }
  


  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: primary }}
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        Create New
      </Button>
      <Modal open={open}  >
        <ModalOverflow>
        <ModalDialog>
            <ModalClose variant="solid" color="neutral" sx={{ m: 4 }} onClick={clickme} />
           
           {/*
          <DialogContent>Fill in the information of the project.</DialogContent> */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <LeaveForm/>
          </form>
        </ModalDialog>
        </ModalOverflow>
        
      </Modal>
    </React.Fragment>
  );
}
