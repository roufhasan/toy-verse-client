import { Link } from "react-router-dom";

import loginImg from "../../assets/img/login-vector.jpg";

const Register = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm h-[700px]">
          <div className="card-body">
            <h2 className="text-3xl font-medium">Sign Up</h2>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
                />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photoURL"
                  className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-500 border-0 hover:bg-yellow-400 hover:text-black">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="divider mt-6">OR</div>
            <div className="text-center mt-4">
              <p>
                Already have an accont?{" "}
                <Link to="/login" className="font-semibold text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
