import { remove } from '../services/bugApi';

export function removeClosed(){
    return function(dispatch, getState){
        const existingBugs = getState().bugsState;
        const closedBugs = existingBugs.filter(bug => bug.isClosed);
        closedBugs
            .forEach(closedBug => {
                remove(closedBug)
                    .then(() => {
                        const action = { type: 'REMOVE_ONE_BUG', payload: closedBug };
                        dispatch(action);
                    })
            })
    }
}