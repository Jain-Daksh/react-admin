import React from 'react'
import { Person } from 'react-bootstrap-icons'
import './widget.css'

function Widget() {
  return (
    <div className='widget'>
      <div className="left">
        <div className="title">User</div>
        <div className="title">23123</div>
        <div className="title">See our link</div>
      </div>
      <div className="right">
        <div className="percentage">
          20%
        </div>
        <Person className='icon' />
      </div>
    </div>
  )
}

export default Widget