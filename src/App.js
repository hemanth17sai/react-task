import logo from "./logo.svg";
import React, { Component, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <h1>List of Employees'</h1>

      <ol>
        {user &&
          user.length > 0 &&
          user.map((userObj, index) => (
            <div className="data">
              <li>
                Name:{userObj.name}
                <br></br>
                Email:{userObj.email}
                <br></br>
                website:{userObj.website}
              </li>
              <br></br>
            </div>
          ))}
      </ol>
    </main>
  );
}

export default App;
