import styled from "styled-components";

const MyTrainingStyled = styled.div`
  .trainingTitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.9;
    /* identical to box height, or 190% */
    padding: 11px 47px;
    margin-bottom: 20px;
    text-align: center;

    color: #ffffff;
    background: #b1b5c2;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  }
  .datePickerTraining {
    font-size: 14px;
    line-height: 2.71;

    color: #a6abb9;
    padding-left: 47px;
    width: 270px;
    height: 42px;
    margin-bottom: 20px;
    border: 1px solid #a6abb9;
  }
  .datePickerWrapper {
    position: relative;
  }
  .datePickerIcon {
    position: absolute;
    left: 17px;
    top: 11px;
    width: 17px;
    height: 17px;
  }
  .datePickerIconPolygon {
    position: absolute;
    right: 18px;
    top: 17px;
    width: 13px;
    height: 7px;
  }
  .navLibrarySvg {
    width: 22px;
    height: 18px;
  }
  .iconDelete {
    width: 14px;
    height: 18px;
  }
  .selectedBooksListWrapper {
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
`;

export default MyTrainingStyled;
