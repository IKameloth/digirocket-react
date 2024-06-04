import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    document.body.classList.add(
      "relative",
      "h-full",
      "font-sans",
      "antialiased"
    );

    return () => {
      document.body.classList.remove(
        "relative",
        "h-full",
        "font-sans",
        "antialiased"
      );
    };
  }, []);

  return (
    <>
      <main className="relative flex flex-col main-h-screen">
        <Navbar />
        <div className="flex-grow flex-1">
          <Home />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
