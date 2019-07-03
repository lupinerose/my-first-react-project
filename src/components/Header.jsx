import React from 'react'
import './Ticket.css'
import { Link } from 'react-router-dom'

function Header(){
  return (
      <div>
        <h1 className="test">Help Queue</h1>
        <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      </div>

  )
}

export default Header