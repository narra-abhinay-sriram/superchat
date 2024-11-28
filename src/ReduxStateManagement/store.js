import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authslice"
import TokenExpirationMiddleware from "./tokenExpirationMiddleware";
import userReducer from "./user"

const store=configureStore({
    reducer:{
        auth:authReducer,
        user:userReducer
        },
        middleware:(getDefaultMiddleware)=>
            getDefaultMiddleware().concat(TokenExpirationMiddleware)
})

export default store