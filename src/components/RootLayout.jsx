import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBarMenu from './navBarMenu'
import { Provider } from 'react-redux'
import store from '../store/store'

function RootLayout() {
  return (
    <>
      <Provider store={store}>
        <NavBarMenu />
        <Outlet />


      </Provider>
    
    </>
  )
}

export default RootLayout