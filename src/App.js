import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import Header from "./components/Header";
import About from "./components/About";
import Post from "./components/Posts";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(baseURL, config);
      setPosts(response.data.records);
    }
    fetchPosts();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Route exact path="/">
      <main>
          {posts.map((post) => ( <Post key={post.id} post={post} setToggleFetch={setToggleFetch}/>
          ))}
        </main>
      </Route>
      <Route path="/new">
      <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form posts={posts}
        setToggleFetch={setToggleFetch} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
