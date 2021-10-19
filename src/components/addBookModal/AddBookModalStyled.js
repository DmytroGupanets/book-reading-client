import styled from "styled-components";

export const AddBookModalStyled = styled.div`

width: 270px;
height: 425px;
  .step {
    font-weight: 600;
    font-size: 18px;
    line-height: 2.1;
    margin-bottom: 5px;
  }  
  .stepContainer {
      display: flex;
  }
  .stepOne, .stepTwo {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2;
    margin-bottom: 8px;
  }
  .aboutStep {
      display: flex;
  }
  .aboutStepOne, .aboutStepTwo {
    width: 190px;
    height: 51px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    color: #898F9F;
  }
.aboutStepOne {
   margin-bottom: 20px;
}
.aboutStepTwo {
    margin-bottom: 25px;
}
  .btnOk {
      display: block;
      width: 127px;
      height: 40px;
      background: #D15807;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      border: none;
      cursor: pointer;
      font-weight: 500;
      font-size: 14px;
      line-height: 2.7;
      color: white;
      margin: 0 auto;
  }
  .librarySvg {
    width: 22px;
    height: 18px;
    margin-right: 9px;
  }
  .flagSvg {
      width: 15px;
      height: 17px;
      margin-right: 16px;
  }
  .vectorSvg {
      width: 10px;
      height: 12px;

      margin-right: 9px;
      margin-left: 46px; 
  }
`