import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import '../../../css/style.css';

const CreatePost = () => {
  
    return(
      <div className="mainPosts bs">
      <div className="title">
          <div className="profile">
              <div >
              <img className="globalRoundProfile" src="imgs/1.jpg" alt=""/>  
                  <span></span>
              </div>

              <div className="name">
                  <a href="#">User Name</a>
                  <span>1h <i className="fas fa-globe-americas"></i></span>
              </div>
          </div>
          <i className="fas fa-ellipsis-h"></i>
      </div>

      <div className="description">
          LandingPage UI Design Using Html Css/Sass JS
      </div>

      <div className="post" >
      <img className="post" src="imgs/post-2.jpg" alt=""/>  
      </div>

      <div className="reaction">
          <div className="icons">
              <div className="svg">
                  <img src="imgs/like.svg" alt=""/>
              </div>

              <a href="#">32k</a>
              
          </div>
         
      </div>

      <div className="likeShare">
          <span>
              <div className="svg">
                  <img src="imgs/like_light.svg" alt=""/>
              </div>
              <h3>Like</h3>
          </span>
          <span>
              <div className="svg">
                  <img src="imgs/comment.svg" alt=""/>
              </div>
              <h3>Comment</h3>
          </span>
          
      </div>
      <div className="line"></div>
      <div className="comment">
          <div className="comment_warpper">
           <img src="imgs/2.jpg"/>
              <div className="circle"></div>
                 <div className="comment_search">
                    <input type="text" placeholder="Write a comment"/>
                    <i className="fa-regular fa-face-smile"></i>
                    <i className="fa-solid fa-camera"></i>
                    <i className="fa-regular fa-note-sticky"></i>
                    <i className="fa-solid fa-paper-plane" style={{marginLeft : '20px'}}></i>
                  </div>
          </div>
      </div>
  </div>
 


        )
  
}

export default CreatePost;