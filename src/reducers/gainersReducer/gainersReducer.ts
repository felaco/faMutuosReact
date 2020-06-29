import { baseStateMixin } from '../baseStateMixin';
import { REQUEST_GAINERS, REQUEST_GAINERS_ERROR, REQUEST_GAINERS_SUCCESS } from "../../actions/FundsActions";


const defaultState = {
    ...baseStateMixin,
    gainers: [],
    filters: {
        initDate: null,
        endDate: null,
        administrator: null,
        fundType: null
    }
}

export function gainersReducer(state: any = defaultState, action: any) {
    switch (action.type) {
        case REQUEST_GAINERS:
            return {
                ...state,
                ...baseStateMixin,
                isLoading: true
            }
        case REQUEST_GAINERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loaded: true,
                gainers: action.payload
            }
        case REQUEST_GAINERS_ERROR:
            return {
                ...state,
                ...baseStateMixin,
                error: action.payload,
                gainers: []
            }
        default:
            return state;
    }
}