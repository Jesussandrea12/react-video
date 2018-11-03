import React from 'react';

function RelatedLayout(props) {
  const styles = {
    label: {
      background: 'hsl(348, 100%, 61%)',
      padding: '5px',
      marginLeft: '5px',
      borderRadius: '5px',
      color: 'white'
    },
    margin1: {
      margin: '1em',
    }
  }

  return(
    <div>
      <h2 className="has-text-weight-semibold is-size-4" style={styles.margin1}>
        Pipe
        <span style={styles.label}>Hub</span>
      </h2>
    </div>
  )
}

export default RelatedLayout