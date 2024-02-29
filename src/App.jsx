import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import InputValue from './components/InputValue';
import List from './components/List';

const App = () => {
const [task,setTask]=useState([])
const [update,setUpdate]=useState('')

const onFilter=(delitem)=>{

  const newTask=task.filter(item=>item.id!==delitem)
   setTask(newTask)
   //console.log(delitem)
 
}
const UpdateItemdbclick=(item)=>{
  setUpdate(item)
  console.log(item);
}

  return (
   <Container>
    <h1 className='text-center'>Todo list</h1>
    <InputValue setTask={setTask}  update={update}  />
    {
      task.map((tasky,idx)=><List key={idx} item={tasky.text} onFilter={onFilter}  id={tasky.id} UpdateItemdbclick={UpdateItemdbclick} />)
    }

   </Container>

  )
}

export default App