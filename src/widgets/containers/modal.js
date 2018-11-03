import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class ModalContainer extends Component {
  render() {
    const modalEl = document.createElement('div');
    modalEl.setAttribute('id', 'modal-container');
    document.getElementById('root').appendChild(modalEl);

    return createPortal(
      this.props.children,
      document.getElementById('modal-container')
    )
  }
}

export default ModalContainer;