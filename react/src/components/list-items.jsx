import React, { Component } from 'react';
import firebase from 'firebase'
import { Link } from 'react-router'

export default class ListItems extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      canchas : []
    }

  }

  componentWillMount () {
    firebase.database().ref('canchas').on('value', snapshot => {
      this.setState({ canchas : snapshot.val()})
    })
    
  }

  handleURL(name){
    return name.toLowerCase().replace(/\s/g,"-");
  }

  
  render () {
    return (
      <section className="items">
        {
          this.state.canchas.map((cancha, index)=> (
            
            <Link to={`/`+index} className="cancha__target" key={index}>
               {cancha.nombre}
            </Link>
            /*
            <Link to={`/`+this.handleURL(cancha.nombre)} className="cancha__target" key={index}>
               {cancha.nombre}
            </Link>
            */
          ))
        }
      </section>
    )
  }
}