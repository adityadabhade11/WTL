
import DataFetcher from "./DataFetcher";
import "./App.css";

function App() {
    return (
        <div className="app">
            <header className="header">
                <h1>React Axios API Fetch</h1>
                <p>
                    Fetch and display posts using Axios,
                    useEffect, and useState.
                </p>
            </header>

            <main>
                <DataFetcher />
            </main>

            <footer>
                WTL Assignment 6 | React and Axios
            </footer>
        </div>
    );
}

export default App;
