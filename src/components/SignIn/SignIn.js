import React from "react";
import { auth } from "../../bbddConnection/BBDDConnection";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import "./styles/SignIn.css";

function SignIn() {
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider(); // PopUp para iniciar sesión
    auth.signInWithPopup(provider);
  }
  return (
    <div className="signIn--container">
      <h2>Acceder al chat grupal</h2>
      <button onClick={signInWithGoogle} className="singIn--button">
        <div className="singIn--googleIcon">
          <FcGoogle />
        </div>
        Iniciar Sesion con Google
      </button>
    </div>
  );
}

export default SignIn;
