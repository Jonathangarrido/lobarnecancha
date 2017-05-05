import React, { Component } from 'react';
import firebase from 'firebase'

import ListItems from './list-items'
import Search from './search'

export default class App extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      canchas : [],
      inputValue: ''
    }
    this.searchBy = this.searchBy.bind(this)

    
  }

  componentWillMount () {
    firebase.database().ref('canchas').on('value', snapshot => {
      this.setState({ canchas : snapshot.val()})
    })
  }
  
  searchBy(input){
		this.setState({ inputValue : input.target.value })
	}

  render () {
    return (
      <div>
       <header className='header'>BarneCanchas</header>
       <Search searchBy={this.searchBy} />
       <ListItems canchas={this.state.canchas} inputValue={this.state.inputValue.toLowerCase()}/>
      </div>
    )
  }
}