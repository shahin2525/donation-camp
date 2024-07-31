import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.init";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  //
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [type, setType] = useState(false);
  const emailRef = useRef();

  const auth = getAuth(app);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    setSuccess("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed up
        console.log(result.user);

        if (result.user.emailVerified) {
          setSuccess("user login successfully");
        } else {
          alert("verify your email");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  const handelSocialLogin = () => {
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

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (!email) {
      setError("please provide email");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("please provide valid email ");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("check your email");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <div>
      <div>
        <div>
          <div>
            <h1 className="mt-10">Login page </h1>
            {!user && (
              <button className="mr-10 mt-10" onClick={handelSocialLogin}>
                Google login
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
          <div>
            <span>do not have any account </span>
            <button>
              <Link to="/sign-up">sign-up</Link>
            </button>
          </div>
        </div>
        {/* login start */}
        <div>
          <div className="mt-4">
            <h1>email login</h1>
            <form className="mt-4" onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                placeholder="type email"
                ref={emailRef}
              />
              <br />
              <input
                type={type ? "text" : "password"}
                name="password"
                placeholder="type password"
              />
              <span onClick={() => setType(!type)}>
                {type ? "hide" : "show password"}
              </span>
              <br />
              <input type="submit" value="submit" />
              <br />
              <label>
                <a onClick={handleForgetPassword} href="">
                  forgot password
                </a>
              </label>
            </form>
          </div>
          {error && <p>error:{error}</p>}
          {success && <p>{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
