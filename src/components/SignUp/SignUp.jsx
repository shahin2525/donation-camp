// import { createUserWithEmailAndPassword } from "firebase/auth/cordova";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const auth = getAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div>
      <div>
        <h1 className="mt-20">Sign up</h1>
        <form className="mt-20" onSubmit={handleRegister}>
          <input type="email" name="email" placeholder="type email" />
          <br />
          <input type="password" name="password" placeholder="type password" />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
