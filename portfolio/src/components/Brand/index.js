import { Container, Col, Row, Image } from "react-bootstrap";

//Import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

//import React
import { useEffect } from "react";

//import photo of Creator, ME
import me from "../../assets/images/me.jpg";

function Brand() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="override">
    <div className="light blob wave-haikei" id="about">
      <Container className="brand-container">
        <Row>
          <Col data-aos="fade-left">
            <div className="brand-text">

{/* Intro starts here, with a slight about me section */}

              <h1 className="dark-text header">Hi!</h1>
              <br />
              <h2 className="highlight-text header-two">I'm Anthony.</h2>
              <p className="dark-text header-content">
                I'm a devoloper based on the east-coast of Florida.
                Computers and learning new technologies are my passion.
              </p>
            </div>
          </Col>
          <Col className="img-col" data-aos="fade-right">
            <Image
              className="devpic"
              alt="Dev-Image"
              src={me}
              roundedCircle
              fluid
            />
          </Col>
        </Row>
      </Container>
      <div className="spacer light-dark"></div>
    </div>
    </div>
  );
}

//export Brand function
export default Brand;
