import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Input />
            <Button>Signup</Button>
        </div>
    );
}

export default App;
