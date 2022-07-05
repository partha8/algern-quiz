import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, QuestionPage, QuizCategory, Results } from "./pages";
import { Footer, Navbar, RuleRouting } from "./components";

const App = () => {
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
      <Router>
        <header className="header">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<QuizCategory />} />
          <Route element={<RuleRouting />}>
            <Route path="/quiz/:quizId" element={<QuestionPage />} />
          </Route>
          <Route path="/results" element={<Results />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
