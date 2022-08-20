import React, { Component } from "react";
import ApiData from "../api-data";
import Form from "../form/form";
import Search from "../search-result";
import WeatherDays from "../weaher-days";

import "./app.css"


export default class App extends Component {  

    state = {
        city: "kiev",
        textEntry: ""
    }

    onSubmit = (city) => {
        this.setState({city}) 
    }

    chooseCity = (city) => {
        this.setState({city}) 
    }

    getTextEntry = (textEntry) => {
        this.setState({textEntry: textEntry.toLowerCase()})
    }

    componentDidCatch() {
        console.log("error")
    }
    render() {
        console.log(this.state.choosenCity)
        return (
            <div className="app">
            <div className="header">
                <div className="form__boundry"> 
                <Form getTextEntry={this.getTextEntry} onSubmit={this.onSubmit} />
                <Search textEntry={this.state.textEntry} chooseCity={this.chooseCity}/>
                </div>
                <ApiData propsCity={this.state.city}/>
            </div>
             
            </div>
        )
    }
}