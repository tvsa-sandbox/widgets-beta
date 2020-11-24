import styled, { css } from "styled-components";
import { Box, Button } from "../../accessories";

const TabsList = styled.ul(
    ({ theme }) => css`
        list-style: none;
        padding: ${theme.space.md} ${theme.space.md} ${theme.space.zero};
        margin: ${theme.space.base} ${theme.space.zero};
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: solid 1px ${theme.colors.gray};
    `,
);

const Tab = styled.li(
    ({ theme }) => css`
        padding: ${theme.space.sm} ${theme.space.zero};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    `,
);

const TabPaneStyles = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.xl} ${theme.space.zero};
        display: ${props => (props.active ? "flex" : "none")};
        justify-content: center;
        align-items: center;
    `,
);

const TabButton = styled(Button)(
    ({ theme }) => css`
        margin: ${theme.space.zero};
        padding: ${theme.space.zero};
        color: ${props => (props.active ? theme.colors.Interaction : null)};
        font-size: ${theme.fontSizes.fxs};
        &:hover {
            color: ${theme.colors.Interaction};
        }
        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fbase};
        }
    `,
);
export { TabsList, Tab, TabPaneStyles, TabButton };
