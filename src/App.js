import React, { Component } from 'react';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import Button from './components/Button'
import Alert from './components/Alert'
import { Nav, NavItem } from './components/Nav'
import { Card, CardImage, CardBody, CardTitle, CardText } from './components/Card'
import { Form, FormButton, FormGroup, Input, Label, FormCheck } from './components/Form'
import Container from './components/grid/Container'
import Row from './components/grid/Row'
import Col from './components/grid/Col'


class App extends Component {
  render() {
    return <Container>
        <Row>
          <Col>Even</Col>
          <Col>Columns</Col>
        </Row>
        <Row>
          <Col width={4}>This is 1/3</Col>
          <Col width={8}>This is 2/3</Col>
        </Row>
        <Row>
          <Col sm={4} md={5}>This is 1/3 but even on a small screen</Col>
          <Col sm={8}>This is 2/3 but even on a small screen</Col>
        </Row>
        <Row>
          <Col sm={true}>This is an even column,</Col>
          <Col sm={true}> even on a small screen</Col>
        </Row>
        <div className="mt-3">
          <Button title="Google" href="https://www.google.com/" />
          <Button title="Second" variation="info" />
          <Button title="Third" variation="warning" />
        </div>
        <div className="mt-3">
          <Nav>
            <NavItem>First</NavItem>
            <NavItem active={true}>Second</NavItem>
            <NavItem>Third</NavItem>
          </Nav>
        </div>
        <hr />
        <Alert status="danger">This is my danger alert</Alert>
        <Alert status="warning">This is my warning alert</Alert>
        <Alert status="success">This is my success alert</Alert>
        <Alert status="info">This is my info alert</Alert>
        <Alert status="primary">This is my primary alert</Alert>
        <Alert status="secondary">This is my secondary alert</Alert>
        <Alert status="light">This is my light alert</Alert>
        <hr />
        <div className="myCards">
          <Card>
            <CardImage src={require("./assets/cardimage1.jpg")} alt="My card image" />
            <CardBody>
              <CardTitle>This is my card title</CardTitle>
              <CardText>This is my card text</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={require("./assets/cardimage2.jpg")} alt="My card image" />
            <CardBody>
              <CardTitle>This is my card title</CardTitle>
              <CardText>This is my card text</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={require("./assets/cardimage3.jpg")} alt="My card image" />
            <CardBody>
              <CardTitle>This is my card title</CardTitle>
              <CardText>This is my card text</CardText>
            </CardBody>
          </Card>
        </div>
        <hr />
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" id="email" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" id="password" />
          </FormGroup>
          <FormCheck>Check box label</FormCheck>
          <FormButton type="submit">Submit</FormButton>
        </Form>
      </Container>;
}}

export default App;
