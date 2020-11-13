import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../accessories";
import { TabsList, Tab } from "./styles";
import tablinks from "./tabs.json";

export const Tabs = props => {
    const { btncolor } = props;
    return (
        <nav role="navigation">
            <TabsList>
                {tablinks.map(tab => {
                    return (
                        <Tab key={tab.name}>
                            <Button
                                href={tab.path}
                                variant="Transparent"
                                color={btncolor}
                                // active={SECTION[0] === tab.path}
                            >
                                {tab.name}
                            </Button>
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
