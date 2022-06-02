import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardFooter from '../../components/DashboardFooter'
import NavMenu from '../../components/NavMenu'
import TopBar from '../../components/TopBar'
const SharedLayout = () => {
  return (
    <>
      <TopBar />
      <NavMenu />
      <div>
        <Outlet />
      </div>
      <DashboardFooter />
    </>
  )
}

export default SharedLayout
