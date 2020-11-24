import React from "react";
import PropTypes from "prop-types";
import { TabsList, Tab, TabButton } from "./styles";

export const Tabs = props => {
    const { btncolor, tablinks } = props;
    return (
        <nav role="navigation">
            <TabsList>
                {tablinks.map(tab => {
                    return (
                        <Tab key={tab.name}>
                            <TabButton
                                tabid={tab.tabid}
                                variant="Transparent"
                                color={btncolor}
                                // active={tab === tab.tabid}
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
};
Tabs.defaultProps = {
    btncolor: "white",
};

export default Tabs;
