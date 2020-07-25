import React from "react";

import Col from "react-bootstrap/Col";

import Modal from "react-modal";
import Container from "react-bootstrap/Container";


import EstimateForm from "./estimateForm";

//import homeStyles from "./home.module.css";
//import "./home.module.css";

class HeroHeaderSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      className: "",
      shouldCloseOnOverlayClick: "",
      shouldCloseOnEsc: "",
      shouldReturnFocusAfterClose: "",
      contentLabel: "",
    };
  }

  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true });
  };

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <a onClick={this.handleModalOpen}>
          Get A Quote
        </a>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Request A Quote"
          id="estimate"
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          shouldReturnFocusAfterClose={true}
          /*className={homeStyles.modalmailing}
          overlayClassName={homeStyles.modalmailingOverlay}*/
        >

            <EstimateForm />
        </Modal>
      </>
    );
  }
}

export default HeroHeaderSection;
