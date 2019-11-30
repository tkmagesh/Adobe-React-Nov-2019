import { save}  from '../services/bugApi';

export function toggle(bugToToggle){
    return function(dispatch){
        let toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
        save(toggledBugData)
            .then(toggledBug => {
                let action = { type: 'TOGGLE_BUG', payload: toggledBug };
                dispatch(action)
            });
        }
}