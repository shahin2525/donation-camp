import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.loggedUser;
        setUser(loggedUser);
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <h1>Login</h1>
            <button className="mr-10 mt-10" onClick={handleLogin}>
              Login
            </button>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>

          <div className="mt-10">
            {user && (
              <div>
                <h2>user-name:{user.displayName}</h2>
                <p>Email:{user.email}</p>
                <img src={user.photoURL} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
