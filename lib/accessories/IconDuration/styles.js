import styled, { css } from "styled-components";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    position: absolute;
`;

const Transparent = ({ theme }) => css`
    ${common}
    background: ${theme.colors.Light};
    color: ${theme.colors.Interaction};
`;

const variant = variants("variant", {
    Transparent,
});

const IconDurationStyles = styled("div")(variant);

export default IconDurationStyles;
