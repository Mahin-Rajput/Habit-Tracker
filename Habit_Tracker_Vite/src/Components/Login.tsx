import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";



import { useState, type ChangeEvent } from "react";



function Login() {
  const [Email, setEmail] = useState("");
  const [Pw, setPw] = useState("");
  const [rememberMe, setrememberMe] = useState(false);

  function email(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  function pw(e: ChangeEvent<HTMLInputElement>) {
    setPw(e.target.value);
    console.log(e.target.value);
  }

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setrememberMe(e.target.checked);

    var isChecked = e.target.checked;

    if (isChecked) {
      console.log("True Now");
    }
  }

  return (
    <>
      <div className=" flex items-center justify-center min-h-screen bg-[#ffffff]">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md text-center">
          <h1 className="text-4xl font-sans font-bold">
            <FontAwesomeIcon
              className="mr-2"
              icon={faCalendarDays}
              style={{ color: "#000000" }}
            />
            HabitFlow
          </h1>
          <h2 className="font-sans  text-2xl font-medium">Welcome Back</h2>
          <p className="font-sans  font-light pt-4  text-gray-500">
            Sign in to continue tracking your habits 👾
          </p>

          <div className="w-full text-left mt-8">
            <h1 className="font-sans font-medium">Email</h1>
            <input
              type="text"
              placeholder="Enter your email"
              value={Email}
              onChange={(e) => email(e)}
              className="border border-gray-300 w-full mt-1 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <h1 className="font-sans font-medium pt-5">Password</h1>
            <input
              type="text"
              placeholder="Enter your password"
              value={Pw}
              onChange={(e) => pw(e)}
              className="border border-gray-300 w-full mt-1 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-between items-center mt-5">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Remember Me
              </label>

              <a href="#" className="text-blue-600 hover:underline text-sm">
                Forgot PW?
              </a>
            </div>

            <div className="flex justify-center">
              <button className="  w-full mt-5 bg-black p-2 text-white rounded ">
                Sign In
              </button>
            </div>

            <div className="flex justify-center mt-5">
                              <p className=" text-gray-500 pr-2">Don't have an account?</p><a href="" className="text-blue-600">Sign up</a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
