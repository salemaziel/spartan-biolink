import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeCard from './HomeCard'






const HomePage = () => (
  <>
    <Container >
      <Row>
        <Col className="NoMobile"  xs={3} />
        <Col>
            <HomeCard />
        </Col>
        <Col className="NoMobile" xs={3}/>
      </Row>
    </Container>
  </>
);

export default HomePage;
