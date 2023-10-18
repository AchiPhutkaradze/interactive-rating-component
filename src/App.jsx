import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Container from "./components/Container";
import SecondContainer from "./components/SecondContainer";

function App() {
  const [button, setButton] = useState(0);
  const [page, setPage] = useState("form");
  return (
    <>
      {page === "form" && (
        <Container setPage={setPage} button={button} setButton={setButton} />
      )}
      {page === "answer" && (
        <SecondContainer button={button} setButton={setButton} />
      )}
    </>
  );
}

export default App;
