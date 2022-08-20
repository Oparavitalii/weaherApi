import React, { Component } from "react";

import icon from "./cloudly.png"

export default class WeatherIcon extends Component {

    weatherIcons = {
        Clouds : {icon}
        // clear sky  : {icon},
        // few clouds : {icon},
        // scattered clouds : {icon},
        // overcast clouds : {icon},
        // shower rain : {icon},
        // rain : {icon},
        // thunderstorm : {icon},
        // mist : {icon},
        // snow : {icon}
    }



    showIcon () {
        
        const objKey = Object.keys(this.weatherIcons["Clouds"])
        // console.log(Object.keys(this.weatherIcons[this.props.precipitation]))
        // console.log(this.weatherIcons["Clouds"][objKey[0]])
        return this.weatherIcons["Clouds"][objKey[0]];
    }

    render() {
     
      const icon = this.showIcon();
        return (
            <img alt="icon" src={icon} ></img>
        )
    }
}