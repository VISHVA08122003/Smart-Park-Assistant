import React, { useState, useRef } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import { SlArrowRightCircle } from "react-icons/sl";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import './Home.css';
function FormExample() {
    // ... FormExample component code ...
    const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const navigate = useNavigate('');
  function handleSubmit(){
    navigate('/B');
  }
  function FormFloatingBasicExample(){
    handleClose();
    navigate('/FeedBack');
  }
  function handleSac(){
    navigate('/Signin');
  }
  function handleRec(){
    navigate('/SignUp');
}
  const handleClose = () => setShow(false);
  return (
    
    <Navbar className="">
    <button style={{backgroundColor:"white", borderRadius:"10px",borderColor:"white"}}><Navbar variant="primary" onClick={handleShow}>
    <SlArrowRightCircle />
      </Navbar></button>
      
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
      
      <div style={{paddingLeft:"10px"}}>
      <Nav>
            <img src='https://www.nicepng.com/png/detail/14-141598_gps-icon-gps-icon-png.png' width={40}></img>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Item>
        <Nav.Link eventKey="1" onClick={handleSac}>
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
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" onClick={handleSubmit}>Booking Slot</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

function DarkVariantExample() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
           src="https://cdn.dribbble.com/users/1287580/screenshots/5410442/dribbble_2.gif"
            alt="First slide"
            width={1150}
            height={500}
          />
          <Carousel.Caption>
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.formulasantander.com/wp-content/uploads/2019/02/The-Working-Of-Car-Parking-Management-System6.jpg" />
        <Card.Body>
        <div style={{color:"black"}}>
          <Card.Title>Navigate to the Nearest Spot</Card.Title>
          <Card.Text >
          Whether it’s a sunny weekend or a busy holiday, our app provides up-to-date information, guiding you to the nearest available parking spot.
          </Card.Text>
          </div>
          <Button ref={ref} onClick={handleClick}>
          Click me!
        </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
        </Card.Body>
      </Card>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.gifer.com/embedded/download/921j.gif"
            alt="Second slide"
            width={1150}
            height={500}
          />
          <Carousel.Caption>
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.megasmartsystem.com/uploads/202132392/car-parking-management-system30495401025.jpg" />
        <Card.Body>
        <div style={{color:"black"}}>
          <Card.Title>Park with Ease</Card.Title>
          <Card.Text>
      Our Smart Park Assistant application guides you directly to available parking spots, saving you time and frustration. 
          </Card.Text>
          </div>
          <Button ref={ref} onClick={handleClick}>
          Click me!
        </Button>
        </Card.Body>
      </Card>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://diamond-iste.weebly.com/uploads/1/4/0/0/140064219/3f3d3ae5efc0673fc33ef8dd145c049a_orig.gif"
            alt="Third slide"
            width={1150}
            height={500}
          />
          <Carousel.Caption>
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.creativ-eras.com/assets/images/software-parking.png" />
        <Card.Body>
        <div style={{color:"black"}}>
          <Card.Title>Your Parking, Your Way</Card.Title>
          <Card.Text>
          Whether you need a spot close to playgrounds for a family outing or near hiking trails for an adventure, our app personalizes your parking experience.
  
          </Card.Text>
          </div>
          <Button ref={ref} onClick={handleClick}>
          Click me!
        </Button>
        <Overlay
          show={show}
          target={target}
          placement="right"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Header as="h3">Popover bottom</Popover.Header>
            <Popover.Body>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Body>
          </Popover>
        </Overlay>
        </Card.Body>
      </Card>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            
    
            <div>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="google" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="github" />
              </a>
            </div>
          </section>
          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    Company name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                  </p>
                </MDBCol>
                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      React
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Laravel
                    </a>
                  </p>
                </MDBCol>
    
                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Help
                    </a>
                  </p>
                </MDBCol>
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    SKCET
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                skcet@ac.in
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> +91 9677368566
                  </p>
                  <p>
                    <MDBIcon icon="print" className="me-3" /> +91 9363669372
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2024 Copyright:
            <a className='text-reset fw-bold' href='https://r.search.yahoo.com/_ylt=Awrx_niParJlT4QTu227HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1706220303/RO=10/RU=https%3a%2f%2fskcet.ac.in%2f/RK=2/RS=qKwp8UGCEIsmK.HMYMBnz37p3bg-'>
              SKCET.com
            </a>
          </div>
        </MDBFooter>
      );
}

export { FormExample, DarkVariantExample, Footer };
