import "./App.css";
import WeatherProvider from "./context";
import ForecastReport from "./pages/ForecastReport/ForecastReport";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <WeatherProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="forecast-report"
                        element={<ForecastReport />}
                    />
                </Routes>
            </BrowserRouter>
        </WeatherProvider>
    );
}

export default App;
