import { LOGIN_SUCCESS } from "../actions";

// import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
    friends: [],
    fetching: false,
    error: null,
    isLoggedIn: false
};

export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: '',
                isLoggedIn: true
            }
        default:
            return state;
    }
};