import  React from 'react';
import '../../css/sign.css';
import { useDispatch, useSelector } from 'react-redux';
import { PushLoginData } from '../../Redux/UserSlice';

const SignIn = () => {
  const { error } = useSelector(state => state.user)

  const dispatch = useDispatch()
  const handleSubmit = async(event) => {
    event.preventDefault(); 
    dispatch(PushLoginData({email:event.target.email.value,password:event.target.password.value}))  
    event.target.email.value = ""
    event.target.password.value = ""

  }
  
  <input type="text" name="username"/>
    return(
          <div className="login-form">
          <div className="title">Login</div>
          <form action="#" onSubmit={handleSubmit}>
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" name='email' placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" name='password' placeholder="Enter your password" required/>
              </div>
              <div className="text"><a href="#">Forgot password?</a></div>
              <div className="text" style={{color:"red"}}>{error}</div>
              <div className="button input-box">
                <input type="submit" value="Sumbit" />
              </div>
              <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
            </div>
        </form>
      </div>
 
   
        )
  
}

export default SignIn;