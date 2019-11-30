import bugsReducer from '../bugTracker/reducers';

import { createStore } from 'redux';

const appStore = createStore(bugsReducer);

window['appStore'] = appStore;
export default appStore;
