import React, { Component } from 'react';
import firebase from 'firebase'
import { Link } from 'react-router'

export default class Cancha extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      cancha : []
    }

    // console.log(this.props.params);

  }
  modifiqueURL(str){
    return str.toLowerCase().replace("-",' ').replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  componentWillMount () {
    firebase.database().ref('/canchas/'+this.props.params.id).on('value', snapshot => {
      this.setState({ cancha : snapshot.val()})
    })
    // firebase.database().ref('/canchas/').on('value', snapshot => {
    //   let can = snapshot.val();
    //   let u = 'La Copa';

    //   for(let i=0; i<=can.length; i++){
    //     let p = can[i].nombre;
    //     if( u == p){
    //       this.setState({ cancha : can[i]})
    //       console.log('ok');
    //     }
    //   }

    // })

  }

  
  render () {
    return (
      <div>
        <Link to="/" className="home--back" >Barncanchas</Link>
        <section className="items">
          <h1>{this.state.cancha.nombre}</h1>
          <h5>{this.state.cancha.sector}</h5>
        </section>
      </div>
      
    )
  }
}