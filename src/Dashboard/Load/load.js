import React, { useState,useEffect  } from 'react';
import './load.css';
import axios from "axios";

const Load = () => {
  const [loadItem, setLoadItem] = useState(null);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  const loadingFunction = async () => {
    try {
      const data = await axios
        .get("https://api.lyrics.ovh/v1/Eminem/Godzilla")
        .then((res) => {
          console.log(res);
   //       setLoadItem(res.data.lyrics);
        });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadingFunction();
  }, []);


  return(
   <div className="load">
      {/* {loading && <img src="imgs/Sequence.gif"/> }  */}
      {loading ? loadItem : <img src="imgs/Sequence.gif"/> }
   
   </div>
   ) 
}
  
export default Load;