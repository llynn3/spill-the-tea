import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Nav from "./components/Nav";
import './App.css';
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(baseURL, config);
      setPosts(response.data.records);
    }
    getPosts();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <main>
        </main>
      </Route>
    </div>
  );
}

export default App;
