import React, { useContext, useState } from "react";

export const WeatherContext = React.createContext<{
    cityName: string;
    setCityName: React.Dispatch<React.SetStateAction<string>>;
}>({
    cityName: "",
    setCityName: () => {}
});

type ContextProp = {
    children?: React.ReactNode;
};

const WeatherProvider: React.FC<ContextProp> = ({ children }) => {
    const [cityName, setCityName] = useState("");

    return (
        <WeatherContext.Provider value={{ cityName, setCityName }}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
