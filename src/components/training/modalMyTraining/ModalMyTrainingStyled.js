import styled from "styled-components";

const ModalMyTrainingStyled = styled.div`
  .modalWrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #000;
    padding: 0;
    tex
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
    background: #F6F7FB;
    max-height: 100%;
  }

  .modalBackButton{
    border: none;
    background: transparent;
    margin-bottom: 26px;
    text-align: start;

  }

  .modalBackIcon{
    width: 24px;
    height: 12px;
  }
`;

export default ModalMyTrainingStyled;
