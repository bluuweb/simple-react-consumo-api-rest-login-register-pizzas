import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import useAuthentication from "../hooks/useAuthentication";

const RegisterPage = () => {
  const { registerWithEmailAndPassword } = useContext(UserContext);

  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword, // Agrega el estado de confirmPassword
    setConfirmPassword, // Agrega la función para manejar el cambio en confirmPassword
    handleSubmit,
  } = useAuthentication(registerWithEmailAndPassword, true);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-6">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="confirmPassword"
                className="form-label"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!email || !password || !confirmPassword}
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
