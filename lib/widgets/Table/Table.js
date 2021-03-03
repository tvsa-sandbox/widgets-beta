import React from "react";
import PropTypes from "prop-types";
import { Box, Carousel } from "../../accessories";
import { TableItem } from "../../items";

import {
    TableStyles,
    TableBoxHeader,
    TableHeaderTitle,
    TableHeaderSwitch,
    TableSwitchButtonActive,
    TableSwitchButtonInactive,
    TableBoxTop,
    TableTopTeam,
    TableTopCaption,
} from "./styles";

const Table = props => {
    const { team, match, opt1, opt2, src, ratio, items, caption } = props;
    const {  } = props;
    return (
        <TableStyles {...props}>
            <TableBoxHeader>
                <TableHeaderTitle>{match}</TableHeaderTitle>
                <TableHeaderSwitch>
                    <TableSwitchButtonActive>{opt1}</TableSwitchButtonActive>
                    <TableSwitchButtonInactive>{opt2}</TableSwitchButtonInactive>
                </TableHeaderSwitch>
            </TableBoxHeader>
            <Carousel arrow="Back" arrowcolor="green" arrowsize="40">
                <Box variant="Auto">
                    <TableBoxTop>
                        <TableTopTeam>{team}</TableTopTeam>
                        {caption.map(item => {
                        return <TableTopCaption ratio={ratio} src={src} key={item.id} >{item.feat}</TableTopCaption>;
                        })}
                    </TableBoxTop>
                    {items.map(item => {
                    return <TableItem ratio={ratio} src={src} key={item.id} />;
                    })}
                </Box>
            </Carousel>
        </TableStyles>
    )
};

Table.propTypes = {
    team: PropTypes.string,
    match: PropTypes.string,
    opt1: PropTypes.string,
    opt2: PropTypes.string,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({})),
    caption: PropTypes.arrayOf(PropTypes.shape({})),
};

Table.defaultProps = {
    team: "TEAM",
    match: "MATCHDAY",
    opt1: "POSITIONS",
    opt2: "RELEGATION",
    src: {},
    ratio: "aspect1x1",
    items: [
        {
            id: 0,
        },
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
    ],
    caption: [
        {
            id: 0,
        },
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
    ],
    caption: [
        {
            feat: "POS",
        },
        {
            feat: "PTS",
        },
        {
            feat: "PLY",
        },
        {
            feat: "WIN",
        },
        {
            feat: "DRW",
        },
        {
            feat: "LST",
        },
        {
            feat: "G SC",
        },
        {
            feat: "G CC",
        },
        {
            feat: "DIF",
        },
    ],
};

export default Table;
