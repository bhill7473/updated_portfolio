
import React from "react";
// import Pcard from "../Pcard/Pcard.js";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Projects.css";
import pp from "./images/ss1.jpg";
import excite from "./images/excite.png";
const Projects = () => (





    <div>
    <div id="project-row" class="row">
    <flip/>
    <div class="col-lg-3 w">
            <img  src={excite} alt="imah"/>
            <div>
              <h5>Excites and Bites</h5>
              <p>Excites and Bites is an application to assist you in finding events anywhere in the world and places 
                    to eat near by the event.</p>
              <a href="https://excitesandbites.herokuapp.com/" className="btn btn-primary wb">See It Live!</a>
            </div>
    </div>
    <div class="col-lg-1 "></div>
     <div class="col-lg-3 w">
     <img   src={pp} alt="imah"/>
     
     <div>
       <h5>Post and Pick</h5>
       <p>Post and Pick is a fantasy basketball application that allows you to record fantasty stats for your favorite players and teams.</p>
       <a href="https://excitesandbites.herokuapp.com/" className="btn btn-primary wb">See It Live!</a>
     </div>
</div>
<div class="col-lg-1 "></div>
<div class="col-lg-3 w">
            <img  src={excite} alt="imah"/>
            <div>
              <h5>Excites and Bites</h5>
              <p>Excites and Bites is an application to assist you in finding events anywhere in the world and places 
                    to eat near by the event.</p>
              <a href="https://excitesandbites.herokuapp.com/" className="btn btn-primary wb">See It Live!</a>
            </div>
    </div>
</div>
  
  <div id="project-secondrow" class="row">
  <div class="col-lg-3 w">
            <img  src={excite} alt="imah"/>
            <div>
              <h5>Excites and Bites</h5>
              <p>Excites and Bites is an application to assist you in finding events anywhere in the world and places 
                    to eat near by the event.</p>
              <a href="https://excitesandbites.herokuapp.com/" className="btn btn-primary wb">See It Live!</a>
            </div>
    </div>
    <div class="col-lg-1 "></div>
    <div class="col-lg-3 w">
            <img  src={excite} alt="imah"/>
            <div>
              <h5>Excites and Bites</h5>
              <p>Excites and Bites is an application to assist you in finding events anywhere in the world and places 
                    to eat near by the event.</p>
              <a href="https://excitesandbites.herokuapp.com/" className="btn btn-primary wb">See It Live!</a>
            </div>
    </div>
<div class="col-lg-1 "></div>
<div class="col-lg-3 w">
            <img  src={excite} alt="imah"/>
            <div>
              <h5>Excites and Bites</h5>
              <p>Excites and Bites is an application to assist you in finding events anywhere in the world and places 
                    to eat near by the event.</p>
              <a href="https://excitesandbites.herokuapp.com/" className="btn btn-primary wb">See It Live!</a>
            </div>
    </div>
</div>
<div id="project-secondrow" class="row">
  <div class="col-lg-3 w">
            <img  src={excite} alt="imah"/>
            <div>
              <h5>Excites and Bites</h5>
              <p>Excites and Bites is an application to assist you in finding events anywhere in the world and places 
                    to eat near by the event.</p>
              <a href="https://excitesandbites.herokuapp.com/" className="btn btn-primary wb">See It Live!</a>
            </div>
    </div>
    <div class="col-lg-1 "></div>
    <div class="col-lg-3 w">
            <img  src={excite} alt="imah"/>
            <div>
              <h5>Excites and Bites</h5>
              <p>Excites and Bites is an application to assist you in finding events anywhere in the world and places 
                    to eat near by the event.</p>
              <a href="https://excitesandbites.herokuapp.com/" className="btn btn-primary wb">See It Live!</a>
            </div>
    </div>
<div class="col-lg-1 "></div>
<div class="col-lg-3 w">
            <img  src={excite} alt="imah"/>
            <div>
              <h5>Excites and Bites</h5>
              <p>Excites and Bites is an application to assist you in finding events anywhere in the world and places 
                    to eat near by the event.</p>
              <a href="https://excitesandbites.herokuapp.com/" className="btn btn-primary wb">See It Live!</a>
            </div>
    </div>
</div>
{/* 
</div> */}

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






);

export default Projects;
