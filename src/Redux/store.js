
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import BlogSlice from "./BlogSlice";
import PlanSlice from "./PlanSlice";
import PlayBackSlice from "./PlayBackSlice";


import UserSlice from "./UserSlice";



const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//  const store = createStore(reducers,enhancer(applyMiddleware(reduxThunk)))

const store = configureStore({
    reducer:{
        user : UserSlice,
        plan : PlanSlice,
        playBack : PlayBackSlice,
        blog : BlogSlice
    },
    
})
export default store;
