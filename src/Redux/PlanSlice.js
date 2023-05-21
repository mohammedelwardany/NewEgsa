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

  const flag = 1;
  const applicationUserid = "8fff3cf5-3c5b-44b6-aa97-1a6c96de66f1"
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




export const SendPlan = createAsyncThunk("api/SendPlan", async (_, thunkAPI) => {
  const { getState } = thunkAPI;
  const planArray = getState().plan.allPlanData
  const planTime = getState().plan.Time
  const userId = getState().user.allUserData.id

  const dataf = []
  
  planArray.map(((data, i) => {
    const datas = {
      "name": data.name,
      "sequenceNumber": data.sequenceNumber,
      "delay": data.delay,
      "repeat": data.repeat,
      "acknowledgeId": data.acknowledgeId,
      "subSystemId": data.subSystemId,
      "commandID": data.commandId,
      "divces": data.divces,
      "inputParamter": data.inputParamter,
      "dateTime": planTime,
      "flagWatting": data.flagWatting,
      "applicationUserid": userId
    }

    dataf.push(datas);
  }))

  console.log(dataf)

  const res = await axios.post('https://localhost:7152/api/Plan/saveallplan?flag=1',dataf,{
    headers: {
      'Content-Type': 'application/json'
    }})
  .then(function (response) {
    const res = response
    console.log(res);
    const AcceptedPlan = true;
    return {res,AcceptedPlan};
  })
  .catch(function (error) {
    console.log(error);
    const AcceptedPlan = false;
    return {error,AcceptedPlan};

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
    Time: "",
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
        subSystemName: "",
        commandId: 0,
        CommendDescription: "",
        divces: 0,
        inputParamter: 0,
        dateTime: "",
        flagWatting: false,
        applicationUser: null
      },],
    allPlanData: [],
    accepted: false,
    loading: false,
    error: false,
    arrange: 0,
    arrangeFlag: "replace"
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

      state.arrange = action.payload.arrange - 1
      // console.log("name")
      // console.log(state.planName)
    },
    FormDataForPlan: (state, action) => {

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
      const dateTime = action.payload.planDateTime
     
      state.Time = dateTime
      console.log(state.Time)

    },
    nowDate: (state) => {
      // var today = new Date();
      // var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      // var dateTime = date + 'T' + time;
      // console.log(dateTime)
     

        ///////time manager
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var time = today.toLocaleTimeString('it-IT')
  var dateTime = date + 'T' + time;
  console.log(dateTime)
   state.Time = dateTime
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
    replace2elements: (state) => {
      state.allPlanData = []


    },

    replacement: (state, action) => {

      if (state.arrangeFlag == 'replace') {

        // // const array=[...current(state.allPlanData)]
        let temp = state.allPlanData[action.payload.fromIndex];
        state.allPlanData[action.payload.fromIndex] = state.allPlanData[state.arrange];
        state.allPlanData[state.arrange] = temp;



      }
      if (state.arrangeFlag == 'take') {
        state.allPlanData.splice(state.arrange, 0, state.allPlanData[action.payload.fromIndex])
        state.allPlanData.splice(action.payload.fromIndex + 1, 1)



      }
      const array = state.allPlanData
      array.map(((data, i) => {
        state.allPlanData[i].sequenceNumber = i + 1
      }))

    },

    replacmentFlag: (state, action) => {


      state.arrangeFlag = action.payload.replacmentFlag
      console.log(state.arrangeFlag)

    },


    deleteFrom: (state, action) => {



      state.allPlanData.splice(action.payload.fromIndex, 1)


      const array = state.allPlanData
      array.map(((data, i) => {
        state.allPlanData[i].sequenceNumber = i + 1
      }))


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


      const restalk = state.FixedPlanRdata
      const lol = current(state.subsystemCommendsdata)

      console.log(lol)
      restalk.map(((data, i) => {

        console.log(lol[0].commands[0].description)

        const FormatDataChunk = {
          name: data.name,
          sequenceNumber: data.sequenceNumber,
          delay: data.delay,
          repeat: data.repeat,
          acknowledgeId: data.acknowledgeId,
          subSystemId: data.subSystemId,
          subSystemName: lol[data.subSystemId].subSystemName,
          commandId: data.commandId,
          CommendDescription: lol[data.subSystemId].commands[data.commandId].description,
          divces: data.divces,
          inputParamter: data.inputParamter,
          dateTime: data.dateTime,
          flagWatting: data.flagWatting,
          applicationUser: data.applicationUserid
        }

        state.allPlanData.push(FormatDataChunk)
        console.log(current(state.allPlanData))



      }))
      // console.log()
      // state.FixedPlandata = 
      // console.log(state.FixedPlanRdata)

      // console.log(state.FixedPlandata)
      // state.subsystemCommendsdata=GetPlannData()
    },
    [GetPlanByName.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [SendPlan.pending]: (state) => {
      state.loading = true;
    },
    [SendPlan.fulfilled]: (state, action) => {
      state.loading = false;
      // state.planName = action.payload[0].name
      // state.FixedPlanRdata = action.payload
        console.log(action.payload.res)
        if (action.payload.AcceptedPlan == true){
          window.location.replace('http://localhost:3000/OnlineResults');         
        }
      // console.log()
      // state.FixedPlandata = 
      // console.log(state.FixedPlandata)
      // console.log(state.FixedPlandata)
      // state.subsystemCommendsdata=GetPlannData()
    },
    [SendPlan.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

  }
  // SendPlan

  
}

)
// GetPlanById
// Action cREators are generated for each case reducer function
export const { replacmentFlag, replacement, replace2elements, TakePlace, deleteFrom, pushPlanPayload, pushToArray, TakeExecuteLaterEnable, TakeTimeLater, TakeRepeat, TakeDelay, TakePlanName, TakePlanId, TakeArrange, TakeSubsystemItem, TakeCommendItem, nowDate, GetPlanData, GetPlanTypeData } = PlanSlice.actions

export default PlanSlice.reducer