import React from "react";
import "./About.css";
import image from "./images/image3.png";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBFooter, MDBInput, MDBIcon } from "mdbreact";
import pp from "./images/ss1.jpg";
import excite from "./images/excite.png";
import uc from "./images/uc.jpeg";
import predict from "./images/pp.png";
import "./script.js";

const About = () => (
 
<div>
      {/* <MDBContainer className="mt-5 text-center container"> */}
      <MDBRow className="frow">
        <MDBCol className="he">
          <MDBJumbotron className="height">
            <h5 className="h5 display-3 lead">Welcome to my page!</h5>
            <hr></hr>
            <img  id="mainI"alt = " imagS" src={image}/>
            <p className="le">
            Developer, TA, and Tutor. Certificate from the Case Western Reserve Full Stack Coding Boot Camp and currently pursuing a BS in Computer Science at Kent State University. I became interested in programming while trying to figure out on my own how the internet works,
          and playing around with different technologies computers are capable of. Since then, I got serious about learning how everything works, inside and out. I enjoy the creative aspect of programming as well as its practical applications. When I'm not coding, I like to workout, go hiking, listen to music, play video games, and watch movies.
            </p>
            

          </MDBJumbotron>
        </MDBCol>
        <MDBCol className="he">
          <MDBJumbotron className=" height">
         
            <h5 className="h5 display-3 lead">Skills</h5>
            <hr></hr>
            <MDBRow>
            <MDBCol>
            <ul class="b">

       <li>Flask</li>
       <li>Express</li>
       <li>Node.js</li>
       <li>Github</li>
       <li>D3</li>
       <li>jQuery</li>
       <li>Leaflet</li>
       <li>R</li>
       <li>Tensor Flow</li>
       </ul>
      </MDBCol>
      <MDBCol>
      <ul class="b">
       <li>JavaScript</li>
       <li>Python</li>
       <li>SQL</li>
       <li>MongoDB</li>
       <li>React</li>
       <li>Pandas</li>
       <li>VBA</li>
       <li>Excel</li>
       <li>Keras</li>
       </ul>
      </MDBCol>
      </MDBRow>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    {/* </MDBContainer> */}
  
    <div id="project-row" class="row">
    {/* <flip/> */}
    <div class="col-lg-3 col-sm-12  c ">
            <img  src={excite} alt="imah"/>
           
              <h5>Excites and Bites</h5>
              <p>Excites and Bites is an application to assist you in finding events anywhere in the world and places 
                    to eat near by the event.</p>
              <a href="https://excitesandbites.herokuapp.com/" className="btn btn-dark wb">See It Live!</a>
            
    </div>
    {/* <div class="col-lg-1 "></div> */}
     <div class="col-lg-3 col-sm-12 offset-lg-1 c">
     <img   src={pp} alt="imah"/>
     

       <h5>Post and Pick</h5>
       <p>Post and Pick is a fantasy basketball application that allows you to record fantasty stats for your favorite players and teams.</p>
       <a href="https://excitesandbites.herokuapp.com/" className="btn btn-dark wb">See It Live!</a>
    
</div>
{/* <div class="col-lg-1 "></div> */}
<div class="col-lg-3 col-sm-12 offset-lg-1  c">
            <img  src={predict} alt="imah"/>
           
              <h5>Picture Predictor</h5>
              <p>Choose a picture from your computer and let the application predict what it is.</p>
              <a href="https://picturepredictor3.herokuapp.com/" className="btn btn-dark wb">See It Live!</a>
        
    </div>
</div>







  </div>

  


);

export default About;
