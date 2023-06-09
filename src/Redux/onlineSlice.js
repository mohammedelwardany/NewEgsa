import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { json, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";



const socket = new WebSocket('wss://localhost:7152/api/FrontSockets/Data');
let sensorId = 0;
let x = 0;
let y = 0;
let z = 0;
//start
//success
//error

// export const EstablishConnection = createAsyncThunk(
//   "online/sockets",
//   async (_, thunkAPI) => {
//     const { getState } = thunkAPI;



//   }
// );
export const SendControl = createAsyncThunk(
  "online/sockets",
  async (_, thunkAPI) => {
    const { getState } = thunkAPI;

    // const socket = new WebSocket('wss://localhost:7152/api/FrontSockets/Data');

    // socket.onopen = () => {
    //   console.log('WebSocket connection established.');
    // };

    // socket.onmessage = (event) => {
    //   return(event.data)
    //   console.log('WebSocket message received:', event.data);
    // };

    // socket.onclose = (event) => {
    //   return(event)
    //   console.log('WebSocket connection closed.', event);
    // };

    // socket.onerror = (event) => {
    //   return(event)
    //   console.error('WebSocket error:', event);
    // };
return(1)
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
    sensorsData:{
      Temperature:0,
      Humidity:0,
      Acceleration:{
        x:0,
        y:0,
        z:0
      },
      Gyroscope:{
        xy:0,
        yz:0,
        xz:0
      },
      MPUTemp:0,
      Ultrasonic:0


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
      // state.Keyboard.name = action.payload.name;
      state.Keyboard.keyCode = action.payload.key;
      console.log(action.payload.key);
      socket.send(action.payload.key);
      // setTimeout('', 5000);

      // console.log("hey")
    },
    EstablishConnection: (state) =>{

      // var 
      socket.onopen = () => {
        // const SuccessKey=1;
        // return(SuccessKey)
        console.log('WebSocket connection established.');
      };

  
      socket.onclose = (event) => {
        // const SuccessKey=0;
        // return(event,SuccessKey)
        console.log('WebSocket connection closed.', event);
      };
  
      socket.onerror = (event) => {
        // const SuccessKey=0;
        // return(event,SuccessKey)
        console.error('WebSocket error:', event);
      };
    },

    TakeRoverMessage: (state) => {
// i = i+1;
// console.log(i)
// sensorId =3
      socket.onmessage = (event) => {
        // const SuccessKey=1;
        // return(event.data,SuccessKey)
        console.log('WebSocket message received:', event.data);
const str = event.data
        const nums = str.split(",").map(numStr => parseInt(numStr));
        sensorId = nums[0]; // 37
        x = nums[1]; // 2560
        y = nums[2]; // 1792
        z = nums[3]; // 1
console.log(typeof sensorId)
// state.sensorsData.Humidity = sensorId.toString();

// // console.log(`x=${x},y=${y},z=${z}`)





// // 0 -> Temperature
// // 1 -> Humidity
// // 2 -> Acceleration
// // 3 -> Gyroscope
// // 4 -> MPUTemp
// // 5 -> Ultrasonic


      };

      // state.sensorsData.Humidity = sensorId
      switch (sensorId) {
        case 0:
          state.sensorsData.Temperature=x;
          break;
        case 1:
          state.sensorsData.Humidity=x;
          break;
        case 2:
          state.sensorsData.Acceleration.x=x;
          state.sensorsData.Acceleration.y=y;
          state.sensorsData.Acceleration.z=z;
          break;
      
        case 3:
          state.sensorsData.Gyroscope.xy=x;
          state.sensorsData.Gyroscope.yz=y;
          state.sensorsData.Gyroscope.xz=z;
          break;
        case 4:
          state.sensorsData.MPUTemp=x
          break;
        case 5:
          state.sensorsData.Ultrasonic=x
          break;
      
        default:
          state.sensorsData.Temperature=x;
          break;
      
      
      
      
      }

      // console.log(state.sensorsData.Humidity)

    },

  



  },
    // extraReducers:{
    //   [EstablishConnection.pending]: (state) => {
    //     state.loading = true;
    //   },
    //   [EstablishConnection.Sfulfilled]: (state, action) => {
    //     state.loading = false;
    //     const response = action.payload
    //     console.log("hey")
    //     console.log(response)
    //     // state.PostsData=response
    //   },
    //   [EstablishConnection.rejected]: (state) => {
    //     state.loading = false;
    //     state.error = true;
    //   },

    // }
});

// Action cREators are generated for each case reducer function
export const {
  TakePage,
  EstablishConnection,
  TakeRoverControl,
  TakeRoverMessage,
  TakePostContent,
  GetBlogs,
  PostBlogImages,
} = OnlineSlice.actions;

export default OnlineSlice.reducer;
