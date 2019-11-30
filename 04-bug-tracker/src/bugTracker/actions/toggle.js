export function toggle(bugToToggle){
    let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
    let action = { type : 'TOGGLE_BUG', payload : toggledBug };
    return action;
}