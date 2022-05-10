import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Moment from 'react-moment';
import moment from "moment";
class CommentBox extends React.Component {
    constructor() {
      super();
      
      this.state = {
        showComments: false,
        comments:[],
        pseudo:'',
        content:''

      };
    }

    componentDidMount() {
        var url = window.location.href;
        var urlDivided = url.split('/');
        var url = 'http://localhost:3001/comment/game/'+urlDivided[urlDivided.length-1];
        fetch(url)
                .then(res => {
                    return res.json()
                 })
                .then(comments => { 
                    this.setState({ comments })
                 });

    }
    
    render () {
      const comments = this._getComments();
      let commentNodes;
      let buttonText = 'Show Comments';
      
      if (this.state.showComments) {
        buttonText = 'Hide Comments';
        commentNodes = <div className="comment-list">{comments}</div>;
      }
      
      return(
        <div className="comment-box">
          <h2>Join the Discussion!</h2>
          <CommentForm addComment={this._addComment.bind(this)}/>
          <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
            {buttonText}
          </button>
          <h3>Comments</h3>
          <h4 className="comment-count">
            {this._getCommentsTitle(comments.length)}
          </h4>
          {commentNodes}
        </div>  
      );
    } // end render
    
    _addComment(pseudo, content) {
      const comment = {
        pseudo,
        content
      };
      this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    }
    
    _handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
    
    _getComments() {    
      if (this.state.comments != ''){
      return this.state.comments.map((comment) => { 
        return (
            <div className="comment">
            <p className="comment-header">{comment.pseudo}</p>
            <p className="comment-content">- {comment.content}</p>
            <Moment className="datetime" aria-hidden={true}>
                {comment.date}
            </Moment>
          </div>
          
        ); 
      });
    }
    else {
      return (
        <div className="comment">
        <p className="comment-header">Be the first to comment</p>
      </div>
    ); 
    }
    }
    
    _getCommentsTitle(commentCount) {
      if (commentCount === undefined) {
        return 'No comments yet';
      } else if (commentCount === 1) {
        return "1 comment";
      } else {
        return `${commentCount} comments`;
      }
    }
  } // end CommentBox component
  
  class CommentForm extends React.Component { constructor(props) {
        super(props);
        this.state = {game:'', content: '', pseudo:'', date:''};
      }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => { 
        console.log(this.state);
        var url = window.location.href;
        var urlDivided = url.split('/');
        this.state.game = urlDivided[urlDivided.length-1];
        this.state.date = moment().format("YYYY-MM-DD hh:mm:ss");
        fetch('http://localhost:3001/comment', {
          method: "POST",
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify(this.state)
          })
          .then((response) => response.json())
          .then((result) => {
        console.log(result)
        window.location.reload()
        })
  
          event.preventDefault();   // prevents page from reloading on submit
      }
  

    render() {
      return (
        <Container maxWidth="sm" padding="normal">
        <Form onSubmit={this.handleSubmit} className="comment-form">
        <Form.Group className="mb-3" controlId="formBasicEmail" className="comment-form-fields">
        <Form.Label>Pseudo</Form.Label>
        <Form.Control  placeholder="Pseudo" type="text" value={this.state.value} name="pseudo" onChange={this.handleChange}/>

        <Form.Label>Content</Form.Label>
        <Form.Control  placeholder="Content" type="text" value={this.state.value} name="content" onChange={this.handleChange}/>
        </Form.Group>
        <div className="comment-form-actions">
          <button type="submit">Post Comment</button>
        </div>
        </Form>
        </Container>
      );
    } // end render
    
   
   
     
  } // end CommentForm component
    
  
  
export default CommentBox;
