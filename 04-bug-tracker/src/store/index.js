import bugsReducer from '../bugTracker/reducers';
import spinnerReducer from '../spinner/reducers';

import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    spinnerState : spinnerReducer
});

const appStore = createStore(rootReducer);

window['appStore'] = appStore;
export default appStore;
