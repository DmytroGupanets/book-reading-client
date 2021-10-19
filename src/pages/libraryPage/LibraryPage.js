import React from "react";
import Library from "../../components/library/Library";
import Container from "../../components/container/Container";
import LibraryEmpty from "../../components/libraryEmpty/LibraryEmpty";
import AddBookModal from "../../components/addBookModal/AddBookModal";

const LibraryPage = () => {
  return (
    <Container>
      <LibraryEmpty />
      <AddBookModal />
      <Library />
    </Container>
  );
};

export default LibraryPage;
