import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'
import { json, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
//start
//success
//error





export const PlayBackSlice = createSlice({
  name: 'api',
  initialState:{
PlanCommendData : {
    sequenceNumber: 0,
    delay: "string",
    repeat: "string",
    acknowledgeId: 0,
    subSystemId: 0,
    commandID: 0,
    divces: 0,
    inputParamter: 0,
    dateTime: "2023-03-28T11:02:27.722Z",
    flagWatting: true
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

    GetPlayBack : (state) =>{
     

          axios.get('https://localhost:7152/api/playback/GetPlayBack?id=1')
      .then(function (response) {
        const res = response.data
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
        
      });
      
    },

    GetPlaybackByDate : (state) =>{

        axios.get('https://localhost:7152/api/playback/GetByDate?year=2022&month=01&day=01')
    .then(function (response) {
      const res = response.data
      console.log(res);
    })
    .catch(function (error) {
      console.log(error.response.data);
      
    });
    
  },


GetPlaybackByName : (state) =>{

    axios.get('https://localhost:7152/api/playback/GetPlanResultByName?name=nn')
.then(function (response) {
  const res = response.data
  console.log(res);
})
.catch(function (error) {
  console.log(error);
  
});

},

//     saveAllPlan : (state) =>{
//       const dataForm = {
//         "sequenceNumber": 0,
//         "delay": "string",
//         "repeat": "string",
//         "acknowledgeId": 0,
//         "subSystemId": 0,
//         "commandID": 0,
//         "divces": 0,
//         "inputParamter": 0,
//         "dateTime": "2023-03-28T11:02:27.722Z",
//         "flagWatting": true
//         }
//         const dataf=JSON.stringify(dataForm)
//         console.log(dataf);
//         axios.post('https://localhost:7152/api/register/login',dataf,{
//       headers: {
//         // Overwrite Axios's automatically set Content-Type
//         'Content-Type': 'application/json'
//       }})
//     .then(function (response) {
//       const tokenGet = response.data.token
//       console.log(tokenGet);
//       state.accepted=true
//     })
//     .catch(function (error) {
//       console.log(error.response.data);
//       //state.accepted=false
      
//     });
    
//   },

  },
  
}
)

// Action cREators are generated for each case reducer function
export const {GetPlayBack,GetPlaybackByDate,GetPlaybackByName} = PlayBackSlice.actions

export default PlayBackSlice.reducer