import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

const propTypes = {
  canchas: PropTypes.array
}
const defaultProps = {
  canchas: [],
}


class ListItems extends Component { 
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <section className="contenido lista-contenido">
        {
          this.props.canchas.map((cancha, index)=> {
            
            if(cancha.nombre.toLowerCase().search(this.props.inputValue) >  -1) {
              return (
                <Link to={`/`+index} className="cancha__target" key={index}>
                  {cancha.nombre}
                </Link>
              )
            }	
            
            
            
          })
        }
      </section>
    )
  }
}


ListItems.propTypes = propTypes;
ListItems.defaultProps = defaultProps;

export default ListItems;