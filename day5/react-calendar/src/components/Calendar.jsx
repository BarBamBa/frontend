import React from 'react'

function Calendar() {
    // 날짜 조회하기
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();

    // 날짜 말일 구하기 공식
    let lastDate = new Date(year, month + 1, 0).getDate();

    // 달력에서 시작 할 위치(요일기준)
    let startDate = new Date(year, month, 1).getDay();


    return (
        <div className="calendar">
            <header>
                <h2>{year}</h2>
                <span>{month + 1}월</span>
            </header>
            <main>
                달력
            </main>
        </div>
    )
}

export default Calendar