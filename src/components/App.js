// import AuthPage from "../pages/authPage/AuthPage";
import Container from "../components/container/Container";
import AuthPage from "../pages/authPage/AuthPage";
import LibraryPage from "../pages/libraryPage/LibraryPage";
import LibraryEmpty from "./libraryEmpty/LibraryEmpty";

function App() {
  return (
    <>
      {/* <LibraryEmpty /> */}
      {/* <Header /> */}
      <Container>
        {/* <Main /> */}
        <LibraryPage />
      </Container>
      {/* <Statistic /> */}
      {/* <AuthPage /> */}
    </>
  );
}

export default App;
