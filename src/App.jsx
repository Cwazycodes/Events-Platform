import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import StaffDashboard from "./pages/StaffDashboard";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/dashboard">My Events</Link> | 
        <Link to="/signin">Staff Sign In</Link>
      </nav>
      <Routes>
        {/* Ensure Home is the first thing that appears */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
