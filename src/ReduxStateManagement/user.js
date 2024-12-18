import { createSlice } from "@reduxjs/toolkit";

const userslice=createSlice({
    name:"user",
    initialState:{
        darkmode:localStorage.getItem("darkmode"),
        sidebarReduced:true,
        voiceMode:false,
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
        },
        changeVoiceMode:(state,action)=>{
            state.voiceMode=action.payload
        }
        
        
    }
})

export const{changetodarkmode,changesidebarwidth,uploadsubscription,uploaduserEmail,changeVoiceMode}=userslice.actions

export default userslice.reducer