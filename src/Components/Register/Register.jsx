import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/Ai";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [RegError, setRegError] = useState("");
  const [showPass, setshowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).*$/;
    if (password.length < 6) {
      setRegError("password should be at least 6 character or longer");
      toast.error("password should be at least 6 character or longer", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else if (!regex.test(password)) {
      setRegError(
        "password should contain at least one Uppercase and special character letter"
      );
      toast.error(
        "password should contain at least one Uppercase and special character letter",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      return;
    } else if (!accepted) {
      setRegError("Please accept our terms and condition");
      toast.error("Please accept our terms and condition", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      return;
    }

    setRegError("");
    createUser(email, password)
      .then((useCredential) => {
        const user = useCredential.user;

        toast.success("Registration Completed Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        return updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((error) => setRegError(error.message));
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse mt-10">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                name="photo"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered w-full"
                name="email"
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
            </div>
            <div className="mt-2 text-base">
              <input type="checkbox" name="terms" id="" />
              <label htmlFor="terms">Accept our terms and conditions</label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Register"
                className="btn bg-red-500 text-white text-center"
              />
            </div>
          </form>
          <p>
            Already have a account?{" "}
            <Link className="hover:underline hover:text-red-500" to={"/login"}>
              Login now
            </Link>{" "}
          </p>
        </div>
        {RegError && (
          <p className="text-red-500 font-normal text-sm px-2">{RegError}</p>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
