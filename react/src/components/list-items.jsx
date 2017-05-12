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
      <section className="lista-grid">
        
        {
          this.props.canchas.map((cancha, index)=> {
            
            if(cancha.nombre.toLowerCase().search(this.props.inputValue) >  -1) {
              
              
              return (
                <Link 
                  to={`/`+index}
                  className={`lista-tarjeta`} 
                  key={index} 
                > 
                  <img className="lista-tarjeta-imagen"src={`./images/${cancha.imagenes.principal}.jpg`} alt={cancha.nombre}/>
                  <h2 className="lista-tarjeta-titulo h5">{`${cancha.nombre} - ${cancha.id}`}</h2>
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