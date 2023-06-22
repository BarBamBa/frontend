import React from 'react'

function Home(props) {
  let { data, count } = props;
  console.log(props.data);

  return (
    <div className='data-container'>
      <h1>미세먼지 데이터</h1>
      <h2>{data.totalCount}</h2>
      <div>
        {
          data ?
            (data.items.map((item, i) => {
              return (
                <div className='items'>
                  <p>지역명 : {item.districtName}</p>
                  <p>권역명 : {item.moveName}</p>
                  <p>발령일 : {item.dataDate}</p>
                  <p>발령농도 : {item.issueVal} ug/m3</p>
                  <p>경보단계 : {item.issueGbn}</p>
                  <p>해제일시 : {item.clearDate} {item.clearTime}</p>

                </div>

              )
            }))
            : null
        }
      </div>
    </div>
  )
}

export default Home