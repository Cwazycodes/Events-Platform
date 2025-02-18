import React from "react";
import { auth, googleProvider } from "../services/firebase";
import { signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed in!");
    } catch (error) {
      console.error("Sign-in failed", error);
    }
  };

  return (
    <div>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
