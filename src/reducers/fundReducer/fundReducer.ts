import { baseStateMixin } from "../baseStateMixin";
import {
    REQUEST_FUND_DETAIL,
    REQUEST_FUND_DETAIL_ERROR,
    REQUEST_FUND_DETAIL_SUCCESS,
} from "../../actions/FundsActions";


const defaultState = {
    ...baseStateMixin,
    fund: null,
    isLoading: true
}

export function fundDetailReducer(state: any = defaultState, action: any) {
    switch (action.type) {
        case REQUEST_FUND_DETAIL:
            return {
                ...state,
                ...baseStateMixin,
                isLoading: true
            }
        case REQUEST_FUND_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loaded: true,
                fund: action.payload
            }
        case REQUEST_FUND_DETAIL_ERROR:
            return {
                ...state,
                ...baseStateMixin,
                error: action.payload,
                fund: null
            }
        default:
            return state;
    }
}