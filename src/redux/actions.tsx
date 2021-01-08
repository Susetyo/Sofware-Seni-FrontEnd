import {
    SEARCHING,
    DETAIL_USERS_QUESTION,
    FETCH_LIST_USERS_PENDING,
    FETCH_LIST_USERS_SUCCESS,
    FETCH_LIST_USERS_FAIL,
    DATA_USERS_BY_FILTER,
} from "./actionTypes";

export const onSearching = (text: String) => {
    return {
        type: SEARCHING,
        payload: text,
    };
};

export const getListByFilter = (users: any) => {
    return {
        type: DATA_USERS_BY_FILTER,
        payload: users,
    };
};

export const getDetailListQuestion = (question: any) => {
    return {
        type: DETAIL_USERS_QUESTION,
        payload: question,
    };
};

export const fetchUsersPending = () => {
    return { type: FETCH_LIST_USERS_PENDING };
};
export const fetchUsersSuccess = (questions: any) => {
    return { type: FETCH_LIST_USERS_SUCCESS, payload: questions };
};
export const fetchUsersFail = (error: any) => {
    return { type: FETCH_LIST_USERS_FAIL, error: error };
};
