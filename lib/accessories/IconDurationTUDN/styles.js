import styled, { css } from "styled-components";
import variants from "../../helpers/variants";
import Time from "../Time";

const common = ({ theme }) => css`
    color: ${theme.colors.Interaction};
    position: absolute;
    height: 100%;
    top: 0;
    width: 100%;
`;

const Solid = ({ theme }) => css`
    ${common}
    background: ${theme.colors.Light};
    color: ${theme.colors.Interaction};
`;

const Transparent = ({ theme }) => css`
    ${common}
    background: transparent;
    color: ${theme.colors.gray};
`;

const variant = variants("variant", {
    Transparent,
    Solid,
});

const IconDurationStyles = styled("div")(variant);

const TimeStyles = styled(Time)(
    ({ theme }) => css`
        position: relative;
        bottom: 0%;
        display: flex;
        justify-content: flex-end;
        position: absolute;
        right: 0;
        width: auto;
        height: 25px;
        border-radius: 5px 0px 0px;
        background: rgba(0, 0, 0, 0.5);
        font-family: ${theme.fonts[2]};
    `,
);

export { IconDurationStyles, TimeStyles };
