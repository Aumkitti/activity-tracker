import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import activitiesReducer from "./reducers/activitiesducers";

const store = configureStore(
    {
        reducer: activitiesReducer,
    }, 
    composeWithDevTools
);

export default store;