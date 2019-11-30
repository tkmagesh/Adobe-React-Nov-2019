function bugsReducer(currentState = [], action){
    if (action.type === 'ADD_NEW_BUG'){
        let newState = [...currentState, action.payload];
        return newState;
    }
    if (action.type === 'TOGGLE_BUG'){
        let newState = currentState.map(bug => bug.id === action.payload.id ? action.payload : bug);
        return newState;
    }
    return currentState;
}

export default bugsReducer;
