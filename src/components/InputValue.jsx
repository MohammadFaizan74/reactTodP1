import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const InputValue = ({setTask,update}) => {
  
useEffect(()=>{
  setInputValue(update);
},[update])

  let [Inputvalue,setInputValue]=useState('')


  const onbtnSubmit=()=>{
    setTask(prev=>[...prev,{id:Date.now(),text:Inputvalue}])
    setInputValue('')

  }
  
  
  return (
   <Row>
    <Col sm='9'>
    <Form.Control type="text" 
    onChange={e=>setInputValue(e.target.value)} 
    value={Inputvalue}
   
    placeholder="Normal text" />
      <br />
    </Col>
    <Col sm='3'>
    <Button variant="success" onClick={onbtnSubmit}>Success</Button>
    </Col>
   </Row>
  )
}

export default InputValue