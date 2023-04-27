import  React, { useEffect } from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import '../../../css/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeletePost, GetPosts, TakeDelete, TakeFeedBackContent, feedbackHandle } from '../../../Redux/BlogSlice';

const CreatePost = () => {
    const { PostsData } = useSelector(state=>state.blog)
    const dispatch = useDispatch()
    return(
        PostsData.map(((data,i)=>{

            var imageDispaly=""
            var feedbackArray =[]
            
            const handleImagePost = data.images;
           if (data.feedback!=null){
                feedbackArray =data.feedback
           }
           
           
           
            if (handleImagePost==null){
                imageDispaly='none';
            }
            else{
                imageDispaly='';
            }



            return(


        
      <div className="mainPosts bs">
      <div className="title">
          <div className="profile">
              <div >
              <img className="globalRoundProfile" src={`../../../../public/imgs/1.jpg`} alt=""/>  
                  <span></span>
              </div>

              <div className="name">
                  <a href="#">User Name</a>
                  <span>{data.postDate} <i className="fas fa-globe-americas"></i></span>
              </div>
          </div>
          <button onClick={()=>{dispatch(TakeDelete({deletePostId:data.id}));dispatch(DeletePost());dispatch(GetPosts())}}><i className="fas fa-ellipsis-h"></i></button>
      </div>

      <div className="description">
        <p style={{fontWeight:"bold"}}>{data.postTitle}</p>
          {data.postContent}
      </div>
   
      <div className="post" style={{display:imageDispaly}}>
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
                  <img src="../../../../public/imgs/comment.svg" alt=""/>
              </div>
              <h3>Comment</h3>
          </span>
          
      </div>
      <div className="line"></div>

{
    
    feedbackArray.map(((data,i)=>{


        return(
<div className="comment">
          <div className="comment_warpper">
           <img src="imgs/2.jpg"/>
              <div className="circle"></div>
                 <div>
                    {data}
                  </div>
          </div>
      </div>

        )
    }))
}
      
        


      <div className="comment">
          <div className="comment_warpper">
           <img src="imgs/2.jpg"/>
              <div className="circle"></div>
                 <div className="comment_search">
                    <input type="text" onChange={(e)=>{dispatch(TakeFeedBackContent({comment:e.target.value,postId:data.id}))}} placeholder="Write a comment"/>
                    <i className="fa-regular fa-face-smile"></i>
                    <i className="fa-solid fa-camera"></i>
                    <i className="fa-regular fa-note-sticky"></i>
                    <button onClick={()=>{dispatch(feedbackHandle());dispatch(GetPosts())}}><i className="fa-solid fa-paper-plane" style={{marginLeft : '20px'}}></i></button>
                  </div>
          </div>
      </div>
  </div>
 
 )}))

        )
  
}

export default CreatePost;