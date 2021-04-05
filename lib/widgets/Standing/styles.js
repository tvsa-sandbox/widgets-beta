import styled, { css } from "styled-components";
import { Box, Button, Text, Title } from "../../accessories";

const StandingStyles = styled.section(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto};
        background: ${theme.colors.Light};
        max-width: 1024px;

    `,
);

const StandingBoxHeader = styled(Box)(
    ({ theme }) => css`
        display: flex;
        width: 100%;
        max-width:1024px;
        background: ${theme.colors.gray2};
        height: auto;   
        flex-direction: column;

        @media (min-width: ${theme.breakpoints.xl}) {
            flex-direction: inherit;
        }
    `,
);

const StandingHeaderTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fbase};
        font-weight: bold;
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            justify-content: start;
            padding-left: ${theme.space.md};
            font-size: ${theme.fontSizes.flg};
        }
    `,
);

const StandingHeaderSwitch = styled(Box)(
    ({ theme }) => css`
        display: flex;
        width: 100%;
        margin: ${theme.space.zero} ${theme.space.auto};
        height: 40px;

    `,
);

const StandingBoxData = styled(Box)(
    () => css`
       display: flex;
       width: 100%;
       align-items: flex-start;
    `,
);

const StandingSwitchButtonActive = styled(Button)(
    ({ theme }) => css`
        font-weight: bold;
        width: 100%;
        justify-content: center;
        font-size: ${theme.fontSizes.fbase};
        color: ${theme.colors.Interaction};

        &:hover{
            opacity: .5;
        }
    `,
);

const StandingSwitchButtonInactive = styled(StandingSwitchButtonActive)(
    () => css`
        opacity: .5;
    `,
);



const StandingTopCaption = styled(Text)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        height: 50px;
        justify-content: center;
        width: 50px;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 80px;
        }
    `,
);

export {
    StandingStyles,
    StandingBoxHeader,
    StandingHeaderTitle,
    StandingHeaderSwitch,
    StandingSwitchButtonActive,
    StandingSwitchButtonInactive,
    StandingTopCaption,
    StandingBoxData,
};
