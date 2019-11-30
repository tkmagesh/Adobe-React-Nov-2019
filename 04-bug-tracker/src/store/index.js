import bugsReducer from '../bugTracker/reducers';
import spinnerReducer from '../spinner/reducers';

import { createStore, combineReducers, applyMiddleware } from 'redux';

const logMiddleware = function({getState, dispatch}){
    return function(next){
        return function(action){
            console.group(action.type)
                console.log('before ', getState())
                next(action);
                console.log('after ', getState());
            console.groupEnd();
        }
    }
}

const asyncMiddleware = ({getState, dispatch}) => (next) => (action) => {
    if (typeof action === 'function'){
        action(dispatch);
    } else {
        next(action);
    }
}

const promiseMiddleware = ({getState, dispatch}) => next => action => {
    if (action instanceof Promise){
        action.then(actualAction => next(actualAction));
    } else {
        next(action);
    }
}

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    spinnerState : spinnerReducer
});

const appStore = createStore(rootReducer, applyMiddleware(logMiddleware, asyncMiddleware, promiseMiddleware));

window['appStore'] = appStore;
export default appStore;
