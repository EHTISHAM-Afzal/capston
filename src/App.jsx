

import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="w-full  bg-gradient-to-tr from-indigo-300 to-indigo-500">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
