import "./App.css";
import { Routes, Route } from "react-router";
import React, { useState } from "react";
import Home from "./components/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import More from "./components/More";

function App() {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState("");

  const api = `https://api.github.com/users/${userName}/repos?per_page=100`;
  const url = `https://api.github.com/users/${userName}`;
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path={"/"}
          element={
            <Home
              data={data}
              setData={setData}
              setUserData={setUserData}
              setUserName={setUserName}
              userData={userData}
              userName={userName}
              api={api}
              url={url}
            />
          }
        />
        <Route path={"/more"} element={<More userData={userData} />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/privacy"} element={<Privacy />} />
        <Route path={"/team"} element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
