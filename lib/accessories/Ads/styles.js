import styled from "styled-components";
import { color, layout, space, typography } from "styled-system";

const Ads = styled.div(color, layout, space, typography);

Ads.defaultProps = {
    color: "Light.t60",
    margin: "lg",
    boxSizing: "borderbox",
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "&:before": {
        content: '"PUBLICIDAD"',
        display: "flex",
        fontSize: "xs",
        fontFamily: "0",
        justifyContent: "center",
        width: "100%",
        height: "20px",
        color: "Dark.t40",
    },
};
export default Ads;
