import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBarMenu from './navBarMenu'

function RootLayout() {
  return (
    <>
        <NavBarMenu />
        <Outlet />
    
    </>
  )
}

export default RootLayout