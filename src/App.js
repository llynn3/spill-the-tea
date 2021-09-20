import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <main>
        </main>
      </Route>
    </div>
  );
}

export default App;
