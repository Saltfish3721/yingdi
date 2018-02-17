import React from 'react'
import { Link } from 'react-router'
import { IndexLink } from 'react-router'

import Header from './Header'

export default React.createClass({
  render() {
    return (
    <div>
        <Header/>
        {this.props.children || "head........."}
     </div>
     )
  }
})
