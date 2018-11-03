import React from 'react'
import Media from './media'
import './playlist.css'

function Playlist(props) {
  return(
    <div>

      <section className="hero is-light">
        <div className="hero-body">
          
          <div className="Playlist">
            <div className="columns">
              {
                props.playlist.map(item => {
                  return <Media handleClick={ props.handleOpenModal } { ...item } key={ item.id } />
                })
              }
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Playlist;