import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "@/firebase/firebase.config";


export default function PrivateRoute(Component) {
  return function WrappedComponent(props) {
    const [user, loading, error] = useAuthState(getAuth(app));
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.replace("/login");
      }
    }, [loading, user]);

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return <Component {...props} />;
  };
}
