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
       
       selectedPerson:null,
       chat:{
        from: null,
        to: null,
        message: ''
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
            
            //state.userInfo = mergeUserInfo(state.userInfo,action.payload)
            console.log('action in getUser',action.payload)
            state.chat.from = action.payload
            
            return state;

        },
        getSelectedPerson: (state,action) => {
            state.chat.to = action.payload
            state.selectedPerson = action.payload
            //console.log("selec person",state.selectedPerson)
            console.log('action in selP (to)',action.payload)
            return state;
        },
        getMessage: (state,action) => {
            
            state.chat.message = action.payload

            return state;
        }


        
    }

});

export const { setContactOpen,setMessageOpen,getUser,getSelectedPerson,getMessage} = userSlice.actions;

export const store = configureStore({
    
    reducer : {
        users : userSlice.reducer,

    }
})