import { SEARCHING } from "../actionTypes";

const initialState = {
    search: "",
};

export default (
    state = initialState,
    action: { payload: any; type: String }
) => {
    switch (action.type) {
        case SEARCHING: {
            return {
                ...state,
                search: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
