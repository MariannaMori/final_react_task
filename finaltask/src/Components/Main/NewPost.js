import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Col } from 'react-bootstrap';

const NewPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    desc: "",
    img: "",
  });

  const changeValueHandler = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const addPostHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/posts", newPost).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <>
    <h1>Add new post</h1>
    <form className="newPost" onSubmit={addPostHandler}>
      <Form>
  <Form.Group controlId="formBasicText">
    <Form.Label>Title</Form.Label>
    <Col sm={10}>
    <Form.Control type="text"
            name="title"
            id="title"
            onChange={changeValueHandler}
          />
          </Col>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Author</Form.Label>
    <Col sm={10}>
    <Form.Control type="text"
            name="author"
            id="author"
            onChange={changeValueHandler}
          />
          </Col>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Description</Form.Label>
    <Col sm={10}>
    <Form.Control as="textarea" rows={4} type="text"
            name="desc"
            id="desc"
            onChange={changeValueHandler}
          />
          </Col>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Image</Form.Label>
    <Col sm={10}>
    <Form.Control type="text"
            name="img"
            id="img"
            onChange={changeValueHandler}
          />
          </Col>
  </Form.Group>
  <Button variant="primary" type="submit">
    Add new post
  </Button>
</Form>
</form>
    </>
  );
};

export default NewPost;