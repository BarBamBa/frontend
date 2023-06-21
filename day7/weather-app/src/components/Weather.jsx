import React from 'react'

function Weather(props) {
    const { weather, error } = props;
    return (
        <>
            {
                weather ? (
                    <div>
                        <h2>{weather.name}</h2>
                        <p>현재온도: {(weather.main.temp - 273.15).toFixed(1)}°C</p>
                        <p>설명: {weather.weather[0].description}</p>
                    </div>
                ) : error == '올바른 지역명이 아닙니다' ?
                    <p style={{ color: 'red' }} >{error}</p>
                    : <p>{error}</p>
            }
        </>

    )
}

export default Weather