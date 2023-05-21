import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/sidebar/sidebar';
import Profile from './Dashboard/container/profile/profile';
import EditProfile from './Dashboard/container/editprofile/editprofile';
import Plans from './Dashboard/container/plans/plans';
import Register from './Forms/SignUp/signup';
import Login from './Forms/Login/Login';
import Sidebar from './Dashboard/sidebar/sidebar';
import InsideRoute from './Dashboard/insideRoute';
import Intro from './Dashboard/container/intro/intro';
import CreatePlan from './Dashboard/container/CreatePLan/createplan';
import PlayBack from './Dashboard/container/playBack/PlayBack';
import OnlineResults from './Dashboard/container/OnlineResults/OnlineResults';
import Header from './Dashboard/container/header/header';
import Container from './Dashboard/container/container';
import Sign from './Home/sign/sign';
import Landing from './Home/LandPage/Landing';
import Services from './Home/LandPage/services';
import Articles from './Home/LandPage/articles';
import About from './Home/LandPage/about';


function RoutePage() {
return (
	
	   <Routes>
	   	{/* <Route path='/' element={<Register/>}/> */}
		   <Route path='/' element={<Landing/>}/>
    		<Route path='/about' element={<About/>}/>
	      <Route path="/services" element={<Services/>} />
        <Route path="/articles" element={<Articles/>} />
		<Route path='/sign' element={<Sign/>}/>
	    <Route path="/system/*" element={<Sidebar/>} />
		<Route path="/OnlineResults" element={<OnlineResults/>} />
	
     	</Routes>
	
);
}

export default RoutePage;