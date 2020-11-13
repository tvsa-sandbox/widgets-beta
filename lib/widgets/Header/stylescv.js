import styled, { css } from "styled-components";

const HeaderStylesCv = styled.header(
    ({ theme }) => css`
        display: flex;
        max-width: 1280px;
        height: 80px;
        justify-content: flex-start;
        margin:${theme.space.zero} ${theme.space.auto} ;
        padding:${theme.space.xxl};
        padding-bottom:${theme.space.zero};
        align-items: center;
        background-color: ${theme.colors.back};
    `,
);

export { HeaderStylesCv };
