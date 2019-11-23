init_state = {
    global: 'init'
}

export default reducer = (state = init_state, action) => {
    switch (action.type){
        case 'EDIT_GLOBAL': 
            return {
                ...state,
                global: action.payload
            }
        default:
            return state
    }
}