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

export const fetchData = token => dispatch => {
        dispatch({ type: FETCHING });
        axios
            .get(`http://localhost:5000/api/friends/`, { headers: { authorization: token }
        })
            .then(res => {
                console.log("FRIENDS", res.data);
                dispatch({
                    type: SUCCESS,
                    payload: res.data
                });
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: "You have no friends" });
            });
}