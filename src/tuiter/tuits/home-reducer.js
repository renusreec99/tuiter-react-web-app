import { createSlice } from "@reduxjs/toolkit";
import posts from './tuits.json';
const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
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
    //   console.log(state);
    }
  }
 
});
export const {createTuit,deleteTuit} = homeSlice.actions;
export default homeSlice.reducer;