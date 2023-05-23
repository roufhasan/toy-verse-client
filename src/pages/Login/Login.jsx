import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import loginImg from "../../assets/img/login-vector.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../titleHook/useTitle";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  useTitle("Login");

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.message == "Firebase: Error (auth/user-not-found).") {
          setError("Wrong Email Addedress");
        } else if (error.message == "Firebase: Error (auth/wrong-password).") {
          setError("Wrong Password");
        }
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((errror) => {
        console.log(errror);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm h-[700px]">
          <div className="card-body">
            <h2 className="text-3xl font-medium">Sign In</h2>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Log In"
                  className="btn bg-blue-500 border-0 hover:bg-yellow-400 hover:text-black"
                />
              </div>
            </form>
            <div>
              <p className="text-red-500 text-center">
                <small>{error}</small>
              </p>
              <div className="divider mt-6">OR</div>
            </div>
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2 bg-[#e75447] hover:bg-[#ea4335] text-white py-2 px-8 rounded mt-6"
            >
              <FaGoogle></FaGoogle> Log In With Google
            </button>
            <div className="text-center mt-4">
              <p>
                New to Toy Verse?{" "}
                <Link to="/register" className="font-semibold text-blue-500">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
