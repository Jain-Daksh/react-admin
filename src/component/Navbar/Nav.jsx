import React from 'react'
import { Search } from 'react-bootstrap-icons'
import './nav.css'

function Nav() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <Search />
        </div>
        <div className="items">
          <div className="item">
          <Search />
          </div>
          <div className="item">
          <Search />
          </div>
          <div className="item">
          <Search />
          </div>
          <div className="item">
          <Search />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav