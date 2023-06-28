import React from "react";
import windspeedicon from '../images/icons8-wind.gif'
import humidity from '../images/icons8-humidity.gif'
import pressureicon from '../images/icons8-pressure-gauge.gif'
import img from '../images/icons8-temperature.gif'


export default function Values(props) {

    return (
        <div className="maincard">
            <div className="up-card">
                {props.name && <h1 className="city">{props.values.name}</h1>}
            </div>
            <div className="temperature">
                <img className="temp-icon" src={img} />
                <h1 className="temp-value">{props.values.main && (props.values.main.temp - 273).toFixed(2)}°C </h1>
            </div>
            <div className="humidity">
                <img className="humidity-icon" src={humidity} />
                <h3 className="humidity-value">{props.values.main && props.values.main.humidity}%</h3>
            </div>
            <div className="windspeed">
                <img className="windspeed-icon" src={windspeedicon} />
                <h3 className="windspeed-value">{props.values.wind && props.values.wind.speed}m/s</h3>
            </div>
            <div className="pressure">
                <img className="pressure-icon" src={pressureicon} />
                <h3 className="pressure-value">{props.values.main && props.values.main.pressure}hPa</h3>
            </div>
        </div>
    )
}
