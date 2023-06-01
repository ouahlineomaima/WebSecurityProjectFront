import React, { useState } from 'react'
import Api from '../../Api';
import {FaUpload} from 'react-icons/fa';
import {HiShieldExclamation} from 'react-icons/hi';

function Upload() {
    //console.log(props.data.selectedFile);
    const [state, setState] = useState({
        selectedFile:"",
      });
      console.log(state.selectedFile);

     // const [isActive,setIsActive]=useState(false);
      

    const [message,setMessage]=useState("");
    const [alertYes,setAlertYes]=useState(true);

     const  handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData() 
        data.append('file', state.selectedFile)
        await Api.post(`api/upload`, data)
        .then(res => {
            setMessage(res.data);
            setAlertYes(true);
            console.log("gg"+message);
            console.log(res);
             
        }).catch(error=>{
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                setMessage(error.response.data);
                setAlertYes(false);
            console.log("gg"+message);
              }
        })
  }
  return (
      <>
      <div className=" input-group input-upload">
                <input
                  className="input--style-2"
                  type="file"
                  accept="image/png, image/jpg, image/jpeg"
                  onChange = {(e) => setState({...state, selectedFile: e.target.files[0]})} 
                />
              
    <form onSubmit={handleSubmit}>
      <div className="p-t-30 col" style={{ paddingTop:"0" }}>
        <button className="btn btn--radius btn--green" 
        type="submit"><FaUpload color='white'/></button>
      </div>
    </form>
    </div>
              <p className="p-input-file"><strong>NB</strong> : We only accept jpg, jpeg and png format</p>
              
{(message)?(alertYes)?<div className="alert-upload-success " > 
  <div><HiShieldExclamation size={20}/> {message}</div>
</div>:<div className="alert-upload "> 
  <div><HiShieldExclamation size={20}/> {message}</div>
</div>:''                }
    </>
  )
}

export default Upload