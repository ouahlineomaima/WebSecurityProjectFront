import React from 'react';
import axios from "axios";
import { BsSearch } from 'react-icons/bs';
import { useState } from "react";
import API from '../../Api';

function SearchClient({ name, onNameChange }) {
    const [cmd, setcmd] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    console.log(cmd);

  const handleSubmit = (event) => {
    event.preventDefault();

    API
      .get(`api/users/${cmd}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data != ''){
          onNameChange(res.data);
        }
        else{
          setErrorMessage(cmd);
        }
        
      });
      
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row inner-form">
        <div className="input-field col-2">
          <input
          onChange = {(e) => setcmd(e.target.value)}
            className="form-control"
            id="choices-text-preset-values"
            type="text"
            placeholder="Type to search..."
          />
          <button className="btn-search" type="submit">
            <BsSearch />
          </button>
          
        </div>
        <div>{errorMessage}</div>
      </div>
    </form>
  )
}

export default SearchClient