import React, { useCallback } from "react";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AddCommand from "./CmdHandler/AddCommand";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import UpdateCommand from "./CmdHandler/UpdateCommand";
import DeleteCommand from "./CmdHandler/DeleteCommand";
import SearchCommand from "./CmdHandler/SearchCommand";
import ShowAllCommands from "./CmdHandler/ShowAllCommands";
import SearchClient from "./ClientHandler/SearchClient";
import AddClient from "./ClientHandler/AddClient";
import UpdateClient from "./ClientHandler/UpdateClient";
import DeleteClient from "./ClientHandler/DeleteClient";
import ShowAllClients from "./ClientHandler/ShowAllClients";
import Upload from "./ClientHandler/Upload";

function Client() {
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState({
    id: "",
    nom: "",
    prenom: "",
    age: "",
  });


  return (
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
      <div className="wrapper wrapper--w960">
        <div className="card card-2">
          <div className="card-heading1"></div>
          <div className="card-body">
            <SearchClient name={user} onNameChange={setUser} />
            <h2 className="title">Client Info</h2>

            {/* <form> */}
            <div className="input-group">
              <input
                className="input--style-2"
                type="text"
                placeholder="Id"
                value={user.id}
                onChange={(e) => setUser({ ...user, id: e.target.value })}
              />
            </div>
            <div className="input-group">
              <input
                className="input--style-2"
                type="text"
                placeholder="Nom"
                value={user.nom}
                onChange={(e) => setUser({ ...user, nom: e.target.value })}
              />
            </div>
            <div className="input-group">
              <input
                className="input--style-2"
                type="text"
                placeholder="Prenom"
                value={user.prenom}
                onChange={(e) => setUser({ ...user, prenom: e.target.value })}
              />
            </div>
            <div className="input-group">
              <input
                className="input--style-2"
                type="number"
                placeholder="Age"
                value={user.age}
                onChange={(e) => setUser({ ...user, age: e.target.value })}
              />
            </div>

            <Upload />

            <div className="row-buttons">
              <AddClient data={user} />
              <UpdateClient data={user} />
              <DeleteClient data={user} />
              <ShowAllClients name={users} onNameChange={setUsers} />
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
      {(function () {
        if (users) {
          return (
            <>
              <div className="container-table100">
                <div className="wrap-table100">
                  <div className="table100">
                    <table>
                      <thead>
                        <tr className="table100-head">
                          <th className="column1">Client ID</th>
                          <th className="column2">Nom</th>
                          <th className="column3">Prenom</th>
                          <th className="column3">Age</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users &&
                          users.map((user) => (
                            <tr key={user.id}>
                              <td className="column1">{user.id}</td>
                              <td className="column2">{user.nom}</td>
                              <td className="column3">{user.prenom}</td>
                              <td className="column4">{user.age}</td>
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
  );
}

export default Client;
