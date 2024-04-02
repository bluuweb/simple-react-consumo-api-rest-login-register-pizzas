import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "./context/UserProvider";

import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import RegisterPage from "./pages/Register";

const App = () => {
  const { token } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route path="/pizzas">
          <Route
            path=":id"
            element={<Details />}
          />
        </Route>
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <RegisterPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};

export default App;
