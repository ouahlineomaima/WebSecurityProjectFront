import React from "react";
import axios from "axios";
import API from '../../Api';

function ShowAllCommands({ name, onNameChange }) {

  const handleSubmit = event => {
    event.preventDefault();
    
    API.get(`api/commands`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        onNameChange(res.data);
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-t-30 col">
        <button className="btn btn--radius btn--green" type="submit">
          Show All
        </button>
      </div>
    </form>
  );
}

export default ShowAllCommands;
