import styled, { css } from "styled-components";
import { Box, Inputs, Button, Anchor, Text, Title, Form } from "../../accessories";

const LoginItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 600px;
        }
    `,
);

const LoginItemContent = styled(Box)(
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

const LoginItemDividerStyles = styled(Box)(
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

const LoginAnchorContent = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 300px;
        justify-content: space-between;
        margin: ${theme.space.md} ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 580px;
        }
    `,
);

const LoginInputStyles = styled(Inputs)(
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

const LoginButtonStyles = styled(Button)(
    ({ theme }) => css`
        width: 100%;
        max-width: 300px;
        margin: ${theme.space.xl} ${theme.space.auto} ${theme.space.md};
        height: 50px;
        justify-content: center;
        font-size: ${theme.fontSizes.fmd};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 580px;
        }
    `,
);

const LoginItemText = styled(Text)(
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
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 580px;
            ::before {
                width: 260px;
            }
            ::after {
                width: 260px;
            }
        }
    `,
);

const LoginFormStyles = styled(Form)(
    ({ theme }) => css`
        display: block;
        min-width: 300px;
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
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Interaction};
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
    LoginFormStyles,
    LoginItemContent,
    LoginAnchorContent,
};
