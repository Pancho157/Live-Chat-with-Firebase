import React from "react";
import { auth } from "../../bbddConnection/BBDDConnection";
import { ImExit } from "react-icons/im";
import "./styles/SignOut.css";

function SignOut() {
  return (
    <div>
      <button onClick={() => auth.signOut()} className="singOut--button">
        Cerra Sesion <ImExit />
      </button>
    </div>
  );
}

export default SignOut;
