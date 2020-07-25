import React from "react";
import homeStyles from "./home.module.css";
import "./home.css";
import Card from "react-bootstrap/Card";

import Bg from "../../../images/kontact-link-bg.png";
import Logo from "../../../images/logo-1-cropped.jpg";
import LogoWords from "../../../images/logo-1-words.png";

import { FaMapMarkerAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import EstimateModal from "../../estimateModal";
import Slide from "react-reveal/Slide";

const HomeCard = () => (
  <Slide left cascade>
    <Card className={homeStyles.CardStyle}>
      <Card.Img variant="top" src={Bg} className="front__bkg-photo" />
      <div className={homeStyles.LogoBox}>
        <img src={Logo} className={homeStyles.Logo} />
      </div>
      <Card.Body>
        <div className="front__text">
          <Card.Title className="front__text-header">
            <div className="w-100">
              <img src={LogoWords} className={homeStyles.LogoWords} />
            </div>
          </Card.Title>
          <Card.Text>
            <p className="front__text-para">
              <FaMapMarkerAlt />
              Southern California
            </p>
            <p className="front__text-para-body">
              Plumbing Maintenance, Plumbing Repairs, Water Heater
              Installations, Inspections, and More.
            </p>
            <p className="front__text-para-body">
              {" "}
              We Build Stronger Connections.
            </p>
            <p className="front__text-para-body">Call Us Today.</p>
          </Card.Text>
        </div>
      </Card.Body>
      <Card.Footer>
        <a href="tel:7604431434">
          <MdPhone color="#0be40b" size="1.5em" /> Call Now
        </a>
        <span className="divider" />
        <EstimateModal />
      </Card.Footer>
    </Card>
  </Slide>
);

export default HomeCard;
