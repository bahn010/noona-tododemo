import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodoPage from "./pages/TodoPage";
import PrivateRoute from "./route/PrivateRoute";
import { useState , useEffect} from "react";
import api from "./utils/api";

function App() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      setUser(null);
      return;
    }
    
    try {
      const response = await api.get("user/me");
      setUser(response.data.data);
    } catch (error) {
      console.log("getUser error:", error);
      setUser(null);
    }
  }
  useEffect(() => {
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute user={user} ><TodoPage user={user} setUser={setUser} /></PrivateRoute>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;