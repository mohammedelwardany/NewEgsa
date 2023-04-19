import  React from 'react';
import '../../../css/framework.css';
import '../../../css/master.css';
import { useSelector } from 'react-redux'

const Draft = () => {
  const {userData} = useSelector(state => state.user)
    return(
           <div className="quick-draft p-15 bg-white rad-10 bs">
            <h2 className="mt-0 mb-10">Quick Draft</h2>
            <p className="mt-0 mb-20 c-grey fs-15">Write A Draft For Your Ideas</p>
            <form>
              <input className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" type="text" placeholder="Title" />
              <textarea className="d-block mb-15 w-full p-10 b-none bg-eee rad-6" placeholder="Your Thought"></textarea>
              <input className="save d-block fs-14 bg-blue c-white b-none w-fit btn-shape" type="submit" value="Save" onClick={()=>{console.log(userData)}}/>
            </form>
          </div>
 
     
        )
  
}

export default Draft;