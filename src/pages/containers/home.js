import React, { Component } from 'react';
import HomeLayout from '../components/home-layout'
import RelatedLayout from '../components/related-layout'
import Categories from '../../categories/components/categories'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import handleError from '../../error/containers/handle-error'
import HandleError from '../../error/containers/handle-error';

class Home extends Component {
  state = {
    modalVisible: false,
  }

  handleOpenModal = (event) => {
    this.setState({
      modalVisible: true
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    })
  }

  render() {
    return(
      <HandleError>
        <HomeLayout>
          <RelatedLayout />
          <Categories categories={ this.props.data.categories } handleOpenModal={this.handleOpenModal} />

          {
            this.state.modalVisible &&          
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <h2>This is a Modal</h2>
              </Modal>
            </ModalContainer>
          }

        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home