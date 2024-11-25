import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import { SlArrowRightCircle } from "react-icons/sl";

function FormExample() {
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const navigate = useNavigate('');
  
  function handleSubmit() {
    navigate('/B');
  }

  function FormFloatingBasicExample() {
    handleClose();
    navigate('/FeedBack');
  }

  function handleSac() {
    navigate('/Signin');
  }

  function handleRec() {
    navigate('/SignUp');
  }
  const handleClose = () => setShow(false);

  return (
    <Navbar style={{ backgroundColor: " rgb(238, 231, 231)", borderRadius: "10px", borderColor: "white" }}>
      <button style={{  borderRadius: "10px", borderColor: "white" }}>
        <Navbar variant="primary" onClick={handleShow}>
          <SlArrowRightCircle />
        </Navbar>
      </button>
      
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
        <button type="submit" onClick={FormFloatingBasicExample}>FeedBack</button>
      </Offcanvas>
      
      <div style={{ paddingLeft: "10px" }}>
        <Nav>
          <img src='https://www.nicepng.com/png/detail/14-141598_gps-icon-gps-icon-png.png' width={40} alt="GPS Icon" />
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Item>
            <Nav.Link eventKey="1" onClick={handleSac} >
              Sign in
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" title="Item" onClick={handleRec}>
              Sign Up
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <Form inline>
        <Row>
          <Col xs="auto">
            <Nav.Link type="submit" onClick={handleSubmit} >Available Slots</Nav.Link>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default FormExample;
