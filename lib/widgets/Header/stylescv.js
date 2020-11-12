import styled, { css } from "styled-components";

const HeaderStylesCv = styled.header(
    ({ theme }) => css`
        display: flex;
        max-width: 1280px;
        height: 80px;
        justify-content: flex-start;
        margin: 0 auto;
        align-items: center;
        background-color: ${theme.colors.darkfooter};
    `,
);

export { HeaderStylesCv };
