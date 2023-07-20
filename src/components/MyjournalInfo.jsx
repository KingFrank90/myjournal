import React from 'react'
import {Form as BTForm, FormGroup, Input, Label, Col, Button} from 'reactstrap';
import { TextField } from '@mui/material';

function MyjournalInfo() {
  var now = new Date();
  var month = (now.getMonth() + 1);               
  var day = now.getDate();
  return (
    <div>
      <h4>My Journal</h4>
      <BTForm className='form'>
        <div>
            <Label>Thoughts for the day</Label>
            
            <Col sm="4">
            <Label for="date">Date: </Label>
            <Input type="date" name='date' id='date'
             value={day}  /></Col>
            <TextField fullWidth label="Thoughts" id="thoughts" />
        </div>
        <Button type ='submit' color='primary'>Submit</Button>  
      </BTForm>
    </div>
  )
}

export default MyjournalInfo
