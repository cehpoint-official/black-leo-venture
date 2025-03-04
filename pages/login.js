import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import app from "../firebase/firebase.config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from "next/router"; // Import the Router object from the next/router library

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const auth = getAuth(app)
  const router = useRouter(); // Initialize the Router object

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect the user to the private admin page on successful login
      router.push("/jskjg"); // Use the Router object to push the route to the private admin page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl mb-8">Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button
          type="submit"
          className="bg-orange-500 px-4 py-2 mt-4 rounded-lg text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}
