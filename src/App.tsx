import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Profile,
  QuestionPage,
  QuizCategory,
  Results,
  Signup,
} from "./pages";
import { Footer, Navbar, RequireAuth, RuleRouting } from "./components";
import { useAuthObserver } from "./hooks";
import { useAppSelector } from "./redux/hook";

const App = () => {
  useAuthObserver();
  const {} = useAppSelector((store) => store?.auth);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <header className="header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<QuizCategory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<RequireAuth />}>
          <Route element={<RuleRouting />}>
            <Route path="/quiz/:quizId" element={<QuestionPage />} />
          </Route>
          <Route path="/results" element={<Results />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
