import logo from './logo.svg';
import Sidebar from './Dashboard/sidebar/sidebar';
import Profile from './Dashboard/container/profile/profile';
// import RoutePage from './Dashboard/RoutePage';
import Login from './Forms/Login/Login';
import Register from './Forms/SignUp/signup';
import RoutePage from './RoutePage';
import {  Routes, Route } from 'react-router-dom';
import Landing from './Home/LandPage/Landing';
import About from './Home/LandPage/about';
import Services from './Home/LandPage/services';
import Articles from './Home/LandPage/articles';
import "bootstrap-icons/font/bootstrap-icons.css";
import Sign from './Home/sign/sign';

function App() {
  return (
    <>
   {/* <Routes>
	    	<Route path='/' element={<Landing/>}/>
    		<Route path='/about' element={<About/>}/>
	      <Route path="/services" element={<Services/>} />
        <Route path="/articles" element={<Articles/>} />
     	</Routes> */}
	<RoutePage/>
   </>
  );
}

export default App;
