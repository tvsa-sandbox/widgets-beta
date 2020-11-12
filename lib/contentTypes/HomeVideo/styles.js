import styled, { css } from "styled-components";

const HomeVideoGrid = styled.section(
    ({ theme }) => css`
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
        max-width: 100%;
        margin: ${theme.space.xxl} ${theme.space.auto};

        @media (min-width: ${theme.breakpoints.md}) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;
        }
        @media (min-width: ${theme.breakpoints.lg}) {
            grid-template-columns: repeat(4, 1fr);
        }
    `,
);
const PageStyles = styled.section(
    ({ theme }) => css`
        min-height: 100vh;
        position: relative;
        max-width: 1280px;
        margin: ${theme.space.auto};
    `,
);
export { HomeVideoGrid, PageStyles };
