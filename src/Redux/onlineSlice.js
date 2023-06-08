import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { json, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
//start
//success
//error

export const EstablishConnection = createAsyncThunk(
  "online/sockets",
  async (_, thunkAPI) => {
    const { getState } = thunkAPI;

    const newSocket = new WebSocket("ws://localhost:5154/ws");
    var DataCon = "";
    newSocket.addEventListener("open", () => {
      console.log("Connected to server");
    });


    
    newSocket.addEventListener('message', (event) => {
      console.log("ssss")
      console.log(event.data)
      console.log("ssss")
      const data = event.data;
      
      const reader = new FileReader();
      const lol = reader.addEventListener('loadend', async () => {
        const text = reader.result; // contains the text or binary data
        DataCon = text.toString();
        // setRdata(text.toString())
        window.btoa(unescape(encodeURIComponent( text )))
        console.log();
        
      });
      // console.log(Rdata);
      reader.readAsText(data); // read the contents of the Blob as text


      // const data = event.data;

        const url = URL.createObjectURL(data);

        setRdata(url)
        // console.log(Rdata)
    });

    
    newSocket.addEventListener('close', () => {
      console.log('Disconnected from server');
    });

    setSocket(newSocket);

  
      newSocket.close();
    
return DataCon;
  }
);

export const OnlineSlice = createSlice({
  name: "online",
  initialState: {
    name: "",
    Keyboard: {
      key: "",
      keyCode: "",
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
    TakeRoverControl: (state, action) => {
      state.Keyboard.name = action.payload.name;
      state.Keyboard.keyCode = action.payload.key;
      console.log(state.Keyboard);
    },
  },
    extraReducers:{
      [EstablishConnection.pending]: (state) => {
        state.loading = true;
      },
      [EstablishConnection.Sfulfilled]: (state, action) => {
        state.loading = false;
        const response = action.payload
        console.log(response)
        // state.PostsData=response
      },
      [EstablishConnection.rejected]: (state) => {
        state.loading = false;
        state.error = true;
      },

    }
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
} = OnlineSlice.actions;

export default OnlineSlice.reducer;
