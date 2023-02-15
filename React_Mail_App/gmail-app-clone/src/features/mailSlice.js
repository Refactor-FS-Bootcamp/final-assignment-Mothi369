import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen: false,
    selectedMessage: null
  },
  
  reducers: {
    openSendMsg: (state) => {
     
      state.sendMessageIsOpen= true;
    },
    closeSendMsg: (state) => {
      state.sendMessageIsOpen= false;
    },
    openMsg: (state,action) => {
      state.selectedMessage= action.payload;
    },
    
   
  },
  
 
});

export const { openSendMsg, closeSendMsg,openMsg } = mailSlice.actions;


export const selectsendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectsMail = (state) => state.mail.selectedMessage;

export default mailSlice.reducer;
