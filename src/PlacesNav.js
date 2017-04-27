import React, { Component } from 'react';

import places from './constants/Places';

class PlacesNav extends Component {
  onClick(value){
    // console.log(text)
    this.props.onPlaceClick(value)

  }

  renderPlaces(){
    var elements =[];

    for (var place in places){
      // console.log(place);
      const{text, value} = places[place];

      elements.push(
        <h2 onClick={this.onClick.bind(this,value)}>
          {text}
        </h2>
      );

    }
    return elements;

  }
  render() {
    return(

    <div className="place-nav">
      {this.renderPlaces()}
    </div>

  );

}
}

export default PlacesNav;
