import React from 'react'
import './Ticket.css'
import { Link } from 'react-router-dom'
import liger from '../assets/liger.gif'

function Header(){
  return (
      <div>
        <h1 className="test">Help Queue</h1>
        <img src={liger}/>
        <br/>
        <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      </div>

  )
}

export default Header

