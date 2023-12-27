import * as React from 'react';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<AddCircleOutlineOutlinedIcon />}>
        Add a employee
      </Button>
    </Stack>
  );
}

