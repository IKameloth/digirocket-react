import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./services/privateRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Account from "./pages/Account";
import Home from "./pages/Home";
import VerifyEmailPage from "./pages/VerifyEmail";

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
            <Route path="*" element={<NotFound />} />

            {/* Private routes */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/account" element={<Account />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
