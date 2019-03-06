import axios from 'axios';

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";


export const login = credentials => dispatch => {
    dispatch({ type: LOGIN });
    axios
        .post('http://localhost:5000/api/login', credentials)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.payload
            })
        })
}

export const fetchData = dispatch => {
    return dispatch => {
        dispatch({ type: FETCHING });
        axios
            .get('htpp://localhost:5000/api/friends/eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ')
            .then(res => {
                dispatch({
                    type: SUCCESS,
                    payload: res.friends
                });
            })
            .catch(err => {
                dispatch({ type: Error, payload: "These are not the droids you're looking for" });
            });
    };
}