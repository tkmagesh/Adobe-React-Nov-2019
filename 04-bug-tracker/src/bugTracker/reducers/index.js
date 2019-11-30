function bugsReducer(currentState = [], action){
    if (action.type === 'ADD_NEW_BUG'){
        let newState = [...currentState, action.payload];
        return newState;
    }
    return currentState;
}

export default bugsReducer;
