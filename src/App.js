import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import LoginSelection from "./pages/loginselection";
import Register from "./pages/register";

import Dashboard from "./pages/dashboard";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LoginSelection />} />
          <Route path="/login/student" element={<Login userType="student" />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;