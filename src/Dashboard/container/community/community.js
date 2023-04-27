import React, { useEffect } from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import '../../../css/style.css';
import CreatePost from './createpost';
import InputEmoji from 'react-input-emoji'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { GetPosts, SendPost, TakeFile, TakePage, TakePostContent } from '../../../Redux/BlogSlice';


const Community = () => {
    // const [page, setPage] = React.useState(1);
    const { page } = useSelector(state=>state.blog)
    const handleChange = (event, value) => {
        // setPage(value);
        dispatch(TakePage({page:value}))
        dispatch(GetPosts())
        // console.log(value)
      };
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(GetPosts())
    
    
    }, [dispatch])
    
   
    return(
        <div className="content w-full">
            <div className="community d-grid gap-20">
         
            <div className="createPost bs">
            <div className="input">
                <div >
                <img className="globalRoundProfile" src="imgs/2.jpg" alt=""/>  
                </div>
                <InputEmoji className="post " onChange={(e)=>dispatch(TakePostContent({postContent:e}))} placeholder="What's on your mind?" />
            </div>

            <div className="buttons">
                <span>
                    <div className="svg">
                        <img src="imgs/photo.svg" alt=""/>
                    </div>
                        <label for="upload-image" className="post-actions__label">
                            <h4>Photo/Video</h4>
                            <input type="file" id="upload-image" accept="image/*" onChange={(e)=>dispatch(TakeFile({fileAccess:e.target.files[0]}))} />
                        </label>  
                </span>

                <span>
                    <div className="svg">
                        <img src="imgs/smile.svg" alt=""/>
                    </div>
                    <h4>Feeling/Activity</h4>
                </span>
                <button className="visit d-block fs-14 bg-blue c-white w-fit btn-shape" style={{cursor : 'pointer',width: '110px',textAlign: 'center',borderColor:"transparent"}}   onClick={()=>{dispatch(SendPost());dispatch(GetPosts())}}>Publish</button>
            </div>
        </div>

       <CreatePost/>

        
        
      

        <Stack spacing={2} style={{display:"flex",alignItems:"center",margin:4,marginBottom:30}}>
      <Pagination count={10} page={page} onChange={handleChange} variant="outlined" />
      </Stack>
        </div>
      </div>
        )
  
}

export default Community;