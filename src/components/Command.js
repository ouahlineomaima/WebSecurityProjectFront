import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AddCommand from "./CmdHandler/AddCommand";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import UpdateCommand from "./CmdHandler/UpdateCommand";
import DeleteCommand from "./CmdHandler/DeleteCommand";
import SearchCommand from "./CmdHandler/SearchCommand";
import ShowAllCommands from "./CmdHandler/ShowAllCommands";
import API from '../Api';

function Command() {
  const [users, setUsers] = useState(null);
  const [commands, setCommands] = useState(null);

  useEffect(() => {
    API
      .get(`api/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.error(`Error : ${err}`));
  }, []);

  const [command, setCommand] = useState({
    id: "",
    date: "",
    client: {
      id:"",
      nom:"",
      prenom:"",
      age:"",
    },
  });
  return (
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
      
      <div className="wrapper wrapper--w960">
        <div className="card card-2">
          <div className="card-heading"></div>
          <div className="card-body">

          <SearchCommand name={command} onNameChange={setCommand}/>
            <h2 className="title">command Info</h2>
            
            {/* <form> */}
              <div className="input-group">
                <input
                  className="input--style-2"
                  type="text"
                  placeholder="Id"
                  name="name"
                  value={command.id}
                  onChange = {(e) => setCommand({...command, id: e.target.value})} 
                />
              </div>
              <div className="input-group">
                <input
                  style={{ padding: "9px 0" }}
                  className="input--style-2 js-datepicker"
                  type="date"
                  name="birthday"
                  value={command.date}
                  onChange = {(e) => setCommand({...command, date: e.target.value})} 
                />
                <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
              </div>
              <div className="input-group">
                <div className="rs-select2 js-select-simple select--no-search">
                  <select className="onfocusclassname" name="Client" 
                  value={
                    (function () {
                      if (command.client.id) {
                          return JSON.stringify(command.client);
                      }else{
                        return 'undefined'
                      }
                  })()}
                   onChange = {(e) => setCommand({...command, client: JSON.parse(e.target.value)
                   })} >
                    <option disabled="disabled" value="undefined">
                      client
                    </option>
                    {users &&
                      users.map((user) => (
                        <option key={user.id} value={JSON.stringify(user)}>{user.nom}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="row-buttons">
                {/* <Link to={"/add"}> */}
                  <AddCommand data={command} />
                {/* </Link> */}
                <UpdateCommand data={command} />
                <DeleteCommand data={command}/>
                <ShowAllCommands name={commands} onNameChange={setCommands}/>
              </div>
            {/* </form> */}
          </div>
        </div>
      </div>
      {
                    (function () {
                      if (commands) {
                          return <>
                          <div className="container-table100">
			<div className="wrap-table100">
				<div className="table100">
					<table>
						<thead>
							<tr className="table100-head">
								<th className="column1">Date</th>
								<th className="column2">Command ID</th>
								<th className="column3">Client</th>
							</tr>
						</thead>
						<tbody>
            {commands &&
                      commands.map((command) => (
                        <tr key={command.id}>
									<td className="column1">{command.date}</td>
									<td className="column2">{command.id}</td>
									<td className="column3">{command.client.nom}</td>
								</tr>
                      ))}
								
								
						</tbody>
					</table>
				</div>
			</div>
		</div>
                          </>
                      }
                  })()}
      
    </div>
  );
}

export default Command;
