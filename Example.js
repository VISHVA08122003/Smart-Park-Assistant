
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel'
import '../App.css';
import './Example.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/esm/Button';
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
          <Card.Text>
          Whether it’s a sunny weekend or a busy holiday, our app provides up-to-date information, guiding you to the nearest available parking spot. 
          </Card.Text>
          </div>         
          <Button ref={ref} onClick={handleClick}>
          Click me!
        </Button>
        <Overlay
          show={show}
          target={target}
          placement="right"
          // container={ref}
          // containerPadding={20}
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
          
        <Overlay
          show={show}
          target={target}
          placement="right"
          // container={ref}
          // containerPadding={20}
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
          Whether you need a spot close to playgrounds for a family outing or near hiking trails for an adventure, our app personalizes your parking experience
          </Card.Text>
          </div>
          <Button ref={ref} onClick={handleClick}>
          Click me!
        </Button>
        <Overlay
          show={show}
          target={target}
          placement="right"
          // container={ref}
          // containerPadding={20}
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
export default DarkVariantExample;