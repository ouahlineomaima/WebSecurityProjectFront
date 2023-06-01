import React, { useState } from "react";
import API from "../Api";

function CommandExecution() {
  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    return specialChars.test(str);
  }
  const [address, setAddress] = useState("");
  const [response, setResponse] = useState("");

  const [sucess, setSucess] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (containsSpecialChars(address)) {
      setResponse("Not a valid address IP : (");
      setSucess(false);
    } else {
      API.post(`api/ping/${address}`)
        .then((res) => {
          setResponse(res.data);
          setSucess(true);
        })
        .catch((error) => {
          if (error.response) {
            setResponse(error.response.data);
            setSucess(false);
          }
        });
    }
  };
  return (
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
      <div className="wrapper wrapper--w960">
        <div className="card card-2">
          <div className="card-heading"></div>
          <div className="card-body">
            <h2 className="title">Ping for FREE</h2>
            <div className="input-group">
              <form onSubmit={handleSubmit}>
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Enter IP address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </form>
            </div>

            {response && (
              <div
                className="content-page"
                style={{ color: sucess ? "#009c8b" : "red" }}
              >
                {response}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommandExecution;
