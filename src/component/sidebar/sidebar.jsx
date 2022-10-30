import React from 'react'
import { DashSquare } from 'react-bootstrap-icons'
import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">Admin Panel</span>
      </div><hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            {/* <DashSquare className="icon" /> */}
            <span> Dashboard</span>
          </li>
          <p className="title">List</p>
          <li>
            <span>LISTS</span>
          </li>
          <p className="title">Useful link</p>
          <li>
            <span>Dashboard</span>
          </li>
          <p className="title">Service</p>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <spna>bottom</spna>
      </div>
    </div>
  )
}

export default Sidebar