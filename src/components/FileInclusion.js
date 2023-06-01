import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function FileInclusion() {

    const {file}=useParams();
    useEffect(() => {
        const div=document.querySelector('.content-page');
        if (file==="fileInclusion.html") {
            fetch(`/${file}`)
        .then(res=>res.text())
        .then(data=>{
            div.innerHTML=data;
        })
        } else {
            div.innerHTML="Not found";
        }
        
      }, []);
    
  return (
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
      
      <div className="wrapper wrapper--w960">
        <div className="card card-2">
          <div className="card-heading"></div>
          <div className="card-body">

            <h2 className="title">File Inclusion</h2>
            
            <div className='content-page'>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default FileInclusion