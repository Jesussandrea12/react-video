import React from 'react'
import image from './error-img.svg'

function RegularError(props) {
  const styles = {
    innerWrap: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh'
    },
    margin: {
      margin: '1em'
    }
  }
  return (
    <div style={styles.innerWrap}>
      <img src={image} style={styles.margin} width="200" alt="Illustration"/>
      <h1 className="title is-3 is-spaced">Opps... Something just happened</h1>
    </div>
  )
}

export default RegularError