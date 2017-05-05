import React, { Component, PropTypes } from 'react';
import firebase from 'firebase'
import { Link } from 'react-router'

const propTypes = {
  params: PropTypes.object
}
const defaultProps = {
  params: {},
}

class Cancha extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      cancha : []
    }
  }

  componentWillMount () {
    firebase.database().ref('/canchas/'+this.props.params.id).on('value', snapshot => {
      this.setState({ cancha : snapshot.val()})
    })

  }

  
  render () {
    return (
      <div>
        <Link to="/" className="home--back" >Barncanchas</Link>
        <section className="contenido">
          <h1>{this.state.cancha.nombre}</h1>
          <h5>{this.state.cancha.sector}</h5>
          <h5>{this.state.cancha.canchasNumero}</h5>
          <h5>{this.state.cancha.contacto}</h5>
          <h6>{this.state.cancha.descripcion}</h6>
        </section>
      </div>
      
    )
  }
}

Cancha.propTypes = propTypes;
Cancha.defaultProps = defaultProps;

export default Cancha;