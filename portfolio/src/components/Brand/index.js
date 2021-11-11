import {Container, Col, Row, Image} from "react-bootstrap";
import me from '../../assets/images/me.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Brand() {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div className="light blob light-blobs" id="about">
            <Container className="brand-container">
                <Row>
                <Col data-aos="fade-right">
                    <div className="brand-text">
                    <h1 className="dark-text header">Hi!</h1>
                    <br/>
                    <h2 className="highlight-text header-two">I'm Anthony.</h2> 
                    <p className="dark-text header-content">I'm a web devoloper based on the east-coast of Florida. Computers and learning new technologies are my passion.</p>
                    </div>
                </Col>
                <Col className="img-col" data-aos="fade-left">
                <Image className="devpic" alt='Dev-Image' src={me} roundedCircle fluid/>
                </Col>
                </Row>
            </Container>
            <div className="spacer light-dark"></div>
        </div>
    );
}

export default Brand;