import { LOGIN_SUCCESS, SUCCESS, ADD_SUCCESS, FAILURE, ADD_FAILURE } from "../actions";

const initialState = {
    friends: [],
    fetching: false,
    error: null,
    isLoggedIn: false,
    token: ''
};

export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: '',
                isLoggedIn: true,
                token: action.payload,
                friends: []
            }
        case SUCCESS:
            return {
                ...state,
                friends: action.payload
            }
        case ADD_SUCCESS:
            return {
                ...state,
                friends: action.payload
            }
        case FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case ADD_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};