import logo from './logo.svg';
import Sidebar from './Dashboard/sidebar/sidebar';
import Profile from './Dashboard/container/profile/profile';
// import RoutePage from './Dashboard/RoutePage';
import Login from './Forms/Login/Login';
import Register from './Forms/SignUp/signup';
import RoutePage from './RoutePage';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div>
    {/* <Sidebar/>   */}
    <RoutePage/>
 {/* <Register/> */}
   </div>
  );
}

export default App;
