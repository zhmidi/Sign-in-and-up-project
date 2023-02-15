import {configureStore} from "@reduxjs/toolkit"
import TaskReducer from "./Reducer"
import ConnectU from "./Reducer"

const Store = configureStore({
    reducer : {
        Tasks : TaskReducer,
        iduser : ConnectU
    }
})

export default Store