import React, { useContext } from 'react'
import { Context } from '../context';
import Header from './Header';
import Main from './Main';

function Page() {
  const { darkmode, handleDarkmode } = useContext(Context);

  return (
    <div className={darkmode ? 'darkmode' : 'App'}>
      <Header />
      <Main />
    </div>
  )
}

export default Page