import styled, { css } from "styled-components";
import { Box, Inputs, Button, Text, Title, Form } from "../../accessories";

const EmailItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 600px;
        }
    `,
);

const EmailItemContent = styled(Box)(
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

const EmailHeadStyles = styled(Box)(
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

const EmailTextContent = styled(Box)(
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

const EmailFormStyles = styled(Form)(
    ({ theme }) => css`
        display: block;
        min-width: 300px;
    `,
);

const EmailButtonStyles = styled(Button)(
    ({ theme }) => css`
        width: 100%;
        max-width: 300px;
        margin: ${theme.space.md} ${theme.space.auto};
        height: 50px;
        justify-content: center;
        font-size: ${theme.fontSizes.fsm};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 580px;
        }
    `,
);

const EmailItemText = styled(Text)(
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

const EmailInputStyles = styled(Inputs)(
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

const EmailItemTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
    `,
);

export {
    EmailItemStyles,
    EmailButtonStyles,
    EmailHeadStyles,
    EmailItemText,
    EmailItemTitle,
    EmailFormStyles,
    EmailItemContent,
    EmailTextContent,
    EmailInputStyles,
};
