import styled from "styled-components";

const ModalMyTrainingStyled = styled.div`
  .modalWrapper {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    padding: 0;
    z-index: 200;
  }

  .modalWrapper.open {
    height: 100vh;
    display: block;
  }

  .modalWrapper.close {
    height: 0;
    display: none;
  }

  .modalBody {
    max-width: 320px;
    background: #f6f7fb;
    height: calc(100vh - 285px);
    text-align: center;
  }

  .modalBackButton {
    border: none;
    background: transparent;
    margin: 26px 0 26px 0;
  }

  .modalBackIcon {
    width: 24px;
    height: 12px;
  }
`;

export default ModalMyTrainingStyled;
