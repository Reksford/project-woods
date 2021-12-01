// import {useState} from 'react';
import { Card, Nav } from 'react-bootstrap';

const Sidebar = (props) => {
  return (
    <div className="flex-column col-2 fixed d-flex" style={{height: '100vh'}}>
      <Card style={{width: '100%', justifyContent: 'center'}} className="">
        <Card.Body>
          <Card.Title>Rogue Gone Fishing</Card.Title>
          <Card.Text>{props.cardText}</Card.Text>
        </Card.Body>
      </Card>
      <Nav className="flex-column" activeKey="/">
        <Nav.Link href="/">Go Fishing</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="https://morningpersongames.com/">Morning Person Games</Nav.Link>
      </Nav>
      {props.children}
    </div>
  )
}

export default Sidebar;
