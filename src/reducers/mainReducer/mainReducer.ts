import { combineReducers } from "redux";
import { gainersReducer } from "../gainersReducer/gainersReducer";

export const rootReducer = combineReducers({
    gainers: gainersReducer
})