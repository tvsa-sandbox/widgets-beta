import styled, { css } from "styled-components";
import Icons from "../../accessories/Icons";

const HeaderStylesCv = styled.header(
    ({ theme }) => css`
        display: flex;
        max-width: 1280px;
        height: 80px;
        justify-content: flex-start;
        margin: 0 auto;
        align-items: center;
        background-color: ${theme.colors.back};
    `,
);

const IconHeaderStyles = styled(Icons)(
    ({ theme }) => css`
        position: relative;
        min-width: 65px;
        height: 65px;
        padding: ${theme.space.md};
        fill: ${theme.colors.Dark};

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 250px;
            margin-top: ${theme.space.xl2};
            padding: ${theme.space.zero};
        }
    `,
);

export { HeaderStylesCv, IconHeaderStyles };
