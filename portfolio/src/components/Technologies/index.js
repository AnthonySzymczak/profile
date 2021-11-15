import {Container, Col, Row} from "react-bootstrap";
import "devicon/devicon.min.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Technologies() {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div className="primary" id="technologies">
        <Container className="margin-bottom">
            <h1 data-aos="fade-down" className="light-text header center">Technologies</h1>
            <Row className="icon-container ">
                <Col data-aos="fade-right" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html5"/>
                </Col>
                <Col data-aos="fade-right" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css3"/>
                </Col>
            
                <Col data-aos="fade-left" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/>
                </Col>
                <Col data-aos="fade-left" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="reactjs"/>
                </Col>
            </Row>
            <Row className="icon-container light rounded">
                <Col data-aos="fade-right" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs"/>
                </Col>
                <Col data-aos="fade-right" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="expressjs"/>
                </Col>

                <Col data-aos="fade-left" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java"/>
                </Col>
            
                <Col data-aos="fade-left" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="graphql"/>
                </Col>
            </Row>
            <Row className="icon-container highlight rounded">
                <Col data-aos="fade-right" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="tailwind"/>
                </Col>
                <Col data-aos="fade-right" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap"/>
                </Col>
                <Col data-aos="fade-left" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongoosedb"/>
                </Col>
                <Col data-aos="fade-left" className="icon-col">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="c++"/>
                </Col>
                </Row>
        </Container>
        <div className="spacer primary"></div>
        </div>
    );
};

export default Technologies;