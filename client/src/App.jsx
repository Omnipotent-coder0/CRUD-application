import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./screens/Login";
import Public from "./screens/Public";
import Private from "./screens/Private";
import SignUp from "./screens/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/private" element={<Private />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
