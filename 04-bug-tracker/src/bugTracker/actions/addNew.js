export function addNew(newBugName){
    const newBug = { name : newBugName, isClosed : false, createdAt : new Date()};
    const action = { type : 'ADD_NEW_BUG', payload : newBug};
    return action;
}