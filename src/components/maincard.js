import React, { useEffect, useState } from 'react';
import Values from './values';
import axios from 'axios';




export default function Maincard() {


    const [data, setData] = useState(0)
    const [cityName, setCityname] = useState("");


    const weatherdetails =
        (cityname) => {
            const apikey = "f56f24967aaf51182d1d4df628297c6d";
            const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey;
            axios.get(apiurl).then((res) => {
                console.log("response", res.data);

                setData(res.data)
            }).catch((err) => console.log(err))
        }
    const handleInput = (e) => {
        setCityname(e.target.value)
    }
    const handleSearch = () => {
        weatherdetails(cityName);
    }


    return (
        <div className="card1" >
            <div>
                <input class="search" type="search" placeholder="city name" onChange={handleInput} aria-label="Search" />
                <button class="btn btn btn-success " type="submit" onClick={handleSearch}>Search</button>
                {!data &&  <h1 className='caution' >enter valid city name</h1>}
            </div>
            <Values values={data} name={cityName} />

        </div>
    )
}