import React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import '../../../css/style.css';
import CreatePost from './createpost';
import InputEmoji from 'react-input-emoji'


const Community = () => {
  
   
    return(
        <div className="content w-full">
            <div className="community d-grid gap-20">
         
            <div className="createPost bs">
            <div className="input">
                <div >
                <img className="globalRoundProfile" src="imgs/2.jpg" alt=""/>  
                </div>
                <InputEmoji className="post " placeholder="What's on your mind?" />
            </div>

            <div className="buttons">
                <span>
                    <div className="svg">
                        <img src="imgs/photo.svg" alt=""/>
                    </div>
                        <label for="upload-image" className="post-actions__label">
                            <h4>Photo/Video</h4>
                            <input type="file" id="upload-image" accept="image/*" multiple/>
                        </label>  
                </span>

                <span>
                    <div className="svg">
                        <img src="imgs/smile.svg" alt=""/>
                    </div>
                    <h4>Feeling/Activity</h4>
                </span>
                <a className="visit d-block fs-14 bg-blue c-white w-fit btn-shape" style={{cursor : 'pointer',width: '110px',textAlign: 'center'}}>Publish</a>
            </div>
        </div>

       <CreatePost/>
       <CreatePost/>

        
        
      

        </div>
      </div>
        )
  
}

export default Community;