//import axios from 'axios';

/* export function load(){
    return function(dispatch){
        axios.get('http://localhost:3030/bugs')
            .then(response => response.data)
            .then(function(bugs){
                const action = { type: 'LOAD_BUGS', payload: bugs };
                dispatch(action);
            });
    }
} */

import { getAll } from '../services/bugApi';
export function load(){
    return getAll()
        .then(bugs => {
            const action = { type: 'LOAD_BUGS', payload: bugs };
            return action;
        });
}