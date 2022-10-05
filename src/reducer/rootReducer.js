import { combineReducers } from "redux"
import countReducer from "./countReducer"
import taskReducer from "./taskReducer"

const rootReducer = combineReducers({
    countReducer: countReducer,
    taskReducer: taskReducer,
})

export default rootReducer