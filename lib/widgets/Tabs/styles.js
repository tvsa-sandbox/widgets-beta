import styled, { css } from "styled-components";
import { Box, Button } from "../../accessories";

const TabsList = styled.ul(
    ({ theme }) => css`
        list-style: none;
        padding: ${theme.space.md};
        margin: ${theme.space.xl} ${theme.space.zero};
        display: flex;
        justify-content: center;
        align-items: center;
    `,
);

const Tab = styled.li(
    ({ theme }) => css`
        padding: ${theme.space.sm};
        display: flex;
        justify-content: center;
        align-items: center;
    `,
);

export { TabsList, Tab };
