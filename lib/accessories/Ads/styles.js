import styled, { css } from "styled-components";

const AdsCommon = ({ theme }) => css`
    margin: ${theme.space.lg};
    box-sizing: borderbox;
    align-content: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    &::before {
        content: "PUBLICIDAD";
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        font-family: sans-serif;
        justify-content: center;
        width: 100%;
        height: 20px;
        color: gray;
    }
`;

const AdsStyles = styled("div")(AdsCommon);

export default AdsStyles;
