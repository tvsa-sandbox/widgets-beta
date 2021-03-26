import styled, { css } from "styled-components";
import { Box, Inputs, Button, Anchor, Text, Title, Form, Info } from "../../accessories";

const AuthenticationItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 600px;
        }
    `,
);

const AuthenticationItemContent = styled(Box)(
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

const AuthenticationItemCode = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 300px;
        height: auto;
        margin: ${theme.space.xl} ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 600px;
        }
    `,
);

const AuthenticationHeadStyles = styled(Box)(
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

const AuthenticationTextContent = styled(Box)(
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

const AuthenticationInputStyles = styled(Inputs)(
    ({ theme }) => css`
        width: 100%;
        max-width: 50px;
        height: 50px;
        padding: ${theme.space.zero} ${theme.space.xl};
        ::placeholder {
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

const AuthenticationFormStyles = styled(Form)(
    ({ theme }) => css`
        min-width: 300px;
    `,
);

const AuthenticationButtonStyles = styled(Button)(
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

const AuthenticationItemText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        margin: ${theme.space.zero} ${theme.space.auto};
        text-align: left;
        max-width: 300px;
        position: relative;
        line-height: ${theme.lineHeights.lbase};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 580px;
        }
    `,
);

const AuthenticationItemTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
    `,
);

const AuthenticationPrivacyContent = styled(Box)(
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

const AuthenticationAnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        cursor: pointer;
        font-size: ${theme.fontSizes.fxs};
        color: ${theme.colors.graycataloge};
        text-decoration: underline;
    `,
);

const AuthenticationInputsBox = styled(Box)(
    ({ theme }) => css`
        justify-content: space-between;
        max-width: 300px;
        margin: auto;
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 580px;
            justify-content: space-evenly;
        }
    `,
);
export {
    AuthenticationItemStyles,
    AuthenticationInputStyles,
    AuthenticationButtonStyles,
    AuthenticationHeadStyles,
    AuthenticationItemText,
    AuthenticationItemTitle,
    AuthenticationAnchorStyles,
    AuthenticationFormStyles,
    AuthenticationItemContent,
    AuthenticationTextContent,
    AuthenticationPrivacyContent,
    AuthenticationItemCode,
    AuthenticationInputsBox,
};
