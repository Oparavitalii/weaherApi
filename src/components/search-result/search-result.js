import React, { Component } from "react";
import filterCity  from "../../json/jsonFilter";
import "./search.css";

export default class Search extends Component {

    chooseCity = (e) => {
       this.props.chooseCity(e.target.innerText.toLowerCase())
    }

    filter(arr,textEntry) {
        return arr.filter((el) => {
           return el.toLowerCase().startsWith(textEntry) 
           
        })
    }
    render() {
       
        const city = filterCity;
        const visibleResult = this.filter(city,this.props.textEntry);

        const cities = visibleResult.map((el,key) => {
            return (    
                <li id={key} onClick={this.chooseCity}  className="result__item" key ={el}> {el} </li>
            )
        })

        const filterCities = cities.slice(0,5);

        return(
            <div className={this.props.textEntry  ? "result" : "dnone"}>
                <div className="container">
                    <ul className="result__wr">
                        {filterCities}
                    </ul> 
              </div>
            </div>
        )
    }
}