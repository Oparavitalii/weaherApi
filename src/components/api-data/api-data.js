import React, { Component } from "react";
import WeatherApi from "../../services/api";
import {WeatherIcon} from "../weather-icons";

import Error from "../Error";
import Spinner from "../spinner";

import "./api-data.css";



export default class ApiData extends Component {

    state = {
        cityWeather : {},
        error:false,
        loading:true
    }

    weatherApi = new WeatherApi();

    componentDidMount() {
        this.updateWeather();
    }

    componentDidUpdate(prevProps) {
        if(this.props.propsCity !== prevProps.propsCity) {
            this.setState({
                loading:true
            })
            this.updateWeather()
        }
    }
    
    onError = ()  => {
       
        this.setState({
            loading:false,
            error:true
        })
        this.props.isError(this.state.error)
    }
    updateWeather() {
        const {propsCity} = this.props;
        if(!propsCity) {
            return
        }
        this.weatherApi.getCityWeather(propsCity).then((cityWeather) => {
            this.setState({cityWeather,
                error:false,
                loading:false
            })
            this.props.getCountry(cityWeather.country)
            this.props.getCityName(cityWeather.name)
            this.props.isError(this.state.error) 
        })
        .catch(this.onError)

    }

    render() {
        const {error,loading} = this.state;
        const isLoading = loading ? <Spinner /> : <WeatherView cityWeather={this.state.cityWeather}/>;
        const content = error ? <Error /> : isLoading;
            return(
            <section className="api">
                <div className="container">
                    <div className="api__items">
                        <span className="api__square"></span>
                        <span className="api__round"></span>
                        {content}
                    </div>
                </div>
            </section>

        ) 
    }
}

const WeatherView = ({cityWeather}) => {
    const {temp,precipitation,name} = cityWeather;
    const temperatura = parseInt((temp),0).toPrecision(3);
return (
    <React.Fragment>
  
    <div className="api__column">
    <div className="api__img">
        <WeatherIcon precipitation={precipitation} />
    </div>    
        <div className="api__wr">
            <div className="api__celc">{temperatura}<span>°C</span></div>
            <div className="api__atmosfera">{precipitation}</div>
            <div className="api__time">
                <span className="api-city">{name} </span> 
                <span>Current · 11:00PM</span>
            </div>
        </div>
    </div>
</React.Fragment>
)
}