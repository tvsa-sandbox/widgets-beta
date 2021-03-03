import styled, { css } from "styled-components";
import { Box, Button, Text } from "../../accessories";

const TableStyles = styled.section(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto};
    `,
);

const TableBoxHeader = styled(Box)(
    ({ theme }) => css`
        display: flex;
        width: auto;
        max-width: 590px;
        margin: ${theme.space.zero} ${theme.space.auto};
        background: ${theme.colors.Secondary};
        height: 70px;
        flex-direction: column;

        @media (min-width: ${theme.breakpoints.xl}) {
            flex-direction: inherit;
            height: 50px;
        }
    `,
);

const TableHeaderTitle = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fbase};
        font-weight: bold;
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 50%;
            justify-content: start;
            padding-left: ${theme.space.md};
        }
    `,
);

const TableHeaderSwitch = styled(Box)(
    ({ theme }) => css`
        display: flex;
        width: 100%;
        margin: ${theme.space.zero} ${theme.space.auto};
        background: ${theme.colors.Secondary};
        height: 40px;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 50%;
        }
    `,
);

const TableSwitchButtonActive = styled(Button)(
    ({ theme }) => css`
        font-weight: bold;
        background: ${theme.colors.Secondary};
        width: 100%;
        justify-content: center;
        font-size: ${theme.fontSizes.fbase};
        color: ${theme.colors.Dark};
    `,
);

const TableSwitchButtonInactive = styled(Button)(
    ({ theme }) => css`
        font-weight: bold;
        background: ${theme.colors.Secondary};
        width: 100%;
        justify-content: center;
        font-size: ${theme.fontSizes.fbase};
        color: ${theme.colors.Dark};
        opacity: .5;
    `,
);

const TableBoxTop = styled(Box)(
    ({ theme }) => css`
        border-bottom: 2px solid ${theme.colors.Interaction};
        display: flex;
        padding-left: 140px;
        width: auto;

        @media (min-width: ${theme.breakpoints.xl}) {
            padding-left: ${theme.space.zero};
        }
    `,
);

const TableTopTeam = styled(Text)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        font-weight: bold;
        height: 50px;
        padding-left: ${theme.space.md};
        position: fixed;
        width: 140px;
        left: 0px;
        background: ${theme.colors.Light};

        @media (min-width: ${theme.breakpoints.xl}) {
            position: relative;
        }
    `,
);

const TableTopCaption = styled(Text)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        height: 50px;
        justify-content: center;
        width: 50px;
    `,
);

export {
    TableStyles,
    TableBoxHeader,
    TableHeaderTitle,
    TableHeaderSwitch,
    TableSwitchButtonActive,
    TableSwitchButtonInactive,
    TableBoxTop,
    TableTopTeam, 
    TableTopCaption,
};
