import { Link, useNavigate } from "react-router-dom";
import signupImg from "../../assets/img/signup-vector.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../titleHook/useTitle";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  useTitle("Register");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photURL.value;

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError(
        "Password must be Minimum eight characters, at least one letter and one number"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
    form.reset();
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <img src={signupImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm h-[700px]">
          <div className="card-body">
            <h2 className="text-3xl font-medium">Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
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
                  name="password"
                  placeholder="Password"
                  required
                  className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photURL"
                  placeholder="photoURL"
                  required
                  className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
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
