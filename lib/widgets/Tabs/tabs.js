import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../accessories";
import { TabsList, Tab } from "./styles";
import tablinks from "./tabs.json";

const Tabs = props => {
    const { children } = props;
    return (
        <nav role="navigation">
            <TabsList>
                {tablinks.map(nav => {
                    return (
                        <Tab key={nav.name}>
                            <Button
                                href={nav.path}
                                variant="Transparent"
                                // active={SECTION[0] === nav.path}
                            >
                                {nav.name}
                            </Button>
                        </Tab>
                    );
                })}
            </TabsList>
        </nav>
    );
};

Tabs.propTypes = {};

export default Tabs;
