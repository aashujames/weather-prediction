import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import CurrentWeather from "./pages/CurrentWeather/CurrentWeather";
import ForecastReport from "./pages/ForecastReport/ForecastReport";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import SignupCreated from "./pages/SignupCreated/SignupCreated";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/current-weather" element={<CurrentWeather />} />
                <Route path="/forecast-report" element={<ForecastReport />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
