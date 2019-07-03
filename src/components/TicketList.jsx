import React from 'react'
import Ticket from './Ticket'

var masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3a',
    issues: 'Firebase will not save record!',
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issues: 'Fox image not displaying on page, can only see duck?',
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issues: 'Donkey picture not displaying on hover in Zoology app. :(',
  }
]

function TicketList(){
  return(
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) => 
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  )
}

export default TicketList
