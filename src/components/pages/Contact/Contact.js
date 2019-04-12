import React from "react";
import "./Contact.css";
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBFooter } from 'mdbreact';
const Contact = () => (
<div>
<MDBJumbotron fluid className="formColor" >
<MDBContainer >
  <h4 className="display-4">Contact Me</h4>
  <p className="lead">Fill out the form and I will get back to you as soon as possible.</p>
  <MDBRow>
  <MDBCol md="6">
    <form >
      <p className="h5 text-center mb-4">Leave a note</p>
      <div className="grey-text">
        <MDBInput
          label="Your first name"
          icon="user"
          group
          type="text"
          validate
          error="wrong"
          success="right"
        />
        <MDBInput
          label="Your last name"
          icon="user"
          group
          type="text"
          validate
          error="wrong"
          success="right"
        />
        <MDBInput
          label="Your email"
          icon="envelope"
          group
          type="email"
          validate
          error="wrong"
          success="right"
        />
        <MDBInput
          type="textarea"
          rows="2"
          label="Your message"
          icon="pencil-alt"
        />
      </div>
      <div className="text-center">
        <MDBBtn outline color="secondary">
          Send <MDBIcon far icon="paper-plane" className="ml-1" />
        </MDBBtn>
      </div>
    </form>
  </MDBCol>
</MDBRow>
</MDBContainer>
</MDBJumbotron>


<MDBFooter  className="font-small pt-4 mt-4 footer">
<MDBContainer fluid className="text-center text-md-left">
  <MDBRow>
    <MDBCol md="6">
      <h5 className="title">Footer Content</h5>
      <p>
        Here you can use rows and columns here to organize your footer
        content.
      </p>
    </MDBCol>
    <MDBCol md="6">
      <h5 className="title">Links</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">Link 1</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 2</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 3</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 4</a>
        </li>
      </ul>
    </MDBCol>
  </MDBRow>
</MDBContainer>
<div className="footer-copyright text-center py-3">
  <MDBContainer fluid>
    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
  </MDBContainer>
</div>
</MDBFooter>
</div>
// Pull info from input
  
);

export default Contact;
