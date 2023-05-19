import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'
import { json, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
//start
//success
//error



// export const GetPosts = createAsyncThunk("apiPosts/posts", async (_, thunkAPI) => {
//   const { getState } = thunkAPI;

//   const PageData = getState().blog.page

//   const resss = await axios.get(`https://localhost:7152/api/Blog/All-blogs?page=${PageData}`)
//     .then(function (response) {
//       const res = response.data
//       // console.log(res);
//       return res;
//     })
//     .catch(function (error) {
//       // console.log(error);
//       return error;
//     });
//   return resss;
// })





export const OnlineSlice = createSlice({
  name: 'online',
  initialState: {

    name: "",
    Keyboard : {
        key:"",
        keyCode:"",
    },
    fileAccess:null,
    PostsData: [],
    loading:false,
    error:false,
    accepted: false,
    deletePostId:0,
    page:1
  },
  reducers: {

    TakeRoverControl: (state,action) => {
        state.Keyboard.name = action.payload.name;
        state.Keyboard.keyCode = action.payload.key;
        console.log(state.Keyboard)
}


  }
//   extraReducers:{
//     [GetPosts.pending]: (state) => {
//       state.loading = true;
//     },
//     [GetPosts.fulfilled]: (state, action) => {
//       state.loading = false;
//       const response = action.payload
//       console.log(response)
//       state.PostsData=response
//     },
//     [GetPosts.rejected]: (state) => {
//       state.loading = false;
//       state.error = true;
//     },

//   }

}
)

// Action cREators are generated for each case reducer function
export const {TakePage,TakeDelete,TakeFeedBackContent,TakeFile,TakePostContent, GetBlogs, PostBlogImages } = OnlineSlice.actions

export default OnlineSlice.reducer