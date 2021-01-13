import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, } from 'react-bootstrap';
import PublishedMessage from './PublishedMessage'

const NewPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    desc: "",
    img: "",
  });

  const changeValueHandler = (event) => {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  };

  const [publishedMessage, setSuccessMessage] = useState(false);

  const addPostShowSuccess = (event) => {
    event.preventDefault();

    setSuccessMessage(true);

    axios.post("http://localhost:3001/posts", newPost).then((response) => {
      console.log(response.data);      
    });  
  };

  return (
    <Container id="newPost" className="d-flex justify-content-center">      
      <Form className="newPost text-center m-5" onSubmit={addPostShowSuccess} >
      <h1>Add new post</h1>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text"
            name="title"
            id="title"
            onChange={changeValueHandler} 
            maxLength={40}
             />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Author</Form.Label>
          <Form.Control 
            type="text"
            name="author"
            id="author"
            onChange={changeValueHandler}
            maxLength={40} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your post</Form.Label>
          <Form.Control 
            as="textarea" 
            type="text"
            name="desc"
            id="desc"
            onChange={changeValueHandler}
            rows={8} 
            maxLength={800}
            />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Image URL</Form.Label>
          <Form.Control 
            type="text"
            name="img"
            id="img"
            onChange={changeValueHandler}>

            </Form.Control>
        </Form.Group>
        <Button 
          className="mb-2"
          variant="primary"
          type="submit">Submit new post       
        </Button>
        {publishedMessage && <PublishedMessage />}       
      </Form>
    </Container>          
  );
};

export default NewPost;

