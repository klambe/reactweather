import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import sun from './sun.jpg'
import common from './constants/Common'
import PlacesNav from './PlacesNav';
import WeatherContent from './WeatherContent';

const App = React.createClass(  {

  getInitialState(){
    return{
      selectedPlace: 'test'
    }
  },

  onPlaceClick(value){
    console.log(this)
    this.setState({
      selectedPlace: value
    })
  },

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={sun} className="App-logo" alt="logo" />
          <h2>{common.APP_TITLE}</h2>
        </div>
        <PlacesNav onPlaceClick= {this.onPlaceClick.bind(this)}/>
        <WeatherContent placeName={this.state.selectedPlace} />



      </div>
    );
  }
})

export default App;
