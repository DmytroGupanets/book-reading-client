import { Suspense } from "react";
import Container from "../components/container/Container";
import Header from "./header/Header";
import Main from "./main/Main";
import Spinner from "./Spinner/Spinner";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <Container>
        <Main />
      </Container>
    </Suspense>
  );
}

export default App;
