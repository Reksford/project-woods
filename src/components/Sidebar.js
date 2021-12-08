// import {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

const Sidebar = (props) => {
  return (
    <div className="flex-column col-3 fixed d-flex" style={{height: '100vh', backgroundColor: '#eee'}}>
      <Card style={{width: '100%', justifyContent: 'center'}}>
        <Card.Body>
          <Card.Title>Rogue Gone Fishing</Card.Title>
          <Card.Text>{props.cardText}</Card.Text>
        </Card.Body>
      </Card>
      <Nav className="flex-column" activeKey="/">
        <Nav.Link href="/fishing">Go Fishing</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="https://morningpersongames.com/">Morning Person Games</Nav.Link>
      </Nav>
      {props.children}
    </div>
  )
}

export default Sidebar;
