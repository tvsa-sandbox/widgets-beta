import styled, { css } from "styled-components";
import { Box, Inputs, Button, Anchor, Text, Title } from "../../accessories";

const LoginItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 360px;
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 600px;
        }
    `,
);

const LoginItemDividerStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        margin: ${theme.space.xxl} ${theme.space.auto};
        text-align: center;
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 580px;
        }
    `,
);

const LoginHeadStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        justify-content: space-between;
        margin: ${theme.space.xxl} ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 580px;
        }
    `,
);

const LoginInputStyles = styled(Inputs)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        height: 50px;
        margin: ${theme.space.xl} ${theme.space.auto};
        padding: ${theme.space.zero} ${theme.space.xl};
        ::placeholder {
            font-size: ${theme.fontSizes.fsm};
        }
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 580px;
        }
    `,
);

const LoginButtonStyles = styled(Button)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        margin: ${theme.space.xl} ${theme.space.auto};
        height: 50px;
        justify-content: center;
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 580px;
        }
    `,
);

const LoginItemText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
    `,
);

const LoginItemTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
    `,
);

const LoginAnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        cursor: pointer;
    `,
);

export {
    LoginItemStyles,
    LoginInputStyles,
    LoginButtonStyles,
    LoginHeadStyles,
    LoginItemText,
    LoginItemTitle,
    LoginAnchorStyles,
    LoginItemDividerStyles,
};
