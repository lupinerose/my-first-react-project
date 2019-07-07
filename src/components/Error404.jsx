import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import mrOwl from '../assets/owl.gif'

function Error404(props){
  return (
    <div>
      <h2>The page {props.location.pathname} you are looking for does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
      <img src={mrOwl}/>
    </div>
  )
}

Error404.propTypes = {
  location: PropTypes.object
}

export default Error404