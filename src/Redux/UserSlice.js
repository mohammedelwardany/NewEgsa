import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { isExpired, decodeToken } from "react-jwt";

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Alert } from 'antd'
//start
//success
//error

export const GetUserData = createAsyncThunk("userapi/data", async (_, thunkAPI) => {
  const Token = localStorage.getItem("token");
  const myDecodedToken = decodeToken(Token);
  // console.log(myDecodedToken.uid)
  const resss = await axios.get(`https://localhost:7152/api/User/GetUserById?id=${myDecodedToken.uid}`)
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

export const PushLoginData = createAsyncThunk("userapi/PushLoginData", async (data, thunkAPI) => {
  // const navigate = useNavigate()

  const dataForm = {
    "email": data.email,
    "password": data.password,
  }
  const dataf = JSON.stringify(dataForm)
  // console.log(dataf);
  const resss = await axios.post('https://localhost:7152/api/register/login', dataf, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json'
    }
  })
    .then(function (response) {
      const tokenGet = response.data.token
      const acceptedd = true;
      return { tokenGet, acceptedd };

    })
    .catch(function (error) {
      const errorr = error.response.data
      const acceptedd = false;

      return { errorr, acceptedd };
      //state.accepted=false

    });
    if(resss.acceptedd === true){
      localStorage.setItem('token', resss.tokenGet)
      // navigate('/system')
    }
  return resss;
})

export const PushRigesterData = createAsyncThunk("userapi/PushRigesterData", async (data, thunkAPI) => {
  // console.log("start");
  // const navigate = useNavigate()
  const dataForm = {
    "firstName": data.firstName,
    "lastName": data.lastName,
    "username": data.username,
    "email": data.email,
    "password": data.password,
    "numberPhone": "0"
  }
  const dataf = JSON.stringify(dataForm)
  // console.log(dataf);
  const resss = await axios.post('https://localhost:7152/api/register/AuthRegsiter', dataf, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json'
    }
  })
    .then(function (response) {
      const tokenGet = response.data.token
      const acceptedd = true;
      return { tokenGet, acceptedd };

    })
    .catch(function (error) {
      const errorr = error.response.data
      const acceptedd = false;

      return { errorr, acceptedd };
      //state.accepted=false

    });
    if(resss.acceptedd === true){
      localStorage.setItem('token', resss.tokenGet)
      // navigate('/system')
    }
  return resss;
})

export const UserSlice = createSlice({
  name: 'userapi',
  initialState: {
    userData: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      numberPhone: ""
    },

    allUserData: {
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
    token: "",
    formData: [],
    loading: false,
    accepted: false,
    error: "",
    errorRegist: ""

  },
  reducers: {
    RegisterData: (state, action) => {
      state.userData.firstName = action.payload.firstName;
      state.userData.lastName = action.payload.lastName;
      state.userData.username = action.payload.username;
      state.userData.email = action.payload.email;
      state.userData.password = action.payload.password;
      state.userData.numberPhone = action.payload.numberPhone;
      console.log(state.userData.email)

    },
    LoginData: (state, action) => {

      state.userData.email = action.payload.email;
      state.userData.password = action.payload.password;

    },
    Logout: (state) => {
      localStorage.setItem('token', "")
      state.accepted=false
    }
    ,

    reset: (state) => {
      state.userData.firstName = "";
      state.userData.lastName = "";
      state.userData.username = "";
      state.userData.email = "";
      state.userData.password = "";
      state.userData.numberPhone = "";
    },
    SuccessGetData: (state, action) => {
      state.loading = null;
      state.dataLoader = action.payload.responseData;
    },
    ErrorGetData: (state) => {
      state.loading = null;
      state.error = true;
    }
  },
  extraReducers: {
    [GetUserData.pending]: (state) => {
      state.loading = true;
    },
    [GetUserData.fulfilled]: (state, action) => {
      state.loading = false;
      state.allUserData = action.payload
      console.log(state.allUserData)

    },
    [GetUserData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [PushLoginData.pending]: (state) => {
      state.loading = true;
    },
    [PushLoginData.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.tokenGet;
      state.accepted = action.payload.acceptedd
      state.error = action.payload.errorr;
      console.log(action.payload)

      if (state.accepted == true) {
        window.location.replace('http://localhost:3000/system');
      }
      // state.accepted=false
      // state.error = "";

    },
    [PushLoginData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [PushRigesterData.pending]: (state) => {
      state.loading = true;
    },
    [PushRigesterData.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload)
      state.token = action.payload.tokenGet;
      state.errorRegist = action.payload.errorr;

      state.accepted = action.payload.acceptedd
      if (state.accepted == true) {
        window.location.replace('http://localhost:3000/system');
      }
      // else {
      //   // alert(action.payload.errorr)
      // }
      // state.accepted=false
      // state.error = "";
    },
    [PushRigesterData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  }

}
)

// Action cREators are generated for each case reducer function
export const { Logout, RegisterData, SuccessGetData, ErrorGetData, LoginData, reset } = UserSlice.actions

export default UserSlice.reducer