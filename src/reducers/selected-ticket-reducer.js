export default (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_TICKET':
        return action.ticketId;
    }
    return state;
}