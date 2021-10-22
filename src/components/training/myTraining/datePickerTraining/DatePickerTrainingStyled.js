import styled from "styled-components";

const DatePickerTrainingStyled = styled.div`
  .datePickerTraining {
    font-size: 14px;
    line-height: 2.71;

    color: ${({ colors }) => colors.trainingLabel};
    padding-left: 47px;
    width: 270px;
    height: 42px;
    margin-bottom: 20px;
    border: 1px solid ${({ colors }) => colors.icons};
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
  .react-datepicker__input-container {
    background: background: #F6F7FB;;
  }
`;

export default DatePickerTrainingStyled;
