import { useEffect, useState } from "react";
import AppRouter from "@/components/Router";
import { authService } from "@/fbase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { User } from "@/models/user";

interface UserObj extends User {
  updateProfile: (args: { displayName?: string | null; photoURL?: string | null }) => void;
}

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState<UserObj | null>(null);

  const refreshUser = () => {
    const user = authService.currentUser;
    if (user === null) return;
    setUserObj({
      uid: user.uid,
      displayName: user.displayName!,
      updateProfile: (args) => updateProfile(user, args),
    });
  };

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setUserObj({
          uid: user.uid,
          displayName: user.displayName!,
          updateProfile: (args) => updateProfile(user, args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  return <>{init ? <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(userObj)} userObj={userObj!} /> : "initalizing..."}</>;
}

export default App;
