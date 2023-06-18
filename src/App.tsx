import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import ForecastReport from "./pages/ForecastReport/ForecastReport";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import SignupCreated from "./pages/SignupCreated/SignupCreated";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route
                        path="forecast-report"
                        element={<ForecastReport />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
