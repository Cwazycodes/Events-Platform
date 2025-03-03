import React from "react";
import { auth, googleProvider, signInWithPopup } from "../services/firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("✅ Signed in as:", result.user.email);
      navigate("/staff-dashboard");
    } catch (error) {
      console.error("❌ Sign-in error:", error);
    }
  };

  return (
    <div className="signin-container">
        <h1>Staff Sign In</h1>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
);

};

export default SignIn;
