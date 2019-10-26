import React, { } from "react";
import axios from "axios"
import "./App.css";
import SmurfList from "./smurfList"
import AddSmurf from "./AddSmurf"

const App = () => {
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res)
        })

    return (
        <div className="App">
            <h1>SMURTS! 2.0 W/ Redux</h1>
            <AddSmurf />
            <SmurfList />
        </div>
    );
}

export default App;