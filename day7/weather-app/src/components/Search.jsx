import React from 'react'

function Search(props) {
    console.log(props);
    const {
        handleWeatherSearch,
        location,
        handleLocationChange
    } = props;

    const EnterKeyPress = (e) => {
        if (e.keyCode == 13) {
            handleWeatherSearch;
        }
    }


    return (
        <div className="input-group">
            <input
                type="text"
                value={location}
                placeholder='위치를 입력'
                required
                onChange={handleLocationChange}
                onKeyUp={EnterKeyPress}
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