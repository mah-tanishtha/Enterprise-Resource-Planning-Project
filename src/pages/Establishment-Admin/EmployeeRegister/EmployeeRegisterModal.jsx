import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Add from '@mui/icons-material/Add';
import EmployeeForm from '../EmployeeForm';
import { ModalOverflow } from '@mui/joy';

export default function BasicModalDialog() {
  const [open, setOpen] = React.useState(false);
  const clickme = ()=>{
    setOpen(false)
  }
  


  return (
    <React.Fragment>
      <Button
        variant="solid"
        color="primary"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        ADD A EMPLOYEE
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
            <EmployeeForm/>
          </form>
        </ModalDialog>
        </ModalOverflow>
        
      </Modal>
    </React.Fragment>
  );
}
