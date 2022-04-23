import Button from 'react-bootstrap/Button'
import Distro from './distro.js'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

export default function Home() {
  const [s, setS] = useState(false);
  const [length, setLength] = useState("");
  const [girth, setGirth] = useState("");

  const onSubmit = () => {
    setS(!s);
  };

  if (s) {
    return (
      <Distro length={parseInt(length)} girth={parseInt(girth)}/>
    )
  } 
  else {
    return (
      <div style={{width: 800, margin: "auto", marginTop: 20}}>
        <h1>Enter Your Cock Stats</h1>
          <hr/>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cock Size (cm)</Form.Label>
            <Form.Control type="text" placeholder="Enter cock size" onChange={e => setLength(e.target.value)}/>
            <Form.Text className="text-muted">
              We will never share your cock size with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Girth (cm)</Form.Label>
            <Form.Control type="text" placeholder="Enter cock girth" onChange={e => setGirth(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Agree to share your cock with us?" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
