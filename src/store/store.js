import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import ThunkMiddleware from 'redux-thunk'
import searchReducer from "./reducers/searchReducer";

const rootReducer = combineReducers({
    search: searchReducer,
})

export const store = createStore(rootReducer, compose(
    applyMiddleware(ThunkMiddleware)
))