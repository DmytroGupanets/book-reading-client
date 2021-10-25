import styled from "styled-components";

const MyProgressListNormalStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 50px;
  @media screen and (min-width: 1280px) {
    margin-top: 25px;
    margin-bottom: 40px;
  }
  font-family: "Montserrat", sans-serif;
  .goalListNorm_List {
    @media screen and (min-width: 768px) {
      margin-top: 26px;
      list-style: none;
      display: flex;
      border-top: 1px solid #e0e5eb;
      border-bottom: 1px solid #e0e5eb;
    }
    .goalListNorm_List__Item:nth-child(1) {
      margin-right: 234px;
      @media screen and (min-width: 1280px) {
        margin-right: 269px;
      }
    }
    .goalListNorm_List__Item:nth-child(2) {
      margin-right: 168px;
      @media screen and (min-width: 1280px) {
        margin-right: 185px;
      }
    }
    .goalListNorm_List__Item:nth-child(3) {
      margin-right: 47px;
      @media screen and (min-width: 1280px) {
        margin-right: 73px;
      }
    }
  }
  .goalListNorm_List__Item {
    color: ${({ colors }) => colors.secondaryText};
    font-size: 14px;
    font-weight: 500;
    line-height: 2.7;
  }
  .goalListNorm_Svg {
    width: 22px;
    height: 17px;
    margin-right: 17px;
  }
  .goalListNorm_EmptyContainer {
    padding: 22px 0;
    border-bottom: 1px solid #e0e5eb;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (min-width: 768px) {
      overflow-y: scroll;
      scrollbar-width: none;
      scrollbar-color: #b1b5c2 #e7e4e4;

      ::-webkit-scrollbar {
        width: 5px;
      }

      ::-webkit-scrollbar-track {
        background: #e7e4e4;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #b1b5c2;
        border-radius: 0px;
        border: 3px none #ffffff;
      }
    }
    @media screen and (min-width: 1280px) {
      height: 1px;
      padding: 33px 0;
    }
  }
`;

export default MyProgressListNormalStyled;
