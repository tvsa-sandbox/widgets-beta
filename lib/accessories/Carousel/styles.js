import styled, { css } from "styled-components";
import Icons from "../Icons";
import Button from "../Button";
import Image from "../Image/styles";

const CarouselStyles = styled.div(
    ({ theme }) => css`
        height: 100%;
        max-width: 1440px;
        margin: auto;
        position: relative;
        width: 100%;
    `,
);

const Track = styled.div(
    ({ theme }) => css`
        display: flex;
        height: 100%;
        max-width: 1440px;
        overflow: hidden;
        margin: ${theme.space.auto};
    `,
);

const Thumbnails = styled.div(
    ({ theme }) => css`
        display: flex;
        margin: ${theme.space.auto};
        overflow-y: hidden;
        overflow-x: scroll;
        width: 90%;

        @media (max-width: ${theme.breakpoints.md}) {
            width: 100%;
        }
    `,
);

const ButtonStylesLeft = styled(Button)(
    ({ theme }) => css`
        position: absolute;
        left: 0;
        display: flex;
        top: 0%;
        height: 100%;
        margin: ${theme.space.zero};
        z-index: 5;

        @media (max-width: ${theme.breakpoints.md}) {
            display: none;
        }
    `,
);

const ButtonStylesRight = styled(Button)(
    ({ theme }) => css`
        position: absolute;
        right: 0;
        top: 0%;
        height: 100%;
        z-index: 5;

        @media (max-width: ${theme.breakpoints.md}) {
            display: none;
        }
    `,
);

const IconStylesRight = styled(Icons)(
    ({ theme }) => css`
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        fill: #ffffff;
        width: 75px;
        right: 0px;
    `,
);

const IconStylesLeft = styled(Icons)(
    ({ theme }) => css`
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        fill: #ffffff;
        width: 75px;
        left: 8px;
    `,
);

const CarouselImageStyles = styled.image(
    ({ theme }) => css`
        ${Image}
        position: relative;
        width: auto;
        height: 40px;
    `,
);

export {
    CarouselStyles,
    Track,
    Thumbnails,
    ButtonStylesLeft,
    ButtonStylesRight,
    IconStylesRight,
    IconStylesLeft,
    CarouselImageStyles,
};
