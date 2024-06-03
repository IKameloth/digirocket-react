import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="underline font-bold text-blue-900">Tailwind init</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
