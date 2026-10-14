
import { useState } from "react";
import Greeting from "./Greeting";
import "./App.css";

function App() {
    const [name, setName] = useState("");

    return (
        <div className="container">
            <h1>React Props and useState Example</h1>

            <p>Enter your name below:</p>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <Greeting userName={name} />
        </div>
    );
}

export default App;
