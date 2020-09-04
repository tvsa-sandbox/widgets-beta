import styled, { css } from "styled-components";
import { Text, Box } from "../../accessories";

const QuoteStyles = styled.div(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        padding: ${theme.space.zero} ${theme.space.xl2};

        @media (min-width: ${theme.breakpoints.xl}) {
            padding: ${theme.space.zero};
        }
    `,
);

const BoxQuoteText = styled(Box)(
    ({ theme }) => css`
        max-width: 340px;
        justify-content: center;
        margin: ${theme.space.xl2} auto;
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 768px;
        }
    `,
);

const BoxQuoteAuthor = styled(Box)`
    justify-content: flex-end;
    display: flex;
`;

const QuoteText = styled(Text)(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        color: ${theme.colors.Dark};
        font-size: ${theme.fontSizes.fxl};
        line-height: 30px;
        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fxl2};
            line-height: 52px;
        }
    `,
);

const QuoteAuthor = styled(Text)(
    ({ theme }) => css`
        width: auto;
        max-width: 250px;
        height: auto;
        color: ${theme.colors.Dark};
        font-size: ${theme.fontSizes.fbase};
        text-align: right;
        padding-right: ${theme.space.base};

        &::after {
            content: "";
            display: flex;
            background: ${theme.colors.Dark};
            width: 25%;
            height: 1px;
            margin-top: 23px;
            margin-left: 100px;
        }
    `,
);

export { QuoteStyles, QuoteAuthor, QuoteText, BoxQuoteText, BoxQuoteAuthor };
