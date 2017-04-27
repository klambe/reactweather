import React, { Component } from 'react';
import weatherData from './WeatherData'

class WeatherContent extends Component {
  renderTableHeaders(){
    return(
      <tr>
        <th>Current</th>
        <th>Today</th>
        <th>Tonight</th>
        <th>Tomorrow</th>
      </tr>
    )
  }
  renderTableBody(currentData){
    return(
      <tbody>
      <tr>
      <td>{currentData.current.temperature}</td>
      <td>{currentData.today.temperature}</td>
      <td>{currentData.tonight.temperature}</td>
      <td>{currentData.tomorrow.temperature}</td>
      </tr>
      <tr>
      <td>{currentData.current.summary}</td>
      <td>{currentData.today.summary}</td>
      <td>{currentData.tonight.summary}</td>
      <td>{currentData.tomorrow.summary}</td>
      </tr>
      <tr>
      <td>{currentData.current.description}</td>
      <td>{currentData.today.description}</td>
      <td>{currentData.tonight.description}</td>
      <td>{currentData.tomorrow.description}</td>
      </tr>
      </tbody>
    )
  }

  render(){

    const{placeName}=this.props;

    const currentData = weatherData[placeName];
    if(!currentData){
      return null;
    }

    return(
      <div className="weather-content">
      <h2>Weather in {placeName}</h2>
      <table>
        <thead>
          {this.renderTableHeaders()}
        </thead>

        {this.renderTableBody(currentData)}

      </table>

      </div>
    )
  }
}

export default WeatherContent;
