import React, { Component } from "react";

import WeatherDayItem from "../weather-day/weather-day";
import "./weather-days.css"

export default class WeatherDays extends Component {
   
    render() {
        const {city,country,error} = this.props
        return (
        <div className="wdays">
            <div className="container">          
                        <WeatherDayItem 
                                        error={error} 
                                        city={city} 
                                        country={country} />
            </div>
        </div>
        
    )
    }
}
