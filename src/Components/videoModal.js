import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import '../../node_modules/react-modal-video/css/modal-video.css'
import vidpic from '../Assets/Video.jpg'
import './styles/Video.css'

export class videoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <div>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="Mdcw3Sb98DA"
            onClose={() => this.setState({ isOpen: false })}
          />
          <button className="text-center justify-center content-center" onClick={this.openModal}>
            <img src={vidpic} alt="" className="btn lg:w-8/12 lg:py-0 lg:px-0 lg:mx-auto md:px-14 md:py-16 xs:w-10/12 xs:mx-auto "/>
          </button>
        </div>
      </div>
    );
  }
}

export default videoModal;