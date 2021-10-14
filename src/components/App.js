import AuthPage from "../pages/authPage/AuthPage";
import Container from "../components/container/Container";
import LibraryEmpty from "./libraryEmpty/LibraryEmpty";

function App() {
  return (
    <Container>
      <AuthPage />
      <LibraryEmpty />
    </Container>
  );
}

export default App;
