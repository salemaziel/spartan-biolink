import React from "react";
import homeStyles from "./home.module.css";
import Card from "react-bootstrap/Card";

import {
  Bg_jpg,
  LogoHelmet1_jpg,
  LogoWords1_png,
} from '../../../images/index'

import { MdPhone, MdLocationOn } from "react-icons/md";
import EstimateModal from "../../estimateModal";

const HomeCard = () => (
    <Card className={homeStyles.CardStyle}>
      <Card.Img variant="top" src={Bg_jpg} className={homeStyles.bannerPhoto} />
      <div className={homeStyles.LogoBox}>
        <img src={LogoHelmet1_jpg} className={homeStyles.Logo} />
      </div>
      <Card.Body>
        <div className={homeStyles.frontText}>
          <Card.Title className={homeStyles.frontTextHeader}>
            <div className="w-100">
              <img src={LogoWords1_png} className={homeStyles.LogoWords} />
            </div>
          </Card.Title>
          <Card.Text>
            <p className={homeStyles.frontTextLocation}>
              <MdLocationOn />
              Southern California
            </p>
            <p className={homeStyles.frontTextBody}>
              Plumbing Maintenance, Plumbing Repairs, Water Heater
              Installations, Inspections, and More.
            </p>
            <p className={homeStyles.frontTextBody}>
              {" "}
              We Build Stronger Connections.
            </p>
            <p className={homeStyles.frontTextBody}>Call Us Today!</p>
          </Card.Text>
        </div>
      </Card.Body>
      <Card.Footer>
        <a href="tel:6194831212">
          <MdPhone color="#0be40b" className={homeStyles.Icon} /> Call Now
        </a>
        <span className="divider" />
        <EstimateModal />
      </Card.Footer>
    </Card>
);

export default HomeCard;
