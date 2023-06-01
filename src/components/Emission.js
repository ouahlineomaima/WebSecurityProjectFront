import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../Api";

function Emission() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    API.get(`api/users`).then((res) => {
      console.log(res);
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  return (
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
      <div className="wrapper wrapper--w960">
        <div className="card card-2">
          <div className="card-heading"></div>
          <div className="card-body">
            <h2 className="title">Emission</h2>

            {(function () {
              if (users) {
                return (
                  <>
                    <div
                      className="container-table100"
                      style={{ justifyContent: "left", padding: "0px" }}
                    >
                      <div
                        className="wrap-table100"
                        style={{
                          width: "auto",
                        }}
                      >
                        <div className="table100">
                          <table>
                            <thead>
                              <tr className="table100-head">
                                <th className="column1">Client ID</th>
                              </tr>
                            </thead>
                            <tbody>
                              {users &&
                                users.map((user) => (
                                  <tr key={user.id}>
                                    <Link
                                      className="link-reception"
                                      style={{
                                        textDecoration: "none",
                                        padding: "0px 0px 30px 0px",
                                      }}
                                      to={`/reception/${user.id}`}
                                    >
                                      <td className="column1">{user.id}</td>
                                    </Link>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emission;
