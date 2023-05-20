import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import loginImg from "../../assets/img/login-vector.jpg";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm h-[700px]">
            <div className="card-body">
              <h2 className="text-3xl font-medium">Sign In</h2>
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="text-lg font-medium">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
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
                    className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
                  />
                  <label className="label">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-blue-500 border-0 hover:bg-yellow-400 hover:text-black">
                    Login
                  </button>
                </div>
              </form>
              <div className="divider mt-6">OR</div>
              <button className="flex items-center justify-center gap-2 bg-[#e75447] hover:bg-[#ea4335] text-white py-2 px-8 rounded mt-6">
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
    </div>
  );
};

export default Login;
