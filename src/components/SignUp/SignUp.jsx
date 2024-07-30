// import { createUserWithEmailAndPassword } from "firebase/auth/cordova";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [type, setType] = useState(false);
  const auth = getAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    setError("");
    setSuccess("");
    if (password.length < 6) {
      setError("password will more 6 or equal");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("password will have at least a single upper case");
      return;
    } else if (!accepted) {
      setError("please accept our terms and condition");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        setSuccess("user created sucessfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };
  const handleShowPassword = () => {
    setType(!type);
  };
  return (
    <div>
      <div className="mt-20">
        <h1>Sign up</h1>
        <form className="mt-20" onSubmit={handleRegister}>
          <input type="email" name="email" placeholder="type email" />
          <br />
          <input
            type={type ? "text" : "password"}
            name="password"
            placeholder="type password"
          />
          <span onClick={handleShowPassword}>
            {type ? "hide" : "show password"}
          </span>
          <br />
          <input type="checkbox" placeholder="checkbox" name="terms" />
          <br />
          <input type="submit" value="submit" />
        </form>
        <div>
          <p>
            already have an account{" "}
            <button>
              <Link to="/login">Login</Link>
            </button>
          </p>
        </div>
      </div>
      {error && <p>error:{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
};

export default SignUp;
