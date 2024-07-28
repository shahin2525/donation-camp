import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth(app);

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div>
        <div>
          <div>
            <h1 className="mt-10">Login page 2</h1>
            {!user && (
              <button className="mr-10 mt-10" onClick={handleLogin}>
                Login
              </button>
            )}
          </div>

          <div>
            {!user && (
              <button className="mr-10 mt-10" onClick={handleGithubLogin}>
                Github-Login
              </button>
            )}
          </div>

          <div className="mt-10">
            {user && (
              <div>
                <button onClick={handleSignOut}>Sign Out</button>
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
