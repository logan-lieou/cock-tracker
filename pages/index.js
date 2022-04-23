import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function Home() {
  return (
    <div style={{width: 800, margin: "auto", marginTop: 20}}>
      <h1>Enter Your Cock Stats</h1>
        <hr/>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Cock Size</Form.Label>
          <Form.Control type="text" placeholder="Enter cock size" />
          <Form.Text className="text-muted">
            We will never share your cock size with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Girth</Form.Label>
          <Form.Control type="text" placeholder="Enter cock girth" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Agree to share your cock with us?" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
