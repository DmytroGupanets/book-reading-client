import styled from "styled-components";

export const LibraryEmptyStyled = styled.form`

    .aboutBook {
        display: block;
        font-weight: 500;
        font-size: 14px;
        line-height: 2.7;
        color: #898F9F;
    }
    .aboutBookInput {
        display: block;
        outline:none;
        width: 270px;
        height: 42px;
        font-weight: 400;
        font-size: 14px;
        line-height: 2.7;
        color:#242A37;
        background-color: #F6F7FB;
        padding-left: 13px;
        box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
        margin-bottom: 10px;
        border: none;
    }

    .aboutBookInput:focus {
        background-color: white;
    }

    .addButton {
        display: block;
        width: 171px;
        height: 42px;
        font-weight: 500;
        font-size: 14px;
        line-height: 2.7;
        margin: 0 auto;
        border: 1px solid #242A37;
    }

    @media screen and (min-width: 768px) {
    .aboutBookInput-title {
      width: 594px;
    }
    .aboutBookContainer {
        display: flex;
    }
    .aboutBookInput-author {
        width: 250px;
    }
    /* .aboutBookInput {
        width: 145px;
    } */
    .aboutBookInput:not(:last-child) {
        margin-right: 27px;
    }
  }
`;