import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Margin } from '@mui/icons-material';

export default function SwitchLabels() {
  return (
    <FormGroup>
      <FormControlLabel 
      control={<Switch defaultChecked />} label="Label" />
    </FormGroup>
  );
}