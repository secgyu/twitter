import { Route, Routes, Navigate } from "react-router-dom";
import Home from "@/routes/Home";
import Auth from "@/routes/Auth";
import Navigation from "./Navigation";
import Profile from "@/routes/Profile";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <div>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home userObj={userObj} />} />
            <Route path="/profile" element={<Profile refreshUser={refreshUser} userObj={userObj} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default AppRouter;
