import React, { useContext, useEffect, useState } from "react";

export const WeatherContext = React.createContext<{
    cityName: string;
    setCityName: React.Dispatch<React.SetStateAction<string>>;
    switchPage: string;
    setSwitchPage: React.Dispatch<React.SetStateAction<string>>;
    fetchingCurrentData: () => Promise<void>;
    fetchingForecastic: () => Promise<void>;
}>({
    cityName: "",
    setCityName: () => {},
    switchPage: "",
    setSwitchPage: () => {},
    fetchingCurrentData: async () => {},
    fetchingForecastic: async () => {}
});

type ContextProp = {
    children?: React.ReactNode;
};

const WeatherProvider: React.FC<ContextProp> = ({ children }) => {
    const [cityName, setCityName] = useState("");
    const [switchPage, setSwitchPage] = useState("H");

    const fetchingCurrentData = async () => {
        try {
            const res = await fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                    cityName +
                    "&appid=422d9b549f260cc325650e2f823633fc"
            );
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchingForecastic = async () => {
        try {
            const res = await fetch(
                "https://api.openweathermap.org/data/2.5/forecast?q=" +
                    cityName +
                    "&appid=ac1d7bb080fbf54a4073009d37a37ec8"
            );
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <WeatherContext.Provider
            value={{
                cityName,
                setCityName,
                fetchingCurrentData,
                switchPage,
                setSwitchPage,
                fetchingForecastic
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
