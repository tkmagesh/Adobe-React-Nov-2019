import React, { Component } from 'react';
import './index.css';
import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';


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

export default BugTracker;