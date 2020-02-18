import { FETCH_SPORTS_LIST, FETCH_SPORTS_LIST_SUCCESS } from '../constants';

const initialState = {
    sports: [],
    isLoading: true
};

const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SPORTS_LIST:
            return {
            ...state,
            isLoading: true
            };
        case FETCH_SPORTS_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sports: action.payload.sports
                };
        default:
            return state;
    }
}

export default countReducer;