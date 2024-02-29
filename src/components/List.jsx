import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


const List = ({item,onFilter,id,UpdateItemdbclick}) => {
  return (
    <div>

      <Row>
   
        <Col sm='9'>
      <h1 onDoubleClick={()=>UpdateItemdbclick(item)} >{item }
      </h1>
      </Col>
      <Col sm='3'>
      
      <Button variant="danger" onClick={ ()=>onFilter(id)}  >X</Button>
      </Col>
   
      </Row>
    </div>


  )
}

export default List