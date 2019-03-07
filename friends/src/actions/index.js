import axios from '../authentication/axiosAuth';

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";


export const login = credentials => dispatch => {
    dispatch({ type: LOGIN });
    return axios()
        .post('http://localhost:5000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.payload
            })
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err.response.message })
        })
}

export const fetchData = () => (dispatch) => {
        dispatch({ type: FETCHING });
        axios()
            .get(`http://localhost:5000/api/friends/`)
            .then(res => {
                dispatch({
                    type: SUCCESS,
                    payload: res.data
                });
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: "You have no friends" });
            });
}

export const addFriend = friend => (dispatch) => {
    dispatch({ type: ADD_FRIEND });
    axios()
        .post(`http://localhost:5000/api/friends/`, friend)
        .then(res => {
            dispatch({
                type: ADD_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({ type: ADD_FAILURE, payload: "They didn't want to be your friend. Sorry"});
        });
}