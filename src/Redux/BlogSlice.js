import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { json, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
//start
//success
//error

export const GetPosts = createAsyncThunk(
  "apiPosts/posts",
  async (_, thunkAPI) => {
    const { getState } = thunkAPI;

    const PageData = getState().blog.page;

    const resss = await axios
      .get(`https://localhost:7152/api/Blog/All-blogs?page=${PageData}`)
      .then(function (response) {
        const res = response.data;
        // console.log(res);
        return res;
      })
      .catch(function (error) {
        // console.log(error);
        return error;
      });
    return resss;
  }
);

export const SendPost = createAsyncThunk(
  "apiPosts/SendPost",
  async (dataa, thunkAPI) => {
    const { getState } = thunkAPI;
    const CreatePostData = getState().blog.PostCreationData;
    const userId = getState().user.allUserData.id;
    ///////time manager
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var time = today.toLocaleTimeString("it-IT");
    var dateTime = date + "T" + time;
    // console.log(dateTime)

    const bodyFormData = new FormData();
    bodyFormData.append("postTitle", CreatePostData.postTitle);
    bodyFormData.append("postContent", CreatePostData.postContent);
    bodyFormData.append("postDate", dateTime);
    bodyFormData.append("formFile", dataa.imagee);
    bodyFormData.append("UserId", userId);
    console.log("check");

    for (const value of bodyFormData.values()) {
      console.log(value);
    }

    const res = await axios
      .post("https://localhost:7152/api/Blog/Images", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        const res = response;
        console.log(res);
        console.log("success");
      })
      .catch(function (error) {
        console.log(error);
      });
    // // const res = 1
    return res;
  }
);

export const feedbackHandle = createAsyncThunk(
  "apiPosts/feedbackHandle",
  async (_, thunkAPI) => {
    const { getState } = thunkAPI;
    const CreatePostData = getState().blog.feedBackData;
    const userId = getState().user.allUserData.id;

    ///////time manager
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var time = today.toLocaleTimeString("it-IT");
    var dateTime = date + "T" + time;
    // console.log(time)

    const dataf = {
      comment: CreatePostData.comment,
      feedbacktime: dateTime,
      userId: userId,
      postId: CreatePostData.postId,
    };

    const res = await axios
      .post("https://localhost:7152/api/Blog/Feedback", dataf, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        const res = response;
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
    // const res = 1
    return res;
  }
);

export const DeletePost = createAsyncThunk(
  "apiPosts/DeletePost",
  async (dataa, thunkAPI) => {
    const { getState } = thunkAPI;
    // const PostId = getState().blog.deletePostId;
    const resss = await axios
      .get(`https://localhost:7152/api/Blog/Delete Post?postId=${dataa.id}`)
      .then(function (response) {
        const res = response.data;
        // console.log(res);
        return res;
      })
      .catch(function (error) {
        // console.log(error);
        return error;
      });
      console.log(resss)
    return resss;
  }
);

export const BlogSlice = createSlice({
  name: "apiPosts",
  initialState: {
    name: "",

    PostCreationData: {
      postTitle: "post",
      postContent: "",
      postDate: "",
      postImages: "",
      userId: "",
    },

    feedBackData: {
      comment: "",
      feedbacktime: "",
      userId: "",
      postId: 0,
    },
    fileAccess: null,
    PostsData: [],
    loading: false,
    error: false,
    accepted: false,
    deletePostId: 0,
    page: 1,
  },
  reducers: {
    TakeFile: (state, action) => {
      state.fileAccess = action.payload.fileAccess;
      const filename = state.fileAccess;
      state.PostCreationData.postImages = `@${filename.name};type=${filename.type}`;
      console.log(state.PostCreationData.postImages);
    },
    TakePostContent: (state, action) => {
      state.PostCreationData.postContent = action.payload.postContent;
      console.log(state.PostCreationData.postContent);
    },

    TakePage: (state, action) => {
      state.page = action.payload.page;
    },

    TakeFeedBackContent: (state, action) => {
      state.feedBackData.comment = action.payload.comment;
      state.feedBackData.postId = action.payload.postId;
    },
    TakeDelete: (state, action) => {
      state.deletePostId = action.payload.deletePostId;
    },
  },
  extraReducers: {
    [GetPosts.pending]: (state) => {
      state.loading = true;
    },
    [GetPosts.fulfilled]: (state, action) => {
      state.loading = false;
      const response = action.payload;
      console.log(response);
      state.PostsData = response;
    },
    [GetPosts.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    [SendPost.pending]: (state) => {
      state.loading = true;
    },
    [SendPost.fulfilled]: (state, action) => {
      state.loading = false;
      const response = action.payload;
      console.log(response);
      state.PostCreationData.postContent = "";
      state.PostCreationData.postImages = "";
    },
    [SendPost.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [feedbackHandle.pending]: (state) => {
      state.loading = true;
    },
    [feedbackHandle.fulfilled]: (state, action) => {
      state.loading = false;
      const response = action.payload;
      console.log(response);
      // state.PostCreationData.postContent=""
      // state.PostCreationData.postImages=""
    },
    [feedbackHandle.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [DeletePost.pending]: (state) => {
      state.loading = true;
    },
    [DeletePost.fulfilled]: (state, action) => {
      state.loading = false;
      const response = action.payload;
      console.log(response);
    },
    [DeletePost.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// Action cREators are generated for each case reducer function
export const {
  TakePage,
  TakeDelete,
  TakeFeedBackContent,
  TakeFile,
  TakePostContent,
  GetBlogs,
  PostBlogImages,
} = BlogSlice.actions;

export default BlogSlice.reducer;
