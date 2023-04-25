import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'
import { json, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
//start
//success
//error

export const GetPlannData = createAsyncThunk("api/data", async (_, thunkAPI) => {
  const resss = await axios.get('https://localhost:7152/api/Plan/GetAllSubsystem_Commands')
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


export const GetFixedPlannData = createAsyncThunk("api/fixedPlan", async (_, thunkAPI) => {
  const resss = await axios.get('https://localhost:7152/api/Plan/GetFixedPlans?num=15')
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



export const GetPlanById = createAsyncThunk("api/GetPlanById", async (_, thunkAPI) => {
  const { getState } = thunkAPI;
  const PlanId = getState().plan.planId
  const res = await axios.get(`https://localhost:7152/api/Plan/Return plan?id=${PlanId}`)
    .then(function (response) {
      return response.data

    })
    .catch(function (error) {
      console.log(error);

    });
  return res;



})


export const GetPlanByName = createAsyncThunk("api/GetPlanByName", async (_, thunkAPI) => {
  const { getState } = thunkAPI;
  const PlanName = getState().plan.planName
  const res = await axios.get(`https://localhost:7152/api/Plan/GetPlanByName?name=${PlanName}`)
    .then(function (response) {
      return response.data.plan;
      // console.log(res);
    })
    .catch(function (error) {
      console.log(error);

    });

  return res;



})





export const PlanSlice = createSlice({
  name: 'api',
  initialState: {
    planName: "",
    planNameSetted: false,
    planId: 0,
    executeLater: false,
    dateDesplay: "none",
    TimeNow: "",
    planDateTime: "now",
    PlanCommendData: {
      sequenceNumber: 0,
      delay: "0",
      repeat: "0",
      acknowledgeId: 0,
      subSystemId: 0,
      subSystemName: "",
      commandID: 0,
      CommendDescription: "",
      divces: 0,
      inputParamter: 0,
      dateTime: "",
      flagWatting: true
    },
    subsystemCommendsdata: [
      {
        id: 0,
        subSystemName: "",
        commands: [
          {
            id: 0,
            description: ""
          }
        ]
      }],
    FixedPlandata: [
      {
        name: "",
        id: 0
      },],
    FixedPlanRdata: [
      {
        name: "",
        sequenceNumber: 0,
        delay: "",
        repeat: "",
        acknowledgeId: 0,
        subSystemId: 0,
        commandId: 0,
        divces: 0,
        inputParamter: 0,
        dateTime: "",
        flagWatting: false,
        applicationUser: null
      },],
    allPlanData: [],
    accepted: false,
    loading: false,
    error: false

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

    GetPlanData: (state) => {

      console.log(GetPlannData())

    },
    TakePlanName: (state, action) => {

      state.planName = action.payload.planName
      console.log("name")
      console.log(state.planName)
    },
    TakePlanId: (state, action) => {

      state.planId = action.payload.planId
      console.log(state.planId)

    },
    TakeArrange: (state, action) => {

      // state.planName = action.payload.planName
      // console.log("name")
      // console.log(state.planName)
    },
    TakeRepeat: (state, action) => {

      state.PlanCommendData.repeat = action.payload.repeat;
      console.log("repeat")
      console.log(state.PlanCommendData.repeat)

    },
    TakeDelay: (state, action) => {

      state.PlanCommendData.delay = action.payload.delay;
      console.log("delay")
      console.log(state.PlanCommendData.delay)
    },
    TakeSubsystemItem: (state, action) => {

      state.PlanCommendData.subSystemId = action.payload.subSystemId;
      state.PlanCommendData.subSystemName = action.payload.subSystemName;

    },
    TakeCommendItem: (state, action) => {

      state.PlanCommendData.commandID = action.payload.commandID;
      state.PlanCommendData.CommendDescription = action.payload.CommendDescription;

    },
    TakeExecuteLaterEnable: (state) => {
      if (state.executeLater == false) {
        state.executeLater = true
        state.dateDesplay = "block"
        console.log(state.executeLater)
      }
      else {
        state.executeLater = false
        state.dateDesplay = "none"
        state.planDateTime = "now"
        state.PlanCommendData.dateTime = "now"
        console.log(state.executeLater)
      }
    },
    TakeTimeLater: (state, action) => {

      state.planDateTime = action.payload.planDateTime
      state.PlanCommendData.dateTime = action.payload.planDateTime
      console.log(state.planDateTime)

    },
    nowDate: (state) => {
      var today = new Date();
      var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date + 'T' + time;
      console.log(dateTime)
      state.TimeNow = dateTime
    },
    pushToArray: (state) => {
      const a = state.PlanCommendData
      console.log(current(a))
      state.allPlanData.push(a)
      console.log(current(state.allPlanData))
      a.sequenceNumber = a.sequenceNumber + 1
    },
    pushPlanPayload: (state) => {
      const allData = state.allPlanData
      console.log(current(allData))

    },

    GetPlanTypeData: (state) => {

      axios.get('https://localhost:7152/api/Plan/GetTypeofeachCommand')
        .then(function (response) {
          const res = response.data
          console.log(res);
          state.subsystemCommendsdata = 3
        })
        .catch(function (error) {
          console.log(error);

        });

    },

    // GetPlanById: (state) => {
    //   const res = axios.get(`https://localhost:7152/api/Plan/Return plan?id=${state.planId}`)
    //     .then(function (response) {
    //       return response.data

    //     })
    //     .catch(function (error) {
    //       console.log(error);

    //     });
    //     console.log(res);

    // },

    // GetPlanByName: (state) => {

    //   axios.get(`https://localhost:7152/api/Plan/GetPlanByName?name=${state.planName}`)
    //     .then(function (response) {
    //       const res = response.data
    //       console.log(res);
    //       state.planNameSetted = true;
    //     })
    //     .catch(function (error) {
    //       console.log(error);

    //     });

    // },

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
  extraReducers: {
    [GetPlannData.pending]: (state) => {
      state.loading = true;
    },
    [GetPlannData.fulfilled]: (state, action) => {
      state.loading = false;
      state.subsystemCommendsdata = action.payload
      // console.log(state.subsystemCommendsdata)
      // state.subsystemCommendsdata=GetPlannData()
    },
    [GetPlannData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    /////////////////////////////fixed
    [GetFixedPlannData.pending]: (state) => {
      state.loading = true;
    },
    [GetFixedPlannData.fulfilled]: (state, action) => {
      state.loading = false;
      state.FixedPlandata = action.payload
      console.log(state.FixedPlandata)
      // console.log(state.FixedPlandata)
      // state.subsystemCommendsdata=GetPlannData()
    },
    [GetFixedPlannData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    /////////////////////////////fixed
    [GetPlanById.pending]: (state) => {
      state.loading = true;
    },
    [GetPlanById.fulfilled]: (state, action) => {
      state.loading = false;
      state.planName = action.payload[0].name
      state.FixedPlanRdata = action.payload

      // console.log()
      // state.FixedPlandata = 
      // console.log(state.FixedPlandata)
      // console.log(state.FixedPlandata)
      // state.subsystemCommendsdata=GetPlannData()
    },
    [GetPlanById.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },


    
    [GetPlanByName.pending]: (state) => {
      state.loading = true;
    },
    [GetPlanByName.fulfilled]: (state, action) => {
      state.loading = false;
      // state.planName = action.payload[0].name
      state.FixedPlanRdata = action.payload

      // console.log()
      // state.FixedPlandata = 
      console.log(state.FixedPlanRdata)
      // console.log(state.FixedPlandata)
      // state.subsystemCommendsdata=GetPlannData()
    },
    [GetPlanByName.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

  }

}

)
// GetPlanById
// Action cREators are generated for each case reducer function
export const { pushPlanPayload, pushToArray, TakeExecuteLaterEnable, TakeTimeLater, TakeRepeat, TakeDelay, TakePlanName, TakePlanId, TakeArrange, TakeSubsystemItem, TakeCommendItem, nowDate, GetPlanData, GetPlanTypeData } = PlanSlice.actions

export default PlanSlice.reducer