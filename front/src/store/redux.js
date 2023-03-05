import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "users",
    initialState : {
       modalOpen: false
    
    },

    reducers: {
      
        setContactOpen : (state,action) => {
            //{ type : "SET_MODAL_OPEN", payload : "boolea"}
            state.modalOpen = action.payload

            return state;
        },
        setMessageOpen : (state,action) => {
            //{ type : "GET_USER_ID", payload : "userId"}
            state.modalOpen = action.payload
            return state;
        },


        
    }

});

export const { setContactOpen,setMessageOpen } = userSlice.actions;

export const store = configureStore({
    
    reducer : {
        users : userSlice.reducer,

    }
})