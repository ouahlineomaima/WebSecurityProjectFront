import React from 'react';
import axios from "axios";
import { BsSearch } from 'react-icons/bs';
import { useState } from "react";
import API from '../../Api';

function SearchCommand({ name, onNameChange }) {
    
    const [cmd, setcmd] = useState('');
    console.log(cmd);

  const handleSubmit = (event) => {
    event.preventDefault();

    API
      .get(`api/commands/${cmd}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        onNameChange(res.data);
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
      </div>
    </form>
  );
}

export default SearchCommand;
