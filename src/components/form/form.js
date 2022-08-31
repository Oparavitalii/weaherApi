import React, { Component } from "react";

import "./form.css";

export default class Form extends Component {
    state = {
        city: ""
    }

    setCityOfWeather = () => {
        this.setState({
            city: this.props.cityValue
        })
    }

    componentDidMount() {
        this.setCityOfWeather()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.cityValue !== this.props.cityValue) {
            this.setCityOfWeather()
        }
    }

    onChange = (e) => {
        this.props.getTextEntry(e.target.value)
        this.setState({
          city: e.target.value
        }) 
        
    }
    onSubmit = (e) => {
        e.preventDefault();    
        this.props.onSubmit(this.state.city)
        this.setState({
            city:""
        })
    }
    render() {
        return (
            <section className="form">
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <input value={this.state.city}  onChange={this.onChange} className="form-input" type="text" placeholder="Enter your city"/>
                        <button type="submit" className="form-button">Get weather</button>
                    </form>
                </div>
            </section>
        )
    }
}