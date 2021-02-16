import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Box from "../../accessories/Box";
import { SubsWrapStyles, SubsWrapTitle, SubsWrapBox, SubsWrapBoxPlayer, SubsWrapNumberHome, SubsWrapNumberAway, SubsWrapName } from "./styles";

const SubsWrap = props => {
  const { ratio, name, number, suplentes } = props;
  return (
    <SubsWrapStyles>
      <SubsWrapTitle variant="h3">
        Suplentes
      </SubsWrapTitle>
      <Box variant="Flex">
        {suplentes.map(subs => {
          return (
            <Fragment key={subs.id}>
              <SubsWrapBox variant="Transparent">
                <SubsWrapBoxPlayer variant="Transparent">
                  <SubsWrapNumberHome>
                    {subs.number}
                  </SubsWrapNumberHome>
                  <SubsWrapName>
                    {subs.name}
                  </SubsWrapName>
                </SubsWrapBoxPlayer>
              </SubsWrapBox>
              <SubsWrapBox variant="Transparent">
                <SubsWrapBoxPlayer variant="Transparent">
                  <SubsWrapNumberAway>
                    {subs.number}
                  </SubsWrapNumberAway>
                  <SubsWrapName>
                    {subs.name}
                  </SubsWrapName>
                </SubsWrapBoxPlayer>
              </SubsWrapBox>
            </Fragment>
          );
        })}
      </Box>
    </SubsWrapStyles>
  );
};

SubsWrap.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  suplentes: PropTypes.arrayOf(PropTypes.shape({})),
};

SubsWrap.defaultProps = {
  name: "Manchester United",
  number: "9",
  suplentes: [],
};

export default SubsWrap;
