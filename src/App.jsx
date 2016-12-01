import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to="/">App</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App

