import { createSlice } from "@reduxjs/toolkit";
import posts from './tuits.json';
const currentUser = {
    "username": "NASA",
    "handle": "@nasa",
    "image": "/images/nasa.png",
    "cover":"/images/rb.jpeg",

   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   
const homeSlice = createSlice({
 name: 'posts',
 initialState: posts,
 reducers: {
    deleteTuit(state, action) {
        const index = state
           .findIndex(tuit =>
              tuit._id === action.payload);
        state.splice(index, 1);
      },
   
    createTuit(state, action) {
      
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })

    }
  }
 
});
export const {createTuit,deleteTuit} = homeSlice.actions;
export default homeSlice.reducer;