import { Container, Col, Row, CardGroup } from "react-bootstrap";

// import Animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

// import react
import { useEffect } from "react";

//import resume pdf
import resume from "../../assets/resume/Resume.pdf";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
<CardGroup>
    <div className="primary blob stacked-waves-haikei" id="resume">

        {/* Resume and corresponding links */}
      <Container className="resume">
        <Row className="footer-row">
          <Col className="empty-col"></Col>
          <Col data-aos="zoom-in" className="left-border">
            <h1 className="header highlight-text">Resume</h1>
            <p className="light-text header-content">
              <a
                className="link"
                href={resume}
                download="AnthonySzymczakResume"
                rel="noreferrer"
              >
                Check out my Resume
              </a>
            </p>
            <p className="light-text header-content">
              <a
                className="link"
                href="https://github.com/AnthonySzymczak"
                target="_blank"
                rel="noreferrer"
                >
                Browse my latest projects on Github
              </a>
            </p>
          </Col>
        </Row>


          <Row className="footer-row">
            <Col data-aos="zoom-in" className="right-border">
              <h1 className="header highlight-text">Contact Me!</h1>
              <p className="light-text header-content">
                Email:{" "}
                <a className="link" href="mailto:anthonyszymczak@msn.com">
                  anthonyszymczak@msn.com
                </a>
              </p>
              <p className="light-text header-content">
                Phone Number: (508)-612-2492
              </p>
              <p className="light-text header-content">
                <a
                  className="link"
                  href="https://www.linkedin.com/in/anthonyszymczak/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect with me on LinkedIn
                </a>
              </p>
            </Col>
            <Col className="empty-col"></Col>
          </Row>
        </Container>
      </div>
      </CardGroup>

  );
}

//Export Footer function

export default Footer;
