import React from "react";
import PropTypes from "prop-types";
import './Ticket.css';

function Ticket(props){
    var styles = {
        backgroundColor: '#ecf0f1',
        fontFamily: 'sans-serif',
        paddingTop: '50px'
    }

    var styles2 = {
        color: 'orange'
    }
    
    return(
        <div style={styles}>
            <h3 style={styles2}>{props.location} - {props.names}</h3>
            <p className="test"><em>{props.issue}</em></p>
            <hr/>
        </div>
    );
}

Ticket.propTypes = {
    names: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    issue: PropTypes.string
};

export default Ticket;