import React, { useState } from "react";
import PropTypes from "prop-types";
import { TabsList, Tab, TabButton } from "./styles";
// import tablinks from "./tabs.json";

export const Tabs = props => {
    const { btncolor, tablinks } = props;
    const [active, setActive] = useState(0);
    const changeActive = (name, index) => {
        setActive(index);
        props.func(name);
    };
    return (
        <nav role="navigation">
            <TabsList>
                {tablinks.map((tab, index) => {
                    return (
                        <Tab key={tab.name}>
                            <TabButton
                                id={tab.tabid}
                                variant="Transparent"
                                color={btncolor}
                                onClick={() => changeActive(tab.tabid, index)}
                                active={index === active}
                            >
                                {tab.name}
                            </TabButton>
                        </Tab>
                    );
                })}
            </TabsList>
        </nav>
    );
};
Tabs.propTypes = {
    btncolor: PropTypes.string,
    func: PropTypes.func,
};
Tabs.defaultProps = {
    btncolor: "white",
    func: () => {},
};
export default Tabs;
