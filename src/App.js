import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import Post from "./components/Post";
import Nav from "./components/Nav";
import './App.css';

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
          {posts.map((post) => ( <Post key={post.id} post={post} />
          ))}
        </main>
      </Route>
    </div>
  );
}

export default App;
