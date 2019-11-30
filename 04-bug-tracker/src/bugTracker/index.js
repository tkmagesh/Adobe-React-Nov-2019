import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './index.css';
import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';
import * as bugActionCreators from './actions';

class BugTracker extends Component{
    render(){
        const { bugs, addNew, toggle, removeClosed } = this.props;
        return(
            <div>
                <h1>Bug Tracker</h1>
                <hr />
                <BugStats bugs={bugs} />
                <BugSort/>
                <BugEdit addNew={addNew} />
                <BugList bugs={bugs} toggle={toggle} removeClosed={removeClosed} />
            </div>
        )
    }
}

//extracting state for the component
function mapStateToProps(storeState){
    let bugsState = storeState.bugsState;
    return { bugs : bugsState };
}

//creating action dispatchers for the component
function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BugTracker);