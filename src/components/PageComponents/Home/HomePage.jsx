import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeCard from './HomeCard'
//import Fade from "react-reveal/Fade";






const HomePage = () => (
  <>
    <Container >
      <Row>
        <Col className="NoMobile"  xs={3} />
        <Col>
        {/*<Fade left ssrReveal>*/}

            <HomeCard />
            {/*</Fade>*/}

        </Col>
        <Col className="NoMobile" xs={3}/>
      </Row>
    </Container>
  </>
);

export default HomePage;
