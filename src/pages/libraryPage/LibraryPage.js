import React from "react";
import Library from "../../components/library/Library";
import Container from "../../components/container/Container";
import LibraryEmpty from "../../components/libraryEmpty/LibraryEmpty";

const LibraryPage = () => {
  return (
    <Container>
      <LibraryEmpty />
      <Library />
    </Container>
  );
};

export default LibraryPage;
