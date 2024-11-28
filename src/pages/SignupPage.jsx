import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Login_Api, Signup_api } from "../Utils/Apis";
import { useDispatch } from "react-redux";
import { login } from "../ReduxStateManagement/authslice";

export default function SignupPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginhandle, setloginhandle] = useState(false);
  const [formdata, setformdata] = useState({});
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/chatbot");
    }
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleloginsubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    const endpoint = loginhandle ? Login_Api : Signup_api;

    try {
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await resp.json();
      if (data.response) {
        setloginhandle(!loginhandle);
        seterror(data.response + " Login to continue");
        if (data.token) {
          dispatch(login({ token: data.token }));
          navigate("/chatbot");
        }
      } else {
        seterror(data.error);
      }
    } catch (err) {
      seterror("Something went wrong. Please try again.");
      console.log(err);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto mt-16 p-6 border rounded-lg shadow-md">
      <form onSubmit={handleloginsubmit}>
        <h1 className="text-2xl font-semibold mb-6 text-center">
          {loginhandle ? "Login" : "Sign Up"}
        </h1>

        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="text"
          placeholder="chris@gmail.com"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          id="email"
          onChange={(e) =>
            setformdata({ ...formdata, [e.target.id]: e.target.value })
          }
          disabled={loading}
        />

        <label className="block text-sm font-medium mb-2">Password</label>
        <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="chris@1234"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            id="password"
            onChange={(e) =>
              setformdata({ ...formdata, [e.target.id]: e.target.value })
            }
            disabled={loading}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center"
            disabled={loading}
          >
            {passwordVisible ? (
              <FiEye className="w-5 h-5 text-gray-500 mb-3" />
            ) : (
              <FiEyeOff className="w-5 h-5 text-gray-500 mb-3" />
            )}
          </button>
        </div>

        {error && (
          <p className="text-red-700 text-center p-2 m-2">{error}</p>
        )}

        <button
          type="submit"
          className="w-full py-2 text-white bg-black rounded-lg hover:bg-gray-800"
          disabled={loading}
        >
          {loginhandle ? "Login" : "Sign Up"}
        </button>

        <p className="text-center text-gray-600 my-4">Or continue with</p>
        <div className="flex justify-center gap-4">
          <button
            disabled={loading}
            className="flex items-center border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>
          <button
            disabled={loading}
            className="flex items-center border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="w-5 h-5 mr-2"
            />
            Apple
          </button>
        </div>

        <p className="text-center mt-4 text-sm flex flex-col sm:flex-row gap-2 justify-center">
          {loginhandle ? (
            <>
              Don{"'"}t have an account?{" "}
              <span
                onClick={() => setloginhandle(!loginhandle)}
                className="text-indigo-600 hover:underline cursor-pointer"
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setloginhandle(!loginhandle)}
                className="text-indigo-600 hover:underline cursor-pointer"
              >
                Log In
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
}
