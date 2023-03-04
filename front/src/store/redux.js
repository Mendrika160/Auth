import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "users",
    initialState : {
       modalOpen: false
    
    },

    reducers: {
      
        setModalOpen : (state,action) => {
            //{ type : "SET_MODAL_OPEN", payload : "boolea"}
            state.modalOpen = action.payload

            return state;
        },
        setModalClose : (state,action) => {
            //{ type : "GET_USER_ID", payload : "userId"}
            state.modalOpen = action.payload
            return state;
        },


        
    }

});

export const { setModalOpen,setModalClose } = userSlice.actions;

export const store = configureStore({
    
    reducer : {
        users : userSlice.reducer,

    }
})