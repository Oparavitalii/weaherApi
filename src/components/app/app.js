import React, { Component } from "react";
import ApiData from "../api-data";
import Form from "../form/form";
import Search from "../search-result";
import WeatherDays from "../weaher-days";
import "./app.css"


export default class App extends Component {  

    state = {
        city: "ascot",
        cityValue: "",
        textEntry: "",
        country: "GB",
        error: false,
        cityName: "ascot",

    }

    onSubmit = (city) => {
        this.setState({city}) 
    }

    chooseCity = (cityValue) => {
        this.setState({cityValue}) 
    }

    getTextEntry = (textEntry) => {
        this.setState({textEntry: textEntry.toLowerCase()})
    }

    getCountry = (country) => {
        this.setState({
            country
        })
    }
    getCityName = (cityName) => {
        this.setState({
            cityName
        })
    }

    isError = (error) => {
        this.setState({
            error
        })
    }

    componentDidCatch() {
        console.log("error")
    }
   
  
    render() {
       const {city,cityName,country,error,textEntry} = this.state;
        return (
            <div className="app">
            <div className="header">
                <div className="form__boundry"> 
                <Form cityValue ={this.state.cityValue} getTextEntry={this.getTextEntry} onSubmit={this.onSubmit} />
                <Search textEntry={textEntry} chooseCity={this.chooseCity}/>
                </div>
                <ApiData isError={this.isError} getCountry={this.getCountry} propsCity={city} getCityName={this.getCityName}/>
                </div>
                <WeatherDays error={error} city={cityName} country={country}/>
            </div>
        )
    }
}