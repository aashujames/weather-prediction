import "./App.css";
import Signup from "./pages/Signup/Signup";

function App() {
    const api_url = "https://hiring-test.a2dweb.com/api-docs/#/";

    // Defining async function
    async function getapi(url: any) {
        // Storing response
        const response = await fetch(url);

        // Storing data in form of JSON
        var data = await response.json();
        console.log(data);
    }
    // Calling that async function
    getapi(api_url);
    return (
        <div className="App">
            <Signup />
        </div>
    );
}

export default App;
