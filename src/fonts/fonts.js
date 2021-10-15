import { createGlobalStyle } from "styled-components";

import abrilFatFaceNormal from "./AbrilFatface-Regular.ttf";

import montserratLight from "./Montserrat-Light.ttf";
import montserratRegular from "./Montserrat-Regular.ttf";
import montserratMedium from "./Montserrat-Medium.ttf";
import montserratSemiBold from "./Montserrat-SemiBold.ttf";

import openSansBold from "./OpenSans-Bold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Abril Fatface';
        src: local('Abril Fatface'), local('AbrilFatface'),
        url(${abrilFatFaceNormal}) format('truetype');
        font-weight: 400;
        font-style: normal;
    };

    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(${montserratLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(${montserratRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(${montserratMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(${montserratSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Open Sans';
        src: local('Open Sans'), local('OpenSans'),
        url(${openSansBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
`;
