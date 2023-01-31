import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Input from "./components/Input/Input";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Input />
        </div>
    );
}

export default App;
