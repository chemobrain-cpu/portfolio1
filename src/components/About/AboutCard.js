import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arierhi Precious </span>
            from <span className="purple"> Delta, Nigeria</span>
            <br />
            I am currently  a freelance software developer.
            <br />
           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> study bootcamp courses
            </li>
          
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Changing the status Quo!"{" "}
          </p>
          <footer className="blockquote-footer">Arierhi Precious</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
