import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../accessories";

import {
    TableItemStyles,
    TableItemTeam,
    TableItemLogo,
    TableItemName,
    TableItemNumber,
} from "./styles";

const TableItem = props => {
    const { number1, number2, number3, number4, number5, number6, number7, number8, number9, name, src, ratio } = props;
    return (

    <TableItemStyles>
        <TableItemTeam>
            <TableItemLogo><Image ratio={ratio} src={src} /></TableItemLogo>
            <TableItemName>{name}</TableItemName>
        </TableItemTeam>
        <TableItemNumber>{number1}</TableItemNumber>
        <TableItemNumber>{number2}</TableItemNumber>
        <TableItemNumber>{number3}</TableItemNumber>
        <TableItemNumber>{number4}</TableItemNumber>
        <TableItemNumber>{number5}</TableItemNumber>
        <TableItemNumber>{number6}</TableItemNumber>
        <TableItemNumber>{number7}</TableItemNumber>
        <TableItemNumber>{number8}</TableItemNumber>
        <TableItemNumber>{number9}</TableItemNumber>
    </TableItemStyles>

    );
};

TableItem.propTypes = {
    number1: PropTypes.string,
    number2: PropTypes.string,
    number3: PropTypes.string,
    number4: PropTypes.string,
    number5: PropTypes.string,
    number6: PropTypes.string,
    number7: PropTypes.string,
    number8: PropTypes.string,
    number9: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

TableItem.defaultProps = {
    number1: "2",
    number2: "20",
    number3: "8",
    number4: "5",
    number5: "14",
    number6: "7",
    number7: "21",
    number8: "8",
    number9: "9",
    name: "NAME",
    src: {},
    ratio: "aspect1x1",
};

export default TableItem;
