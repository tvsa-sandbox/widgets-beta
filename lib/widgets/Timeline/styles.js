import styled, { css } from "styled-components";
import { Box, Button } from "../../accessories";

const TimelineStyles = styled.div(
    ({ theme }) => css`
        max-width: 1280px;
        margin: auto;
        min-height: 60px;
        display: flex;

        @media (min-width: ${theme.breakpoints.xl}) {
            display: flex;
        }
    `,
);

const BoxContainerStyles = styled(Box)(
    () => css`
        max-width: 1280px;
        display: flex;
    `,
);

export { TimelineStyles, BoxContainerStyles };
