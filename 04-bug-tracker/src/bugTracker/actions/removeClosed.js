export function removeClosed(existingBugs){
    const closedBugs = existingBugs.filter(bug => bug.isClosed),
        action = { type : 'REMOVE_BUGS', payload : closedBugs};
    return action;
}