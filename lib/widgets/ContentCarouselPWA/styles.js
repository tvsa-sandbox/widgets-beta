import styled, { css } from "styled-components";
import Title from "../../accessories/Title";

const ContentCarouselPWAStyles = styled.section(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        background: ${theme.colors.gray2};
        padding-top: ${theme.space.xl2};
        padding-bottom: ${theme.space.xl3};
        padding-left: ${theme.space.xl2};
        margin: ${theme.space.xl2} ${theme.space.zero};
    `,
);

const ContentCarouselTitleStyles = styled(Title)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.xxl};
        max-width: 1024px;
        margin-left: ${theme.space.xs};
        margin-right: auto;
        text-align: left;
        text-transform: uppercase;
        font-weight: 700;
        color: ${theme.colors.dark};
        font-family: ${theme.fonts[2]};
        font-size: ${theme.fontSizes.fmd};
    `,
);

const ContentCarouselThumbStyles = styled.div(
    ({ theme }) => css`
        display: flex;
        margin-left: ${theme.space.xs};
        margin-right: ${theme.space.xs};
        padding-bottom: ${theme.space.md};
        width: auto;
    `,
);

export { ContentCarouselPWAStyles, ContentCarouselTitleStyles, ContentCarouselThumbStyles };