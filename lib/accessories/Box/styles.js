import styled, { css } from "styled-components";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    width: 100%;
    height: auto;
    display: block;
    align-items: center;
    margin: ${props => (props.my ? props.theme.space[props.my] : null)} 0;
`;

const Solid = ({ theme }) => css`
    ${common}
    background: ${theme.colors.Light};
    position: relative;
`;

const Transparent = ({ theme }) => css`
    ${common}
    background: transparent;
    position: relative;
`;

const Flex = ({ theme }) => css`
    ${common}
    display: flex;
`;
const Space = ({ theme }) => css`
    ${common}
    margin: ${theme.space.lg};
`;

const variant = variants("variant", {
    Solid,
    Space,
    Flex,
    Transparent,
});

const Box = styled("div")(variant);
export default Box;
