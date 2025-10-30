import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useCookies } from "react-cookie";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// Page imports
import Home from "./Pages/Web/Home";
import Login from "./Pages/Auth/login";
import SignupPage from "./Pages/Auth/SignUp";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/resetPassword";
import VerifyOtp from "./Pages/Auth/verifyOtp";
import Dashboard from "./Pages/Dashboard";

function App() {
  const ProtectedRoute = ({ children }) => {
    // const [cookies] = useCookies(["accessToken"]);

    // if (!cookies.accessToken) {
    //   return <Navigate to="/auth/signin" replace />;
    // }

    // return children ? children : <Outlet />;
    return <Outlet />;
  };

  const PublicRoute = ({ children }) => {
    // const [cookies] = useCookies(["accessToken"]);

    // if (cookies.accessToken) {
    //   return <Navigate to="/" replace />;
    // }

    // return children ? children : <Outlet />;
    return <Outlet />;
  };

  return (
    <Router>
      <Routes>
        {/* Main Layout Routes */}
        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/auth">
              <Route path="signin" element={<Login />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="ForgotPassword" element={<ForgotPassword />} />
              <Route path="ResetPassword" element={<ResetPassword />} />
              <Route path="verifyOtp" element={<VerifyOtp />} />
            </Route>
          </Route>
        </Route>

        {/* Auth Layout Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            {/* Remove the nested Route with path="/" */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
