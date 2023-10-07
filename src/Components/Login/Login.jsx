import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useRef, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/Ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  // const auth = getAuth(app);
  const [RegError, setRegError] = useState("");
  const [showPass, setshowPass] = useState(false);
  const emailRef = useRef(null);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setRegError("password should be at least 6 character or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("password should contain at least one Uppercase letter");
      return;
    }
    setRegError("");
    signIn(email, password)
      .then((useCredential) => {
        const user = useCredential.user;
        navigate(location?.state ? location.state : "/");
        toast.success("Login Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => setRegError(error.message));
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse mt-10">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
        <div className="card-body">
          <form onSubmit={handleSignIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered w-full"
                name="email"
                ref={emailRef}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="password"
                className="input input-bordered w-full relative"
                name="password"
                required
              />
              <span
                className="absolute mt-14 ml-64 pl-8"
                onClick={() => setshowPass(!showPass)}
              >
                {showPass ? (
                  <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                ) : (
                  <AiOutlineEye></AiOutlineEye>
                )}
              </span>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn text-white bg-red-500 text-center"
              />
            </div>
          </form>
          <p>
            New to website?{" "}
            <Link
              className="hover:underline hover:text-red-500"
              to={"/register"}
            >
              Register now
            </Link>{" "}
          </p>
        </div>
        {RegError && <p className="text-red-500 font-medium">{RegError}</p>}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
