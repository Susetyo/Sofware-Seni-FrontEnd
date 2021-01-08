import {
    DATA_LOADED_LIST_USERS,
    FETCH_LIST_USERS_PENDING,
    FETCH_LIST_USERS_SUCCESS,
    FETCH_LIST_USERS_FAIL,
    DATA_USERS_BY_FILTER,
} from "../actionTypes";

const initialState = {
    listQuestionsData: [],
    pending: false,
    error: null,
    listFilter: [],
    detailList: {},
    usersData: [],
};

export default (
    state = initialState,
    action: { payload: any; type: String; error: any }
) => {
    if (action.type === DATA_USERS_BY_FILTER) {
        return {
            ...state,
            listFilter: action.payload,
        };
    }

    if (action.type === DATA_LOADED_LIST_USERS) {
        return {
            ...state,
            detailList: action.payload,
        };
    }

    if (action.type === FETCH_LIST_USERS_PENDING) {
        return {
            ...state,
            pending: true,
        };
    }

    if (action.type === FETCH_LIST_USERS_SUCCESS) {
        return {
            ...state,
            pending: false,
            userData: [...state.usersData, ...action.payload],
        };
    }

    if (action.type === FETCH_LIST_USERS_FAIL) {
        return {
            ...state,
            pending: false,
            error: action.error,
        };
    }

    return state;
};
