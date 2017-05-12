import React, { Component } from 'react';

export default class Search extends Component { 
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <section className="buscador">
        <input type="text" placeholder="Buscar Cancha" onChange={this.props.searchBy}/>
      </section>   
    )
  }
}