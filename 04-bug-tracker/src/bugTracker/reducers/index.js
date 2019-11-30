function bugsReducer(currentState = [], action){
    if (action.type === 'ADD_NEW_BUG'){
        let newState = [...currentState, action.payload];
        return newState;
    }
    if (action.type === 'TOGGLE_BUG'){
        let newState = currentState.map(bug => bug.id === action.payload.id ? action.payload : bug);
        return newState;
    }
    if (action.type === "REMOVE_BUGS"){
        let bugsToRemove = action.payload;
        let newState = currentState.filter(bug => !bugsToRemove.find(bugToRemove => bugToRemove.id === bug.id));
        return newState;
    }
    if (action.type === 'LOAD_BUGS'){
        return action.payload;
    }
    return currentState;
}

export default bugsReducer;
