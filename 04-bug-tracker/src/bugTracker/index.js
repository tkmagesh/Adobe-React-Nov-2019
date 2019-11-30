import React, { Component } from 'react';
import './index.css';

class BugItem extends Component{
    onBugNameClick = () => {
        this.props.toggle(this.props.bug);
    }
    render(){
        const { bug } = this.props,
            bugNameEle = bug.isClosed ? 
                ( <span className="bugname closed" onClick={this.onBugNameClick}>
                    {bug.name}
                </span>
                ) : ( <span className="bugname" onClick={this.onBugNameClick}>
                    {bug.name}
                </span>
                );
        return(
            <li >
               {bugNameEle}
                <div className="datetime">[{bug.createdAt.toString()}]</div>
                <div>{bug.isClosed.toString()}</div>
            </li>
        )
    }
}
class BugTracker extends Component{
    state = {
        newBugName : ''
    };
    render(){
        const { bugs, addNew, toggle, removeClosed } = this.props,
            { newBugName } = this.state,
            bugItems = bugs.map((bug, index) => (
                <BugItem bug={bug} key={index} toggle={toggle}/>
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
                    <input type="button" value="Remove Closed" onClick={ () => removeClosed(bugs) } />
                </section>
            </div>
        )
    }
}

export default BugTracker;