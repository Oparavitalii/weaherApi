import React, { Component } from "react";

import clouds from "./clouds.png";
import rain from "./rain.png"
import sunny from "./sunny.png"
import snow from "./snow.png"
import planet from "./default.png"

export default class WeatherIconDay extends Component {

    iconForShow() {
        const {precipitation} = this.props;
        switch(precipitation) {
            case "cloudy" :
            case "partly-cloudy-night" :
            case "partly-cloudy-day" :
            case "wind" :
                return clouds
            case "snow":
            case "snow-showers-day":
            case "snow-showers-night":
                return snow
            case "rain":
            case "showers-day":
            case "showers-night":
                return rain
            case "clear":
            case "clear-day":
            case "clear-night":
                return sunny
        
        default:
            return planet
        }
    }

    render() {
        return (
        <img alt="icon" src={this.iconForShow()} ></img>
        )
    }
}