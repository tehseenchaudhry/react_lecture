import React, { useContext } from 'react'
import DashboardNavbar from './DashboardNavbar'
import DashboardSidebar from './SideBar'
import { Outlet } from 'react-router-dom'
import { ContextData } from "../Components/Context/Context"

const Dashboard = () => {

  const { countValue } = useContext(ContextData)
  return (
    <div>
      <h1>Counter {countValue}</h1>
      <DashboardNavbar />

      <div className='flex border-8'>

        <DashboardSidebar />

        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard