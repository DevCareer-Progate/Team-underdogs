import React from "react";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
    return (
        <div
            className='App'
            style={{ display: "grid", placeContent: "center" }}
        >
            <div style={{ width: "200px", height: "200px", background: "red" }}>
                Hello Team
                <Button />
            </div>
        </div>
    );
}

export default App;
