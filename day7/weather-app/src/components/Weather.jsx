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
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                        <p>설명: {weather.weather[0].description}</p>
                    </div>
                ) : !error ?
                    <p>검색어를 입력하세요</p>
                    : <p style={{ color: 'red' }} >올바른 지역명이 아닙니다.</p>
            }
        </>

    )
}

export default Weather