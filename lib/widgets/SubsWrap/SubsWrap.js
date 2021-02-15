import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Box from "../../accessories/Box";
import { SubsWrapStyles, SubsWrapTitle, SubsWrapBox, SubsWrapBoxPlayer, SubsWrapNumberHome, SubsWrapNumberAway, SubsWrapName } from "./styles";

const SubsWrap = props => {
  const { ratio, name, number } = props;
  return (
    <SubsWrapStyles>
      <SubsWrapTitle variant="h3">
        Suplentes
      </SubsWrapTitle>
      <Box variant="Flex">
        <SubsWrapBox variant="Transparent">

          <SubsWrapBoxPlayer variant="Transparent">
            <SubsWrapNumberHome>
              {number}
            </SubsWrapNumberHome>
            <SubsWrapName>
              {name}
            </SubsWrapName>
          </SubsWrapBoxPlayer>
        </SubsWrapBox>
        <SubsWrapBox variant="Transparent">
          <SubsWrapBoxPlayer variant="Transparent">
            <SubsWrapNumberAway>
              {number}
            </SubsWrapNumberAway>
            <SubsWrapName>
              {name}
            </SubsWrapName>
          </SubsWrapBoxPlayer>

        </SubsWrapBox>

      </Box>
    </SubsWrapStyles>
  );
};

SubsWrap.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

SubsWrap.defaultProps = {
  name: "Manchester United",
  number: "9",
};

export default SubsWrap;
