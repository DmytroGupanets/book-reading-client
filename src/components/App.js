// import AuthPage from "../pages/authPage/AuthPage";
import { Suspense } from "react";
import Container from "../components/container/Container";
import Header from "./header/Header";
import Main from "./main/Main";

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading</h2>}>
        <Header />
        <Container>
          <Main />
        </Container>
      </Suspense>
    </>
  );
}

export default App;
