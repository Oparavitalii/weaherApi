import React, { Component } from "react";

import Spinner from "../spinner";

import WeatherDay from "../../services/api-days";
import { WeatherIconDay } from "../weather-icons";

import "./weather-day.css";

export default class WeatherDayItem extends Component {
    constructor() {
        super();
        this.state = {
            weatherDay: {},
            loading:true
        }
    }
   
    weatherDaysApi = new WeatherDay();
    
    componentDidMount() {
        this.updateWeatherDays()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.city !== this.props.city) {
            this.setState({
                loading :true
            })
            this.updateWeatherDays()
        }
    }

    updateWeatherDays = () => {
        const {city,country} = this.props;
        if (!city) {
            return
        }
       const data = `${city},${country}`;
       return this.weatherDaysApi.getWeatherData(data)
        .then((weatherDay) => {
            this.setState({
                weatherDay : weatherDay.days,
                loading:false
            })
        })
    }



    render() {
      
        const isVisible = this.props.error ? "none" : "wdays__items";
        const items = this.state.loading ? <Spinner /> : <DaysElements weatherDay={this.state.weatherDay} /> ;
        return (
            <div className={isVisible}> {items}</div> 
        )
    }
}

class DaysElements extends Component {
    key = 100;
    render() {
        const arrayDays = Array.from(this.props.weatherDay).slice(0,7)
         const elements =  arrayDays.map((el) => { 
            const elDate = el.datetime;
            const date = elDate.slice(5).replace("-",".");
            return (
                <div className="wdays__item" key={this.key++}>
                <time className="wdays__date">{date}</time>
                <div className="wdays__api-date">
                <div className="wdays__img"> <WeatherIconDay precipitation={el.icon}/></div>
                    <div className="wdays__column">
                    <div className="wdays__temperatura-day">{el.tempmax}<span>°</span></div>
                    <div className="wdays__temperatura-night">{el.tempmin}<span>°</span></div>
                    </div>
                </div>
                </div>
          )                         
            })

        return (
          <React.Fragment>  { elements } </React.Fragment>
        )
    }
}