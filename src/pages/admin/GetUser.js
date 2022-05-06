import { Box } from '@mui/material';
import React from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap';
import AdminBar from '../../components/AdminBar';
 
class AddPlatform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users:[]};
  }

   
  componentDidMount() {

    fetch('http://localhost:3001/user', {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            'x-access-token': sessionStorage.getItem("token")
        },
        })
        .then(res => {
            return res.json()
         })
        .then(users => { 
            console.log(users); 
            this.setState({ users })
         });
     }
 
  render() {
    return (
<>
<AdminBar/>
<br></br>
<Box style={{ marginLeft: '50px', marginRight: '50px' }}>
<h1>Here is the list of users</h1>
      <br></br>
        <Row>
        {this.state.users.map((user)=>{
        var link = "/getUser/"+user.userId;

          return<>
          <Col>
          <Card style={{ width: '15rem'}} >
          <Card.Body>
              
            <Card.Title>Alias : {user.alias}</Card.Title>
            <Card.Text>Fistname : {user.firstname}</Card.Text>
            <Card.Text>Lastname : {user.lastname}</Card.Text>
            <Card.Text>Mail : {user.mail}</Card.Text>
            <Card.Text>Role : {user.role}</Card.Text>
            <Button variant="primary" href={link}>Update</Button>
          </Card.Body>
        </Card><br></br></Col></>
        })}
        </Row>
        </Box>
 
</>
    );
  }
}
 
export default AddPlatform;