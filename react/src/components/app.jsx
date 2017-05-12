import React, { Component }
 from 'react';
import firebase from 'firebase'

import ListItems from './List-items'
import Search from './Search'
import PiePagina from './Pie'

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
      <div className="grid-main">
       <header className='header'>BarneCanchas</header>
       <Search searchBy={this.searchBy} />
       <ListItems canchas={this.state.canchas} inputValue={this.state.inputValue.toLowerCase()}/>
       <PiePagina />
      </div>
    )
  }
}