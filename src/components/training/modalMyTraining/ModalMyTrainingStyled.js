import styled from "styled-components";

const ModalMyTrainingStyled = styled.div`
  .modalWrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #000;
  }
  .modalWrapper.open {
    height: 100%;
    display: block;
  }

  .modalWrapper.close {
    height: 0;
    display: none;
  }
  .modalBody {
    max-width: 320px;
    background: white;
    max-height: 100%;
  }
`;

export default ModalMyTrainingStyled;
