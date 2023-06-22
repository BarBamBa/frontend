import React from 'react'
import Header from './Header';
import Main from './Main';

function Page(props) {
  let { darkmode, handleDarkmode } = props;

  return (
    <div className={darkmode ? 'darkmode' : 'App'}>
      <Header
        darkmode={darkmode}
        handleDarkmode={handleDarkmode}
      />
      <Main darkmode={darkmode} />
    </div>
  )
}

export default Page