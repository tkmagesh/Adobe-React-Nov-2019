import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

export var spinnerActionCreators = {
    decrement(delta) {
        let action = { type: 'DECREMENT', payload: delta };
        return action;
    },
    increment(delta) {
        let action = { type: 'INCREMENT', payload: delta };
        return action;
    }
}

class Spinner extends Component {
    state = {
        delta: 0
    };
    render = () => {
        let { spinnerValue, increment, decrement } = this.props,
            { delta } = this.state;
        return (
            <div>
                <h1>Spinner</h1>
                <hr />
                <label htmlFor="">Delta :</label>
                <input type="number" onChange={evt => this.setState({ delta: evt.target.valueAsNumber })} />
                <br />
                <input type="button" value="Decrement" onClick={() => decrement(delta)} />
                <span> [ {spinnerValue} ] </span>
                <input type="button" value="Increment" onClick={() => increment(delta)} />
            </div>
        );
    }
}

function mapStateToProps(storeState){
    const spinnerState = storeState.spinnerState;
    return { spinnerValue : spinnerState };
}

function mapDispatchToProps(dispatch){
    const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
    return spinnerActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Spinner);