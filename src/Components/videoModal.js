import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import '../../node_modules/react-modal-video/css/modal-video.css'
import vidpic from '../Assets/Video.jpg'

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
          <button onClick={this.openModal}>
            <img src={vidpic} alt="" className="lg:px-36 lg:py-20 md:px-14 md:py-16 xs:my-7 px-8 "/>
          </button>
        </div>
      </div>
    );
  }
}

export default videoModal;