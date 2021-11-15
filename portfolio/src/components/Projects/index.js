import { Card, Container, CardGroup, Button } from "react-bootstrap";

//Animate on Scroll library import

import Aos from "aos";
import "aos/dist/aos.css";

//React import

import { useEffect } from "react";

//Photo imports

import Crypto from "../../assets/images/Crypto.png";
import CocktailDreamer from "../../assets/images/CocktailDreamer.png";
import Startifacts from "../../assets/images/Startifacts.png";
import LearnJavascript from "../../assets/images/LearnJavascript.png";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="circle-scatter-haikei" id="projects">
      <Container className="card-div margin-bottom">
        {/* Projects title */}

        <h1 data-aos="fade-down" className="light-text header center">
          Projects
        </h1>

        {/* Crypto-tycoon card start */}

        <CardGroup>
          <Card data-aos="flip-left" className="card-container">
            <Card.Img variant="top" src={Crypto} />
            <Card.Body>
              <Card.Title>Crypto-tycoon</Card.Title>
              <Card.Text>
                Become a Doge Coin Millionaire! Play our clicker style game to
                increase your wealth, and improve your hashrate!
              </Card.Text>
              <Button
                href="https://anthonyszymczak.github.io/Crypto-Tycoon/"
                target="_blank"
                variant="secondary"
              >
                Live Site
              </Button>
              {"  "}
              <Button
                href="https://github.com/AnthonySzymczak/Crypto-Tycoon"
                target="_blank"
                variant="secondary"
              >
                Code
              </Button>{" "}
            </Card.Body>
          </Card>

          {/* Startifacts card start */}

          <CardGroup>
            <Card data-aos="fade-up-right" className="card-container">
              <Card.Img variant="top" src={Startifacts} />
              <Card.Body>
                <Card.Title>Startifacts</Card.Title>
                <Card.Text>
                  A web-page application showing a variety of collectors items!
                  Routing, express.js, MYSQL, bcrypt
                </Card.Text>
                <Button
                  href="https://startifacts-online.herokuapp.com/index"
                  target="_blank"
                  variant="secondary"
                >
                  Live Site
                </Button>
                {"  "}
                <Button
                  href="https://github.com/AnthonySzymczak/Startifacts"
                  target="_blank"
                  variant="secondary"
                >
                  Code
                </Button>{" "}
              </Card.Body>
            </Card>

            {/* Cocktail Dreamer card start */}

            <Card data-aos="fade-up-left" className="card-container">
              <Card.Img variant="top" src={CocktailDreamer} />
              <Card.Body>
                <Card.Title>Cocktail Dreamer</Card.Title>
                <Card.Text>
                  The most forward thinking Bartending app out there! Welcome to
                  my teams Full Stack App, Cocktail Dreamer. Uses React, Graphql
                  backend
                </Card.Text>
                <Button
                  href="https://cocktail-dreamer.herokuapp.com/"
                  target="_blank"
                  variant="secondary"
                >
                  Live Site
                </Button>
                {"  "}
                <Button
                  href="https://github.com/AnthonySzymczak/Cocktail-Dreamer"
                  target="_blank"
                  variant="secondary"
                >
                  Code
                </Button>{" "}
              </Card.Body>
            </Card>
          </CardGroup>

          {/* Learn Javascript Card start */}

          <Card data-aos="flip-left" className="card-container">
            <Card.Img variant="top" src={LearnJavascript} />
            <Card.Body>
              <Card.Title>Learn JavaScript!</Card.Title>
              <Card.Text>
                :underconstruction: React website to help others learn
                JavaScript, and multilevel algorithms.
              </Card.Text>
              <Button
                href="https://github.com/AnthonySzymczak/LearningJavaScript"
                target="_blank"
                variant="secondary"
              >
                Code
              </Button>{" "}
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <div className="spacer light-dark"></div>
    </div>
  );
}


//Export function Projects
export default Projects;
