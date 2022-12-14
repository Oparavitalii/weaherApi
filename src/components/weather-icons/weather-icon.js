import React, { Component } from "react";

import clouds from "./clouds.png";
import rain from "./rain.png"
import sunny from "./sunny.png"
import snow from "./snow.png"
import planet from "./default.png"
export default class WeatherIcon extends Component {
    
    iconForShow() {
        const {precipitation} = this.props;
        switch(precipitation) {
            case "Clouds" :
                return clouds
            case "Snow":
                return snow
            case "Rain":
            case "Thunderstorm":
                return rain
            case "Clear":
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