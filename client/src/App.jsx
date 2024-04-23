import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./screens/Login";
import Public from "./screens/Public";
import Private from "./screens/Private";
import SignUp from "./screens/SignUp";
import { useAuthUser } from "./contexts/AuthUserContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser } = useAuthUser();
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Public />} />
        <Route
          path="/private"
          element={authUser ? <Private /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/private"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/private"} /> : <SignUp />}
        />
      </Routes>
    </>
  );
}

export default App;
