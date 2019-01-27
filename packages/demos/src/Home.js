import React from 'react'
import { withRouter } from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <div>
        <h3>Demos</h3>
        <p>React Component library.</p>
      </div>
    )
  }
}

export default withRouter(Home);
