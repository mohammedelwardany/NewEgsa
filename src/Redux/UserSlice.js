import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'


import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
//start
//success
//error

export const GetUserData = createAsyncThunk("userapi/data", async (_, thunkAPI) => {
  const resss = await axios.get('https://localhost:7152/api/User/GetUserById?id=8fff3cf5-3c5b-44b6-aa97-1a6c96de66f1')
    .then(function (response) {
      const res = response.data
      // console.log(res);
      return res;
    })
    .catch(function (error) {
      // console.log(error);
      return error;
    });
  return resss;
})



export const UserSlice = createSlice({
  name: 'userapi',
  initialState:{
userData : {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    numberPhone: ""
  },

  allUserData:{
    firstName: "string",
    lastName: "string",
    plans: null,
    feedbacks: null,
    posts: null,
    id: "",
    userName: "",
    normalizedUserName: "",
    email: "",
    normalizedEmail: "",
    emailConfirmed: false,
    passwordHash: "",
    securityStamp: "",
    concurrencyStamp: "",
    phoneNumber: "",
    phoneNumberConfirmed: false,
    twoFactorEnabled: false,
    lockoutEnd: null,
    lockoutEnabled: false,
    accessFailedCount: 0
  },
token : "" ,
formData:[],
loading:false,
accepted:false,

  },
  reducers: {
    RegisterData: (state,action) => {
        state.userData.firstName = action.payload.firstName;
        state.userData.lastName = action.payload.lastName;
        state.userData.username = action.payload.username;
        state.userData.email = action.payload.email;
        state.userData.password = action.payload.password;
        state.userData.numberPhone = action.payload.numberPhone;
      console.log(state.userData.email)
      
    },
    LoginData: (state,action) => {

      state.userData.email = action.payload.email;
      state.userData.password = action.payload.password;
   
  },
  pushConsole: (state) => {
    console.log("hiii")
  }
,
    PushRigesterData : (state) =>{
      console.log("start");
      const dataForm = {
            "firstName": state.userData.firstName,
            "lastName": state.userData.lastName,
            "username": state.userData.username,
            "email": state.userData.email,
            "password": state.userData.password ,
            "numberPhone": state.userData.numberPhone
          }
          const dataf=JSON.stringify(dataForm)
          console.log(dataf);
          axios.post('https://localhost:7152/api/register/AuthRegsiter',dataf,{
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }})
      .then(function (response) {
        console.log("no err");
        const tokenGet = response.data.token
        console.log(tokenGet);
        window.location.replace('http://localhost:3000/system'); 
        state.accepted=true;

      })
      .catch(function (error) {
        console.log("err");
        console.log(error.response.data);
        //state.accepted=false
        
      });
      
    },
    PushLoginData : (state) =>{
      const dataForm = {
          "email": state.userData.email,
          "password": state.userData.password ,
        }
        const dataf=JSON.stringify(dataForm)
        console.log(dataf);
        axios.post('https://localhost:7152/api/register/login',dataf,{
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }})
    .then(function (response) {
      const tokenGet = response.data.token
      console.log(tokenGet);
      window.location.replace('http://localhost:3000/system'); 
      state.accepted=true
    })
    .catch(function (error) {
      console.log(error.response.data);
      //state.accepted=false
      
    });
    
  },
  reset : (state) =>{
        state.userData.firstName = "";
        state.userData.lastName = "";
        state.userData.username = "";
        state.userData.email = "";
        state.userData.password = "";
        state.userData.numberPhone = "";
  },
    SuccessGetData : (state,action) =>{
        state.loading = null;
        state.dataLoader = action.payload.responseData;
    },
    ErrorGetData : (state) =>{
        state.loading = null;
        state.error= true;
    }
  },
  extraReducers : {
    [GetUserData.pending]: (state) => {
      state.loading = true;
    },
    [GetUserData.fulfilled]: (state, action) => {
      state.loading = false;
      state.allUserData =  action.payload
        console.log(state.allUserData)

    },
    [GetUserData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  }
  
}
)

// Action cREators are generated for each case reducer function
export const {pushConsole,RegisterData,PushRigesterData,PushLoginData,SuccessGetData,ErrorGetData,LoginData,reset} = UserSlice.actions

export default UserSlice.reducer