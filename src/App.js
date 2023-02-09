import About from "./pages/About";
import EditProfile from "./pages/EditProfile";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
