import { Route, Routes, Navigate } from "react-router-dom";
import Home from "@/routes/Home";
import Auth from "@/routes/Auth";
import Navigation from "./Navigation";
import Profile from "@/routes/Profile";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
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
