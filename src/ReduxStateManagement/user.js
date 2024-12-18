import { createSlice } from "@reduxjs/toolkit";

const userslice=createSlice({
    name:"user",
    initialState:{
        darkmode:localStorage.getItem("darkmode"),
        sidebarReduced:true,
        userEmail:null,
        userSubscription:null
    },
    reducers:{
        changetodarkmode:(state,action)=>{
            state.darkmode=action.payload
        },
        changesidebarwidth:(state)=>{
            state.sidebarReduced=!state.sidebarReduced
        },
        uploaduserEmail:(state,action)=>{
            state.userEmail=action.payload
        },
        uploadsubscription:(state,action)=>{
            state.userSubscription=action.payload
        }
        
        
    }
})

export const{changetodarkmode,changesidebarwidth,uploadsubscription,uploaduserEmail}=userslice.actions

export default userslice.reducer