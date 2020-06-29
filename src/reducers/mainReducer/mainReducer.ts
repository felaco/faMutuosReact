import { combineReducers } from "redux";
import { gainersReducer } from "../gainersReducer/gainersReducer";
import { fundDetailReducer } from "../fundReducer/fundReducer";

export const rootReducer = combineReducers({
    gainers: gainersReducer,
    fundDetail: fundDetailReducer
})