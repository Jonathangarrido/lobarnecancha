import React, { Component } from 'react';

import Header from './header'
import ListItems from './list-items'

export default class App extends Component { 
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>
       <Header />
       <ListItems />
      </div>
    )
  }
}