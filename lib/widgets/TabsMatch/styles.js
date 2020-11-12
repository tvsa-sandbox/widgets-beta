import styled, { css } from "styled-components";
import { Box, Button } from "../../accessories";

const TabsMatchStyles = styled.section(
    ({ theme }) => css`

    justify-content: flex-start;
    overflow-x: scroll;
    margin: ${theme.space.zero}; 
    overflow-y: hidden;
   max-width: 1440px;
    margin: auto;
    min-height: 98px;
    display: flex;

    @media (min-width: ${theme.breakpoints.xl}) {
        overflow-x:  hidden;
        margin: ${theme.space.zero}  ${theme.space.xl2}  ${theme.space.xl2} ;
        justify-content: center;
        }
    `,
);

const TabsMatchBoxStyles = styled(Box)(
    ({ theme }) => css`
        display: flex;
        min-height: 27px;
        width: 100%;
        justify-content: flex-start;

                @media (min-width: ${theme.breakpoints.xl}) {
                justify-content: center;

        }
    `,
);

const TabsMatchButtonStyles = styled(Button)(
    ({ theme }) => css`
        cursor:pointer;
        text-transform:uppercase;
        justify-content:center;
        color:${theme.colors.Dark};
        width:auto;
        min-width: 125px;
        font-weight: bold;
        min-height: 27px;
        align-items: center;
        margin: ${theme.space.md} ${theme.space.zero};
        padding: ${theme.space.md};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lsm};
        border-color: ${theme.colors.gray2};
        &:hover {
            opacity: 0.8;
        }
                `,
);

const TabsMatchButtonActiveStyles = styled(Button)(
    ({ theme }) => css`
        cursor:pointer;
        text-transform:uppercase;
        justify-content:center;
        color:${theme.colors.Dark};
        width:auto;
        min-width: 125px;
        font-weight: bold;
        min-height: 27px;
        align-items: center;
        margin: ${theme.space.md} ${theme.space.zero};
        padding: ${theme.space.md};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lsm};
                `,
);

const TabsMatchButtonContainerStyles = styled.div(
    ({ theme }) => css`
        width: auto;
        min-width: 125px;
        display: inline-flex;
        max-width: 150px;
        flex: 0 0 100%;
        text-align: center;
        max-height: 60px;
        overflow: hidden;
        margin: ${theme.space.zero} ${theme.space.xs};
        justify-content: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.zero} ${theme.space.sm};

        }
        `,
);


export {
    TabsMatchStyles,
    TabsMatchBoxStyles,
    TabsMatchButtonStyles,
    TabsMatchButtonContainerStyles,
    TabsMatchButtonActiveStyles,
};
