import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="grid grid-cols-12 bg-sky-950 text-white">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
