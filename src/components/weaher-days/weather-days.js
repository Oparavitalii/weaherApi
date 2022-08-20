import React from "react";

import "./weather-days.css"
import icn from "./cloudly.png";

const WeatherDays = () => {
    console.log(icn)
    return (
        <div className="wdays">
            <div className="container">
                <div className="wdays__items">
                    <div className="wdays__item">
                        <div className="wdays__img"> <img alt="icon" src={icn} ></img></div>
                        <div className="wdays__column">
                        <div className="wdays__temperatura-day">21</div>
                        <div className="wdays__temperatura-night">11</div>
                        </div>
                    </div>
                    <div className="wdays__item">
                        <div className="wdays__img"> <img alt="icon" src={icn} ></img></div>
                        <div className="wdays__column">
                        <div className="wdays__temperatura-day">21</div>
                        <div className="wdays__temperatura-night">11</div>
                        </div>
                    </div>
                    <div className="wdays__item">
                        <div className="wdays__img"> <img alt="icon" src={icn} ></img></div>
                        <div className="wdays__column">
                        <div className="wdays__temperatura-day">21</div>
                        <div className="wdays__temperatura-night">11</div>
                        </div>
                    </div>
                    <div className="wdays__item">
                        <div className="wdays__img"> <img alt="icon" src={icn} ></img></div>
                        <div className="wdays__column">
                        <div className="wdays__temperatura-day">21</div>
                        <div className="wdays__temperatura-night">11</div>
                        </div>
                    </div>
                    <div className="wdays__item">
                        <div className="wdays__img"> <img alt="icon" src={icn} ></img></div>
                        <div className="wdays__column">
                        <div className="wdays__temperatura-day">21</div>
                        <div className="wdays__temperatura-night">11</div>
                        </div>
                    </div>
                    <div className="wdays__item">
                        <div className="wdays__img"> <img alt="icon" src={icn} ></img></div>
                        <div className="wdays__column">
                        <div className="wdays__temperatura-day">21</div>
                        <div className="wdays__temperatura-night">11</div>
                        </div>
                    </div>
                    <div className="wdays__item">
                        <div className="wdays__img"> <img alt="icon" src={icn} ></img></div>
                        <div className="wdays__column">
                        <div className="wdays__temperatura-day">21</div>
                        <div className="wdays__temperatura-night">11</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WeatherDays;