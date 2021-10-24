import styled from "styled-components";

const StatisticFormStyled = styled.form`
  position: relative;
  margin-bottom: 24px;
  .StatisticTitle {
    margin: 0;
    font-weight: 600;
    font-size: 12px;
    line-height: 38px;
    color: ${({ colors }) => colors.primaryText};

    text-transform: uppercase;
  }
  .inputWrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 21px;
  }
  .inputWrapper :not(:last-child) {
    margin-right: 20px;
  }
  .statisticFormLabel {
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 110px;
    font-weight: 500px;
    font-size: 11px;
    line-height: 20px;
    color: ${({ colors }) => colors.secondaryText};
  }
  .statisticInput {
    padding: 0 0 0 13px;
    height: 42px;
    font-size: 14px;

    color: ${({ colors }) => colors.primaryText};
    background: ${({ colors }) => colors.primaryBg};
    border: 1px solid ${({ colors }) => colors.icons};

    outline-color: ${({ colors }) => colors.accent};
  }

  .statisticBtn {
    width: 171px;
    height: 42px;
    font-weight: 500;
    font-size: 14px;
    color: ${({ colors }) => colors.secondaryBg};
    background: ${({ colors }) => colors.accent};
    border: none;
    cursor: pointer;

    &:hover,
    :focus {
      background-color: ${({ colors }) => colors.accentActive};
    }
  }

  .InputErrorMassege {
    position: absolute;
    font-weight: 500;
    top: 100%;
    font-size: 14px;
    color: ${({ colors }) => colors.accent};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;

    .StatisticTitle {
      font-size: 14px;
      margin-bottom: 10px;
    }
    .formWrapper {
      display: flex;
      align-items: flex-end;
    }
    .inputWrapper {
      margin: 0 30px 0 0;
    }
    .statisticBtn {
      width: 240px;
    }
    .InputErrorMassege {
      top: 30%;
    }
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 24px;

    .StatisticTitle {
      font-size: 12px;
      margin-bottom: 0;
    }
    .formWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .inputWrapper {
      margin: 0 0 20px 0;
    }

    .statisticBtn {
      width: 240px;
    }
    .InputErrorMassege {
      top: 100%;
    }
  } ;
`;

export default StatisticFormStyled;
