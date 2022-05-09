import { Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react'
import { Form, Button } from 'react-bootstrap';
import AdminBar from '../../components/AdminBar';
 
class AddGame extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {categories:[], platforms:[], name:'', photo: '', video:'', synopsis:'', developer: '', price:'', category:'', platform:''};
  }

  componentDidMount() {
    fetch('http://localhost:3001/platform/')
            .then(res => {
                return res.json()
             })
            .then(platforms => { 
                //console.log(platforms); 
                this.setState({ platforms })
             });

    fetch('http://localhost:3001/category/')
      .then(res => {
          return res.json()
      })
      .then(categories => { 
          //console.log(categories); 
          this.setState({ categories })
      });
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    console.log(this.state);
    
    fetch('http://localhost:3001/game/', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
        })
        .then((response) => response.json())
        .then((result) => {
        console.log(result)
        alert('A game was added: ' + JSON.stringify(this.state));
        })
 
    event.preventDefault();
}
 
  render() {
    return (
<>
<AdminBar/>
<br></br>
        <Container maxWidth="sm" padding="normal">
      <h1>Form to add a game</h1>
      <br></br>
        <Form onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={this.state.value} name="name" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Photo</Form.Label>
    <Form.Control type="text" value={this.state.value} name="photo" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Video</Form.Label>
    <Form.Control type="text" value={this.state.value} name="video" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Synopsis</Form.Label>
    <Form.Control type="text" value={this.state.value} name="synopsis" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Developer</Form.Label>
    <Form.Control type="text" value={this.state.value} name="developer" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" value={this.state.value} name="price" onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3">
  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name='category'
    value={this.state.value}
    label="Category"
    onChange={this.handleChange}
  >
    {this.state.categories.map((category)=>{
          return<MenuItem key={category._id} name='category' value={category.categoryId}>{category.name}</MenuItem>
        })}
    
  </Select>
</FormControl>
</Form.Group>

<Form.Group className="mb-3">
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Platform</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name='platform'
    value={this.state.value}
    label="Platform"
    onChange={this.handleChange}
  >
    {this.state.platforms.map((platform)=>{
          return<MenuItem key={platform._id} name='platform' value={platform.platformId}>{platform.name}</MenuItem>
        })}
    
  </Select>
</FormControl>
</Form.Group>

  <Button variant="primary" type="submit" value="Submit">
    Add
  </Button>
</Form>
</Container>
</>
    );
  }
}
 
export default AddGame;