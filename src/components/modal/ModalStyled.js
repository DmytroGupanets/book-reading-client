import styled from "styled-components";

const ModalStyled = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
  }

  .modal {
    position: fixed;
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 200;
  }
`;

export default ModalStyled;
