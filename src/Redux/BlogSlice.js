import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'
import { json, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
//start
//success
//error





export const BlogSlice = createSlice({
  name: 'api',
  initialState:{

  name:"",

  PlanCommendData : {
    postTitle: "string",
    postContent: "string",
    postDate: "2023-03-28T11:29:12.156Z",
    postImages: "string",
    userId: "string"
  },
  formData:[],
  accepted:false,

  },
  reducers: {
    // RegisterData: (state,action) => {
    //     state.userData.firstName = action.payload.firstName;
    //     state.userData.lastName = action.payload.lastName;
    //     state.userData.username = action.payload.username;
    //     state.userData.email = action.payload.email;
    //     state.userData.password = action.payload.password;
    //     state.userData.numberPhone = action.payload.numberPhone;
     
    // },

    GetBlogs : (state) =>{

          axios.get('https://localhost:7152/api/Blog/allblogs?page=2&pageSize=12')
      .then(function (response) {
        const res = response.data
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
        
      });
      
    },

    

    PostBlogImages : (state) =>{
      const dataForm = {
        "postTitle": "string",
        "postContent": "string",
        "postDate": "2023-03-28T11:29:12.156Z",
        "postImages": "string",
        "userId": "string"
        }
        const dataf=JSON.stringify(dataForm)
        console.log(dataf);
        axios.post('https://localhost:7152/api/Blog/Images',dataf,{
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }})
    .then(function (response) {
      const res = response
      console.log(res);
      state.accepted=true
    })
    .catch(function (error) {
      console.log(error);
      //state.accepted=false
      
    });
    
  },

  },
  
}
)

// Action cREators are generated for each case reducer function
export const {GetBlogs,PostBlogImages} = BlogSlice.actions

export default BlogSlice.reducer