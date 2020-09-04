import styled, { css } from "styled-components";
import { Text, Box } from "../../accessories";

const EnhancementImageStyles = styled.div(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        margin: ${theme.space.xl3} auto;
        margin-bottom: ${theme.space.zero};
    `,
);

const BoxTextStyles = styled(Box)(
    ({ theme }) => css`
        max-width: 290px;
        justify-content: center;
        margin: ${theme.space.lg} auto;

        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 768px;
        }

        &::after {
            content: "";
            display: flex;
            background: ${theme.colors.Dark};
            width: 20%;
            height: 1px;
            margin: ${theme.space.xl2} auto;
            margin-bottom: ${theme.space.zero};
        }
    `,
);

const EnhancementImageText = styled(Text)(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        color: ${theme.colors.Dark};
        font-size: ${theme.fontSizes.fmd};
        font-weight: 700;
        line-height: 20px;

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.flg};
            line-height: 28px;
        }
    `,
);

export { EnhancementImageStyles, BoxTextStyles, EnhancementImageText };
