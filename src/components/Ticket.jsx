import React from 'react'
import PropTypes from 'prop-types'
import './Ticket.css'
// import Moment from 'moment'

function Ticket(props){
  var styles = {
    // backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }

  var styles2 = {
    color: 'orange'
  }
  
  const ticketInformation = 
    <div style={styles}>
      <style jsx>{`
        div {
            background-color: pink;
        }
        `}</style>
      <h3 style={styles2}>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime} ago</h4>
      <hr/>
    </div>
    
  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {props.onTicketSelection(props.ticketId)}}>
        {ticketInformation}
      </div>
    )
  } else {
    return(
      <div>
        {ticketInformation}
      </div>
    )
  }
}

// function displayTimeOpen(timeOpen) {
//   return timeOpen.from(new Moment(), true)
// }

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired
}

export default Ticket