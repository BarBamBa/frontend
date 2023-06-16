import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function Calendar(props) {
    console.log(props);

    // 날짜 조회하기
    let d = new Date();
    let tyear = d.getFullYear();
    let tmonth = d.getMonth();
    let tdate = d.getDate();
    console.log(tyear, tmonth, tdate);

    let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    // 날짜 말일 구하기 공식
    let lastDate = new Date(props.year, props.month + 1, 0).getDate();

    // 달력에서 시작 할 위치(요일기준)
    let startDate = new Date(props.year, props.month, 1).getDay();

   



    return (
        <div className="calendar">
            <header>
                <h2>{props.year}</h2>
                <span>{props.month + 1}월</span>
            </header>
            <main>
                <ul className="date">
                    {
                        day.map((item, i) => {
                            return (
                                <li 
                                    className={`day${i} day`}
                                    style={{ color: i == 0 ? 'red' : i == 6 ? 'blue' : null }} >{day[i]}</li>
                            )
                        })}
                    {
                        Array(startDate).fill().map((_, i) => {
                            return (
                                <li key={i}></li>
                            );
                        })
                    }
                    {
                        Array(lastDate).fill().map((_, i) => {
                            let holiday = new Date(props.year, props.month, i+1).getDay();
                            console.log(i);
                            return (
                                <li
                                    className={holiday === 0 ||
                                                holiday === 6 ? `holiday${holiday}`:
                                                props.year == tyear && props.month + 1 == tmonth + 1 && i + 1 == tdate ? 'today' : ''}
                                    
                                    key={i} >{i + 1}
                                </li>
                            )
                        })
                    }
                </ul>
            </main>
        </div>
    )
}
export default Calendar