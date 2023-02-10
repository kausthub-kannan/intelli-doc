import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';


const EditProfile = () => {
    return ( 
        <div className="flex flex-row "> 
		<div className="grow rounded-xl m-8 mr-8 ml-32 p-8 px-72 pt-14 drop-shadow-md md:filter-none" style={{height: "90vh", backgroundColor:"#009ed0"}}>
        <h1>Edit Profile</h1>
    <Form>
     
      
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3">
        
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      
      <FloatingLabel
        controlId="floatingInput"
        label="Phone Number"
        className="mb-3">
        
        <Form.Control type="email" placeholder="XXXXXXXXXXXX" />
      </FloatingLabel>
      
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3">
        
        <Form.Control type="email" placeholder="user@123" />
      </FloatingLabel>

       <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <br />
      
      <Form.Select size="lg">
        <option>Large select</option>
        <option>Large select</option>
        <option>Large select</option>
        <option>Large select</option>
      </Form.Select>
      <br/>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <br/>
      <Button variant="primary" type="submit" className="bg-emerald-500">
        Submit
      </Button>
      {" "} 
      <Button variant="primary" type="reset">
        Reset
      </Button>
      {" "} 
      <Button variant="primary" type="">
        Cancle
      </Button>
    </Form>
		</div>
	</div>
     );
}
 
export default EditProfile;