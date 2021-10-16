import { Suspense } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Spinner from "./Spinner/Spinner";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <Main />
    </Suspense>
  );
}

export default App;
