import { createSlice } from "@reduxjs/toolkit";
import {findTuitsThunk,deleteTuitThunk,createTuitThunk,updateTuitThunk}
  from "../../services/tuits-thunks";
const currentUser = {
    // eslint-disable-next-line 
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
    "dislikes":0,
    "disliked":false,
    "image": "/images/nasa.png",
    "cover":"/images/rb.jpeg",
   }
   const initialState = {
    posts: [],
    loading: false
 }
 
const homeSlice = createSlice({
 name: 'posts',
 initialState,
 extraReducers: {
   [findTuitsThunk.pending]:
      (state) => {
         state.loading = true
         state.posts = []
   },
   [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.posts = payload
   },
   [findTuitsThunk.rejected]:
      (state) => {
         state.loading = false
   },
   [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.posts = state.posts
        .filter(t => t._id !== payload)
    },
    [createTuitThunk.fulfilled]:
    (state, { payload }) => {
      state.loading = false
      state.posts.push(payload)
  },
  [updateTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    const tuitNdx = state.posts
      .findIndex((t) => t._id === payload._id)
    state.posts[tuitNdx] = {
      ...state.posts[tuitNdx],
      ...payload
    }
  }




 },

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