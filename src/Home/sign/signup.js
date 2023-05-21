import  React from 'react';
import '../../css/sign.css';
import { useDispatch, useSelector } from 'react-redux';
import { PushRigesterData } from '../../Redux/UserSlice';

const SignUp = () => {
  const dispatch = useDispatch()
  const { errorRegist } = useSelector(state => state.user)

  const handleSubmit = async(event) => {
    event.preventDefault(); 
    dispatch(PushRigesterData({firstName:event.target.firstName.value,lastName:event.target.lastName.value,username:event.target.UserName.value,email:event.target.Email.value,password:event.target.password.value}))  
    event.target.firstName.value = ""
    event.target.lastName.value = ""
    event.target.Email.value = ""
    event.target.UserName.value = ""   
    event.target.password.value = ""
  }
    return(
    
  
        <div className="signup-form">
          <div className="title">Signup</div>
        <form action="#" onSubmit={handleSubmit}>
            <div className="input-boxes">
              <div style={{display:"flex"}}>
              <div className="input-box" style={{marginRight:"0.3rem"}}>  
                <i className="fas fa-user"></i>
                <input type="text" name='firstName' placeholder="first name" required/>
              </div>
              
              <div className="input-box" style={{marginLeft:"0.3rem"}}>  
              <i className="fas fa-user"></i>
                <input type="text" name='lastName' placeholder="last name" required/>
              </div>
                </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="email" name='Email' placeholder="Enter your email" required/>
              </div>
              <div className="input-box">  
              <i class="fas fa-user-lock"></i>
                <input type="text" name='UserName' placeholder="user name" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" name='password' placeholder="Enter your password" required/>
              </div>
              <div className="text" style={{color:"red"}}>{errorRegist}</div>
              <div className="button input-box">
                <input type="submit" value="Sumbit"/>
              </div>
              <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
            </div>
      </form>
    </div>
  
   
        )
  
}

export default SignUp;