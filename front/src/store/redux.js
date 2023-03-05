import { configureStore, createSlice } from '@reduxjs/toolkit';

const mergeUserInfo = (userInfo, payload) => {
    const { _id,name, email, picture } = payload;
    return {
     ...userInfo,
     _id,
     name,
     email,
     picture
    
    };
};

const userSlice = createSlice({
    name: "users",
    initialState : {
       modalOpen: false,
       userInfo : {
        _id: '',
        name: '',
        email: '',
        picture: ''
       }
    
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
        getUser: (state,action) => {
           
            state.userInfo = mergeUserInfo(state.userInfo,action.payload)
            return state;

            

        }


        
    }

});

export const { setContactOpen,setMessageOpen,getUser } = userSlice.actions;

export const store = configureStore({
    
    reducer : {
        users : userSlice.reducer,

    }
})