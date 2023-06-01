import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../Api";

function Reception() {
  const { id } = useParams();

  const [commands, setCommands] = useState(null);
  const [error, setError] = useState(false);
  console.log(error);

  //validate the parameter
  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

  useEffect(() => {
    if (containsSpecialChars(id) || isNaN(id)) {
      setError(true);
    } else {
      setError(false);
      API.get(`api/reception/${id}`).then((res) => {
        setCommands(res.data);
      });
    }
  }, []);

  return (
    <>
      {(function () {
        if (commands) {
          return (
            <>
              <div className="container-table100">
                <div className="wrap-table100">
                  <div className="table100">
                    <table>
                      <thead>
                        <tr className="table100-head">
                          <th className="column1">Command ID</th>
                          <th className="column2">Client ID</th>
                          <th className="column3">Date</th>
                          <th className="column4">Labelle</th>
                        </tr>
                      </thead>
                      <tbody>
                        {commands &&
                          commands.map((command) => (
                            <tr key={command.id}>
                              <td className="column1">{command.id}</td>
                              <td className="column2">{command.client.id}</td>
                              <td className="column3">{command.date}</td>
                              <td className="column4">{command.labelle}</td>
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

      {error && <div className="reception-error">NOT FOUND</div>}
    </>
  );
}

export default Reception;
