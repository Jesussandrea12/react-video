import React from 'react'
import Playlist from '../../playlist/components/playlist'

function Category(props) {
  return (
    <div>
    
      <section className="hero is-light">
        <div className="hero-body">
          
          <h3 className="title is-3 is-spaced has-text-centered">{ props.title }</h3>
          <p className="title is-6 is-spaced has-text-centered">{ props.description }</p>
          <Playlist handleOpenModal={ props.handleOpenModal } playlist={ props.playlist } />

        </div>
      </section>
      
    </div>
  )
}

export default Category;