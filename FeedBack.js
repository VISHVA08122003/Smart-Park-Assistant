import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from 'react';
import './Feedback.css';
function FormFloatingBasicExample() {
  const [isLoading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    if (isLoading) {
      const simulateNetworkRequest = () => new Promise((resolve) => setTimeout(resolve, 2000));
      simulateNetworkRequest().then(() => {
        setLoading(false);
        setShowAlert(true);
      });
    }
  }, [isLoading]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === true) {
      setLoading(true); // simulate async operation
    }
    setValidated(true);
  };

  return (
    <>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          The Feedback is Submitted!!!!
        </Alert>
      )}
      <Navbar>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

          {/* Your other FloatingLabel components here with unique controlIds */}

          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
          </FloatingLabel>

          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      </Navbar>
    </>
  );
}
export default FormFloatingBasicExample;
