import React from 'react';
import {  Routes, Route } from 'react-router-dom';


import Intro from './container/intro/intro';
import Profile from './container/profile/profile';
import CreatePlan from './container/CreatePLan/createplan';
import PlayBack from './container/playBack/PlayBack';
import OnlineResults from './container/OnlineResults/OnlineResults';
import Community from './container/community/community';


function InsideRoute() {
return (
	
	   <Routes>
	   	{/* <Route path='/' element={<Register/>}/> */}
		<Route path='/' element={<Intro/>}/>
		<Route path='/Profile' element={<Profile/>}/>
	    <Route path="/CreatePlan" element={<CreatePlan/>} />
        <Route path="/PlayBack" element={<PlayBack/>} />
        <Route path="/OnlineResults" element={<OnlineResults/>} />
		<Route path="/blog" element={<Community/>} />
     	</Routes>
	
);  
}

export default InsideRoute;