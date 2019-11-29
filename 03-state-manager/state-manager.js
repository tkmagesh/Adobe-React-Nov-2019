var SM = (function(){
    var _currentState = undefined,
        _reducer = undefined,
        _init_action = { type : '@@INIT/ACTION'},
        _callbacks = [];

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        _callbacks.push(callback);
    }

    function triggerChange(){
        _callbacks.forEach(callback => callback());
    }

    function dispatch(action){
        let newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        triggerChange();
    }

    function createStore(reducer){
        _reducer = reducer;
        //initialize the current state with a valid default state (other than undefined)
        _currentState = reducer(_currentState, _init_action)
        let store = { getState, subscribe, dispatch };
        return store;
    }

    function bindActionCreators(actionCreators, dispatch) {
        var actionDispatchers = {};
        for (let key in actionCreators) {
            actionDispatchers[key] = function () {
                let action = actionCreators[key].apply(undefined, arguments);
                dispatch(action);
            }
        }
        return actionDispatchers;
    }

    return { createStore, bindActionCreators };
})();