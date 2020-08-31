import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import PropTypes from "prop-types";
import IconStyles from "./styles";
import iconSetTudn from "./selectiontudn.json";
import iconSetLe from "./selection.json";
import iconSetBdx from "./selectionbandamax.json";
import iconSetC5 from "./selectioncanal5.json";
import iconSetC9 from "./selectioncanal9.json";
import iconSetTht from "./selectiontelehit.json";
import iconSetUnc from "./selectionunicable.json";

const Icons = props => {
    const { name, size } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    if (ui === "tudn") {
        return <IconStyles iconSet={iconSetTudn} icon={name} size={size} {...props} />;
    }
    if (ui === "canal5") {
        return <IconStyles iconSet={iconSetC5} icon={name} size={size} {...props} />;
    }
    if (ui === "elnueve") {
        return <IconStyles iconSet={iconSetC9} icon={name} size={size} {...props} />;
    }
    if (ui === "bandamax") {
        return <IconStyles iconSet={iconSetBdx} icon={name} size={size} {...props} />;
    }
    if (ui === "telehit") {
        return <IconStyles iconSet={iconSetTht} icon={name} size={size} {...props} />;
    }
    if (ui === "unicable") {
        return <IconStyles iconSet={iconSetUnc} icon={name} size={size} {...props} />;
    }
    return <IconStyles iconSet={iconSetLe} icon={name} size={size} {...props} />;
};

Icons.propTypes = {
    name: PropTypes.string,
    size: PropTypes.string,
    variant: PropTypes.string,
};

Icons.defaultProps = {
    name: "",
    variant: "Solid",
    size: "40",
};

export default Icons;
