import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Addtodos from "./pages/Addtodos";
import Todolist from "./pages/Todolist";
import Userprofile from "./pages/Userprofile";
import "../node_modules/bootstrap/dist/css/bootstrap.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addtodos" element={<Addtodos />} />
          <Route path="todolist" element={<Todolist />} />
          <Route path="userprofile" element={<Userprofile />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
