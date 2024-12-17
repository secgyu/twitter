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
            <Route
              path="/"
              element={
                <div
                  style={{
                    maxWidth: 890,
                    width: "100%",
                    margin: "0 auto",
                    marginTop: 80,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Home userObj={userObj} />
                </div>
              }
            />
            <Route
              path="/profile"
              element={
                <div
                  style={{
                    maxWidth: 890,
                    width: "100%",
                    margin: "0 auto",
                    marginTop: 80,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Profile refreshUser={refreshUser} userObj={userObj} />
                </div>
              }
            />
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
