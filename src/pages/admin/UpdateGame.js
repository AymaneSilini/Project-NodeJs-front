import { Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react'
import { Form, Button } from 'react-bootstrap';
import AdminBar from '../../components/AdminBar';
 
class UpdateGame extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {categories:[], platforms:[], game:[], name:'', photo: '', video:'', synopsis:'', developer: '', price:'', category:'', platform:''};
  }

  componentDidMount() {
    var url = window.location.href;
    var urlDivided = url.split('/');
    url = 'http://localhost:3001/game/'+urlDivided[urlDivided.length-1];
    console.log(url)
    fetch(url)
            .then(res => {
                return res.json()
             })
            .then(game => { 
                //console.log(platforms); 
                this.setState({ game })
                //console.log(game.synopsis);
             });

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
    var url = window.location.href;
    var urlDivided = url.split('/');
    url = 'http://localhost:3001/game/'+urlDivided[urlDivided.length-1];
    
    fetch(url, {
        method: "PUT",
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
      <h1>Update the game : {this.state.game.name}</h1>
      <br></br>
        <Form onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" defaultValue={this.state.game.name} name="name" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Photo</Form.Label>
    <Form.Control type="text" defaultValue={this.state.game.photo} name="photo" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Video</Form.Label>
    <Form.Control type="text" defaultValue={this.state.game.video} name="video" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Synopsis</Form.Label>
    <Form.Control type="text" defaultValue={this.state.game.synopsis} name="synopsis" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Developer</Form.Label>
    <Form.Control type="text" defaultValue={this.state.game.developer} name="developer" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" defaultValue={this.state.game.price} name="price" onChange={this.handleChange}/>
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

  <Button variant="primary" type="submit" defaultValue="Submit">
    Update
  </Button>
</Form>
</Container>
</>
    );
  }
}
 
export default UpdateGame;