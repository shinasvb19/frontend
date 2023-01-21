import React from "react";

import { Routes, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import LandingPage from "./pages/LandingPage";
import PostsPage from "./pages/PostsPage";
import ProfilePage from "./pages/ProfilePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RequireAuth from "./features/auth/RequireAuth";
import Layout from "./components/Layout";
import AllProfilePage from "./pages/AllProfilePage";
import OtpVerify from "./pages/OtpVerify";
import Chat from "./pages/chat/Chat";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="Signup" element={<SignUp />} />
        <Route path="otp/verify/:mobile" element={<OtpVerify />} />
        <Route element={<RequireAuth />}>
          <Route path="jobs" element={<Jobs />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="allprofile/:id" element={<AllProfilePage />} />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
x;
