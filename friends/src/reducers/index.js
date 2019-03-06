// import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
    friends: [],
    fetching: false,
    error: null,
    isLoggedIn: false
};

export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};