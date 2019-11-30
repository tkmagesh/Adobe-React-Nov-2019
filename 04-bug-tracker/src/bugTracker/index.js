import React, { Component } from 'react';
import './index.css';

class BugTracker extends Component{
    render(){
        return(
            <div>
                <h1>Bug Tracker</h1>
                <hr />
                <section class="stats">
                    <span class="closed">1</span>
                    <span> / </span>
                    <span>2</span>
                </section>
                <section class="sort">
                    <label htmlFor="">Order By :</label>
                    <select name="" id="">
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <label htmlFor="">Descending ? :</label>
                    <input type="checkbox" name="" id="" />
                </section>
                <section class="edit">
                    <label htmlFor="">Bug Name : </label>
                    <input type="text" name="" id="" />
                    <input type="button" value="Add New" />
                </section>
                <section class="list">
                    <ol>
                        <li>
                            <span class="bugname">[This is bug - 1]</span>
                            <div class="datetime">[Created At]</div>
                        </li>
                        <li>
                            <span class="bugname closed">[This is bug - 2]</span>
                            <div class="datetime">[Created At]</div>
                        </li>
                    </ol>
                    <input type="button" value="Remove Closed" />
                </section>
            </div>
        )
    }
}

export default BugTracker;