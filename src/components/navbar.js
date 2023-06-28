import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../index.css';
import img from '../images/weathericon.png'
export default function Nav()
{
    return(
    <nav className='navbar'>
        <ul className='list'> 
        <img className='icon' src={img} />
    <h2 className='heading'>WeatherApp</h2>
    </ul>
    </nav>
    )
}