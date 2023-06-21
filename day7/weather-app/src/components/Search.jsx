import React from 'react'

function Search(props) {
    console.log(props);
    const {
        handleWeatherSearch,
        location,
        handleLocationChange
    } = props;

    return (
            <div className="input-group">
                <input
                    type="search"
                    value={location}
                    placeholder='위치를 입력'
                    required
                    onChange={handleLocationChange}
                />
                <button
                    className='btn'
                    type='submit'
                    onClick={handleWeatherSearch}
                >검색</button>
            </div>
    )
}

export default Search