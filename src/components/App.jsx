import { useEffect, useState } from "react";
import AppRouter from "@/components/Router";
import { authService } from "@/fbase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "initalizing..."}
      <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </>
  );
}

export default App;
