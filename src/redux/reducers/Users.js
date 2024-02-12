import { FETCH_USERS } from "redux/actions/fetchData";

export const users = (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS: return [ action.payload, ...state ];
        default: return [...state];
    }


}