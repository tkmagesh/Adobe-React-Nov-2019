import React, { Component } from 'react';

class BugItem extends Component {
    onBugNameClick = () => {
        this.props.toggle(this.props.bug);
    }
    render() {
        const { bug } = this.props,
            bugNameEle = bug.isClosed ?
                (<span className="bugname closed" onClick={this.onBugNameClick}>
                    {bug.name}
                </span>
                ) : (<span className="bugname" onClick={this.onBugNameClick}>
                    {bug.name}
                </span>
                );
        return (
            <li >
                {bugNameEle}
                <div className="datetime">[{bug.createdAt.toString()}]</div>
                <div>{bug.isClosed.toString()}</div>
            </li>
        )
    }
}

export default BugItem;