import styled, { css } from "styled-components";
import { Box, Text, Button, Title } from "../../accessories";

const RelatedContentStyles = styled(Box)(
    ({ theme }) => css`
        border-top: solid 1px rgba(0, 0, 0, 0.2);
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
        width: 100%;
        display: block;
        position: relative;
        margin: ${theme.space.md} auto;
        min-height: 185px;
    `,
);

const RelatedContentTitleBox = styled(Box)(
    ({ theme }) => css`
        position: relative;
        height: 100%;
    `,
);

const RelatedContentTitleStyles = styled(Title)(
    ({ theme }) => css`
        color: ${theme.colors.Interaction};
        font-weight: normal;
        font-family: ${theme.fonts[2]};
        padding-left: ${theme.space.xl2};
        padding-right: ${theme.space.xl2};
        padding-bottom: ${theme.space.xl};
        display: flex;
        position: relative;
        height: 100%;
    `,
);

const RelatedContentImageContainer = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 100%;
        padding-left: ${theme.space.xl2};
        padding-right: ${theme.space.xl2};
        position: relative;
        margin: ${theme.space.auto};
        width: 100%;
    `,
);

const RelatedContentTextStyles = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[2]};
        padding-left: ${theme.space.xl2};
        padding-top: ${theme.space.xl};
        padding-bottom: ${theme.space.xl};
    `,
);

const RelatedContentBoxButtonStyles = styled(Box)(
    ({ theme }) => css`
        margin-top: ${theme.space.xl};
        margin-bottom: ${theme.space.xl};
    `,
);

const RelatedContentButtonStyles = styled(Button)(
    ({ theme }) => css`
        align-items: center;
        color: ${theme.colors.Light};
        height: 20px;
        font-size: ${theme.fontSizes.fsm};
        margin: ${theme.space.auto};
        border-radius: 3px;
        padding-left: ${theme.space.xxl};
        padding-right: ${theme.space.xxl};
    `,
);

export {
    RelatedContentStyles,
    RelatedContentTextStyles,
    RelatedContentTitleBox,
    RelatedContentTitleStyles,
    RelatedContentImageContainer,
    RelatedContentBoxButtonStyles,
    RelatedContentButtonStyles,
};
