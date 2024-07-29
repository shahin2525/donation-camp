// import { createUserWithEmailAndPassword } from "firebase/auth/cordova";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const auth = getAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    setSuccess("");
    if (password.length < 6) {
      setError("password will more 6 or equal");
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
  return (
    <div>
      <div className="mt-20">
        <h1>Sign up</h1>
        <form className="mt-20" onSubmit={handleRegister}>
          <input type="email" name="email" placeholder="type email" />
          <br />
          <input type="password" name="password" placeholder="type password" />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
      {error && <p>error:{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
};

export default SignUp;
