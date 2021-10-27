import styled from "styled-components";

const BackToTopButton = styled.button`
  position: fixed;
  padding: 12px 14px;
  bottom: 20px;
  right: 20px;
  background: #fff;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #ff6b08;
  box-shadow: 0 5px 10px #ccc;
  z-index: 99;

  .arrowIcon {
    transform: rotate(-90deg);
    fill: #ff6b08;
  }

  @media screen and (min-width: 768px) {
    & {
      display: none;
    }
  }
`;

export default BackToTopButton;
