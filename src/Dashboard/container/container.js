import  React, { useEffect } from 'react';
import '../../css/framework.css';
import '../../css/master.css';
import Header from './header/header';
import Intro from './intro/intro';
import Profile from './profile/profile';
import EditProfile from './editprofile/editprofile';
import Plans from './plans/plans';
import Tools from './charts/tools';
import Welcome from './welcome/welcome';
import CreatePlan from './CreatePLan/createplan';
import PlayBack from './playBack/PlayBack';
import OnlineResults from './OnlineResults/OnlineResults';
import InsideRoute from '../insideRoute'
import { useDispatch } from 'react-redux';
import { GetUserData } from '../../Redux/UserSlice';
const Container = () => {
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetUserData())
  }, [dispatch])
  
    return(
        <div className="content w-full">
           <Header/>
           <InsideRoute/>
 
        </div>
        )
  
}

export default Container;