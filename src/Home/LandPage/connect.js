import  React from 'react';
import '../../css/land.css';
import '../../css/normalize.css';

const Discount = () => {

    return(
<div className="discount" id="discount">
      <div className="image">
        <div className="content">
          <h2>Request A call Back</h2>
          <p>Don't hesitate to give us a call or send us a contact form message</p>
          <img src="imgs/connect.png" alt=""  />
        </div>
      </div>
      <div className="form">
        <div className="content">
          <h2>Connect with us </h2>
          <form action="">
            <input className="input" type="text" placeholder="Your Name" name="name" />
            <input className="input" type="email" placeholder="Your Email" name="email" />
            <input className="input" type="text" placeholder="Your Phone" name="mobile" />
            <textarea className="input" placeholder="Tell Us About Your Needs" name="message"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
    
     ) 
}
    
export default Discount;