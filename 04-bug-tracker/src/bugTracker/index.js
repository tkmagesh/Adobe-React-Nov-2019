import React, { Component } from 'react';
import './index.css';

class BugTracker extends Component{
    state = {
        newBugName : ''
    };
    render(){
        const { bugs, addNew } = this.props,
            { newBugName } = this.state,
            bugItems = bugs.map((bug, index) => (
                <li key={index}>
                    <span className="bugname">{bug.name}</span>
                    <div className="datetime">[{bug.createdAt.toString()}]</div>
                </li>
            ));
        return(
            <div>
                <h1>Bug Tracker</h1>
                <hr />
                <section className="stats">
                    <span className="closed">1</span>
                    <span> / </span>
                    <span>2</span>
                </section>
                <section className="sort">
                    <label htmlFor="">Order By :</label>
                    <select name="" id="">
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <label htmlFor="">Descending ? :</label>
                    <input type="checkbox" name="" id="" />
                </section>
                <section className="edit">
                    <label htmlFor="">Bug Name : </label>
                    <input type="text" onChange={ evt => this.setState({newBugName : evt.target.value})} />
                    <input type="button" value="Add New" onClick={ () => addNew(newBugName) }/>
                </section>
                <section className="list">
                    <ol>
                        {bugItems}
                    </ol>
                    <input type="button" value="Remove Closed" />
                </section>
            </div>
        )
    }
}

export default BugTracker;