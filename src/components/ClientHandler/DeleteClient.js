import React from 'react';
import axios from 'axios';
import API from '../../Api';

function DeleteClient(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        API
          .delete(`api/users/${props.data.id}`)
          .then((res) => {
            console.log(res);
            console.log(res.data);
          });
      };
  return (
    <form onSubmit={handleSubmit}>
    <div className="p-t-30 col">
      <button className="btn btn--radius btn--green" type="submit">
        Delete
      </button>
    </div>
    </form>
  )
}

export default DeleteClient