import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./contents/topbar/Topbar";
import Home from "./contents/Home";
import Single from "./contents/Single";
import Write from "./contents/Write";
import Settings from "./contents/Settings";
import Login from "./contents/Login";
import Register from "./contents/Register";
import NotFound from "./contents/NotFound";
//import SinglePost from "./contents/SinglePost";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/user/write" element={user ? <Write /> : <Register />} />
        <Route
          path="/user/settings"
          element={user ? <Settings /> : <Register />}
        />
        <Route path="/auth/login" element={user ? <Home /> : <Login />} />
        <Route path="/auth/register" element={user ? <Home /> : <Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
