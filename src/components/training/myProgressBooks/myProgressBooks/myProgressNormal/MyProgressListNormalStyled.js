import styled from "styled-components";

const MyProgressListNormalStyled = styled.section`
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
  border-bottom: 1px solid #e0e5eb;
  @media screen and (min-width: 1280px) {
    width: 886px;
    height: 219px;
  }
  .myGoalListNorm_ListHead {
    @media screen and (min-width: 768px) {
      display: flex;
      list-style: none;
      border-top: 1px solid #e0e5eb;
      padding-left: 0;
      margin: 0;
    }
  }
  .myGoalListNorm_item {
    color: ${({ colors }) => colors.secondaryText};
    font-size: 14px;
    font-weight: 500;
    line-height: 2.7;
  }
  .myGoalListNorm_item:nth-child(1) {
    margin-right: 171px;
    @media screen and (min-width: 1280px) {
      margin-right: 269px;
    }
  }
  .myGoalListNorm_item:nth-child(2) {
    margin-right: 146px;
    @media screen and (min-width: 1280px) {
      margin-right: 185px;
    }
  }
  .myGoalListNorm_item:nth-child(3) {
    margin-right: 69px;
    @media screen and (min-width: 1280px) {
      margin-right: 142px;
    }
  }
  .myGoalListNorm_ListBooks {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    border-top: 1px solid #e0e5eb;
    @media screen and (min-width: 768px) {
      max-height: 235px;

      overflow-y: auto;
      scrollbar-width: none;
      scrollbar-color: #b1b5c2 #e7e4e4;

      ::-webkit-scrollbar {
        width: 7px;
      }

      ::-webkit-scrollbar-track {
        background: #e7e4e4;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #b1b5c2;
        border-radius: 0px;
        border: 3px none #ffffff;
      }
      @media screen and (min-width: 1280px) {
        max-height: 181px;
      }
    }
  }
  .myGoalListNorm_MoreBooksContainer {
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 33px;
    /* border-bottom: 1px solid #e0e5eb; */
  }
  .myGoalListNorm_SvgBook {
    width: 22px;
    height: 17px;
    margin-right: 17px;
  }
  .myGoalListNorm_Points {
    height: 22px;
  }
`;

export default MyProgressListNormalStyled;
