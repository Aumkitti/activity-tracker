import { combineReducers } from "redux";
import activitiesReducer from "./activitiesducers";

const rootReducer = combineReducers({
    activities: activitiesReducer,
});

export default rootReducer;