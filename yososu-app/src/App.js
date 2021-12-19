import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "../src/pages/Main";
import GlobalStyle from "./GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [windowSize, setResizeWindow] = useState(window.innerWidth);

  const handleResize = () => {
    setResizeWindow(window.innerWidth);
  };

  useEffect(() => {
    console.log(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main windowSize={windowSize} />
      <Footer windowSize={windowSize} />
    </div>
  );
}

export default App;
