import styled, { css } from "styled-components";
import { Box, Inputs, Button, Anchor, Text, Title, Form, Info } from "../../accessories";

const SignupItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 600px;
        }
    `,
);

const SignupItemContent = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        height: auto;
        margin: ${theme.space.auto};
        padding: ${theme.space.md} ${theme.space.zero};
        border-radius: 5px;
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 600px;
        }
    `,
);

const SignupItemDividerStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        margin: ${theme.space.xxl} ${theme.space.auto};
        text-align: center;
        }
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 580px;
        }
    `,
);

const SignupHeadStyles = styled(Box)(
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

const SignupPrivacyContent = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 300px;
        margin: ${theme.space.md} ${theme.space.auto};
        text-align: left;
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 580px;
        }
    `,
);

const SignupInputStyles = styled(Inputs)(
    ({ theme }) => css`
        width: 100%;
        max-width: 300px;
        height: 50px;
        margin: ${theme.space.md} ${theme.space.auto};
        padding: ${theme.space.zero} ${theme.space.xl};
        ::placeholder {
            font-size: ${theme.fontSizes.fsm};
        }
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 580px;
        }
    `,
);

const SignupButtonStyles = styled(Button)(
    ({ theme }) => css`
        width: 100%;
        max-width: 300px;
        margin: ${theme.space.xl} ${theme.space.auto};
        height: 50px;
        justify-content: center;
        font-size: ${theme.fontSizes.fsm};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 580px;
        }
    `,
);

const SignupItemText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        margin: ${theme.space.zero} ${theme.space.auto};
        text-align: center;
        max-width: 300px;
        position: relative;
        ::before {
            content: "";
            display: block;
            width: 130px;
            height: 1px;
            background: ${theme.colors.gray};
            right: 0;
            top: 50%;
            position: absolute;
        }
        ::after {
            content: "";
            display: block;
            width: 130px;
            height: 1px;
            background: ${theme.colors.gray};
            left: 0;
            top: 50%;
            position: absolute;
        }
    `,
);

const SignupFormStyles = styled(Form)(
    ({ theme }) => css`
        display: block;
        min-width: 300px;
    `,
);

const SignupItemTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
    `,
);

const SignupInfoStyles = styled(Info)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        color: ${theme.colors.graycataloge};
        line-height: ${theme.lineHeights.lsm};
    `,
);

const SignupAnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        cursor: pointer;
        font-size: ${theme.fontSizes.fxs};
        color: ${theme.colors.graycataloge};
        text-decoration: underline;
    `,
);

export {
    SignupItemStyles,
    SignupInputStyles,
    SignupButtonStyles,
    SignupHeadStyles,
    SignupItemText,
    SignupItemTitle,
    SignupAnchorStyles,
    SignupItemDividerStyles,
    SignupFormStyles,
    SignupItemContent,
    SignupPrivacyContent,
    SignupInfoStyles,
};
