import styled, { css } from "styled-components";
import { Box, Text } from "../../accessories";

const TableItemStyles = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.Secondary};
        border-bottom: 1px solid ${theme.colors.gray};
        display: flex;
        padding-left: 140px;
        width: auto;

        @media (min-width: ${theme.breakpoints.xl}) {
            padding-left: ${theme.space.zero};
        }
    `,
);

const TableItemTeam = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        font-weight: bold;
        height: 50px;
        padding-left: ${theme.space.md};
        position: fixed;
        width: 140px;
        background: ${theme.colors.Light};
        left: 0px;
        background: ${theme.colors.Secondary};

        @media (min-width: ${theme.breakpoints.xl}) {
            position: relative;
        }
    `,
);

const TableItemLogo = styled(Box)(
    () => css`
        display: flex;
        height: 40px;
        max-width: 40px;
        border-radius: 20px;
        overflow: hidden;
    `,
);

const TableItemName = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        background: transparent;
        padding-left: ${theme.space.md};
    `,
);

const TableItemNumber = styled(Text)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        height: 50px;
        font-size: ${theme.fontSizes.fxs};
        width: 50px;
        justify-content: center;
        background: transparent;
    `,
);

export {
    TableItemStyles,
    TableItemTeam,
    TableItemLogo,
    TableItemName,
    TableItemNumber,
};
