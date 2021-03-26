import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";
import { LineUpStyles, LineUpTitle, LineUpBoxHome, LineUpPlayerField, LineUpBoxAway, LineUpNameField, LineUpBoxField, LineUpBoxPlayer, LineUpContainer, LineUpNumberHome, LineUpNumberAway, LineUpName, LineUpIcons, LineUpBoxName, LineUpGridField, LineUpBoxHomeTeam, LineUpBoxAwayTeam } from "./styles";

import ModalLineUp from "../../items/ModalSubsWrap";

const LineUp = props => {
  const { ratio, name, number, jugadores, dfl, mdl, fwl, dfa, mda, fwa } = props;
  const [statidistics, handleStadistics] = useState(false);
  return (
    <LineUpStyles>
      <ModalLineUp active={statidistics} handleModal={() => handleStadistics(!statidistics)} />
      <LineUpContainer variant="Flex">

        {jugadores.map(subs => {
          return (
            < Fragment key={subs.suplentes} >
              <LineUpBoxHome variant="Transparent" >
                <LineUpTitle variant="h6">Liverpool</LineUpTitle>
                {subs.suplentes.Local.map(local => {

                  return (
                    <LineUpBoxPlayer variant="Transparent">
                      <Box variant="Flex">
                        <LineUpNumberHome onClick={() => handleStadistics(true)}>
                          {local.number}
                        </LineUpNumberHome>
                        <LineUpIcons name="Link" />
                      </Box>
                      <LineUpBoxName variant="Transparent">
                        <LineUpName>
                          {local.name}
                        </LineUpName>
                      </LineUpBoxName>
                    </LineUpBoxPlayer>
                  )
                })
                }
              </LineUpBoxHome>
              <LineUpGridField variant="Transparent">
                <LineUpBoxField variant="Transparent">
                  <LineUpBoxHomeTeam variant="Transparent" df={dfl} md={mdl} fw={fwl}>
                    <Box variant="Transparent" style={{ gridArea: "gk" }}>
                      {subs.suplentes.LocalPlayer.map(local => {
                        if (local.position === "gk") {
                          return (
                            <LineUpPlayerField variant="Transparent" >
                              <Box variant="Flex" >
                                <LineUpNumberHome onClick={() => handleStadistics(true)}>
                                  {local.number}
                                </LineUpNumberHome>
                                <LineUpIcons name="Link" variant="Inactive" />
                              </Box>
                              <LineUpBoxName variant="Transparent">
                                <LineUpNameField>
                                  {local.name}
                                </LineUpNameField>
                              </LineUpBoxName>
                            </LineUpPlayerField>
                          )
                        }
                      }
                      )
                      }
                    </Box>
                    <Box variant="Transparent" style={{ gridArea: "df", display: "flex" }}>
                      {subs.suplentes.LocalPlayer.map(local => {
                        if (local.position === "df") {
                          return (
                            <LineUpPlayerField variant="Transparent" >
                              <Box variant="Flex" >
                                <LineUpNumberHome onClick={() => handleStadistics(true)}>
                                  {local.number}
                                </LineUpNumberHome>
                                <LineUpIcons name="Link" variant="Inactive" />
                              </Box>
                              <LineUpBoxName variant="Transparent">
                                <LineUpNameField>
                                  {local.name}
                                </LineUpNameField>
                              </LineUpBoxName>
                            </LineUpPlayerField>
                          )
                        }
                      }
                      )
                      }
                    </Box>
                    <Box variant="Transparent" style={{ gridArea: "md", display: "flex" }}>
                      {subs.suplentes.LocalPlayer.map(local => {
                        if (local.position === "md") {
                          return (
                            <LineUpPlayerField variant="Transparent" >
                              <Box variant="Flex" >
                                <LineUpNumberHome onClick={() => handleStadistics(true)}>
                                  {local.number}
                                </LineUpNumberHome>
                                <LineUpIcons name="Link" variant="Inactive" />
                              </Box>
                              <LineUpBoxName variant="Transparent">
                                <LineUpNameField>
                                  {local.name}
                                </LineUpNameField>
                              </LineUpBoxName>
                            </LineUpPlayerField>
                          )
                        }
                      }
                      )
                      }
                    </Box>
                    <Box variant="Transparent" style={{ gridArea: "fw", display: "flex" }}>
                      {subs.suplentes.LocalPlayer.map(local => {
                        if (local.position === "fw") {
                          return (

                            <LineUpPlayerField variant="Transparent" >
                              <Box variant="Flex" >
                                <LineUpNumberHome onClick={() => handleStadistics(true)}>
                                  {local.number}
                                </LineUpNumberHome>
                                <LineUpIcons name="Link" variant="Inactive" />
                              </Box>
                              <LineUpBoxName variant="Transparent">
                                <LineUpNameField>
                                  {local.name}
                                </LineUpNameField>
                              </LineUpBoxName>
                            </LineUpPlayerField>

                          )
                        }
                      }
                      )
                      }
                    </Box>

                  </LineUpBoxHomeTeam>

                  <LineUpBoxAwayTeam variant="Transparent" df={dfl} md={mdl} fw={fwl}>
                    <Box variant="Transparent" style={{ gridArea: "gk", display: "flex" }}>
                      {subs.suplentes.AwayPlayer.map(away => {
                        if (away.position === "gk") {
                          return (
                            <LineUpPlayerField variant="Transparent" >
                              <Box variant="Flex" >
                                <LineUpNumberAway onClick={() => handleStadistics(true)}>
                                  {away.number}
                                </LineUpNumberAway>
                                <LineUpIcons name="Link" variant="Inactive" />
                              </Box>
                              <LineUpBoxName variant="Transparent">
                                <LineUpNameField>
                                  {away.name}
                                </LineUpNameField>
                              </LineUpBoxName>
                            </LineUpPlayerField>
                          )
                        }
                      }
                      )
                      }
                    </Box>
                    <Box variant="Transparent" style={{ gridArea: "df", display: "flex" }}>
                      {subs.suplentes.AwayPlayer.map(away => {
                        if (away.position === "df") {
                          return (
                            <LineUpPlayerField variant="Transparent" >
                              <Box variant="Flex" >
                                <LineUpNumberAway onClick={() => handleStadistics(true)}>
                                  {away.number}
                                </LineUpNumberAway>
                                <LineUpIcons name="Link" variant="Inactive" />
                              </Box>
                              <LineUpBoxName variant="Transparent">
                                <LineUpNameField>
                                  {away.name}
                                </LineUpNameField>
                              </LineUpBoxName>
                            </LineUpPlayerField>
                          )
                        }
                      }
                      )
                      }
                    </Box>
                    <Box variant="Transparent" style={{ gridArea: "md", display: "flex" }}>
                      {subs.suplentes.AwayPlayer.map(away => {
                        if (away.position === "md") {
                          return (
                            <LineUpPlayerField variant="Transparent" >
                              <Box variant="Flex" >
                                <LineUpNumberAway onClick={() => handleStadistics(true)}>
                                  {away.number}
                                </LineUpNumberAway>
                                <LineUpIcons name="Link" variant="Inactive" />
                              </Box>
                              <LineUpBoxName variant="Transparent">
                                <LineUpNameField>
                                  {away.name}
                                </LineUpNameField>
                              </LineUpBoxName>
                            </LineUpPlayerField>
                          )
                        }
                      }
                      )
                      }
                    </Box>
                    <Box variant="Transparent" style={{ gridArea: "fw", display: "flex" }}>
                      {subs.suplentes.AwayPlayer.map(away => {
                        if (away.position === "fw") {
                          return (

                            <LineUpPlayerField variant="Transparent" >
                              <Box variant="Flex" >
                                <LineUpNumberAway onClick={() => handleStadistics(true)}>
                                  {away.number}
                                </LineUpNumberAway>
                                <LineUpIcons name="Link" variant="Inactive" />
                              </Box>
                              <LineUpBoxName variant="Transparent">
                                <LineUpNameField>
                                  {away.name}
                                </LineUpNameField>
                              </LineUpBoxName>
                            </LineUpPlayerField>

                          )
                        }
                      }
                      )
                      }
                    </Box>

                  </LineUpBoxAwayTeam>

                </LineUpBoxField>
              </LineUpGridField>

              <LineUpBoxAway variant="Transparent" >
                <LineUpTitle variant="h6">Manchester City</LineUpTitle>
                {subs.suplentes.Away.map(away => {

                  return (
                    <LineUpBoxPlayer variant="Transparent" key={away.number} >
                      <Box variant="Flex">
                        <LineUpNumberAway onClick={() => handleStadistics(true)}>
                          {away.number}
                        </LineUpNumberAway>
                        <LineUpIcons name="Link" />
                      </Box>
                      <LineUpBoxName variant="Transparent">
                        <LineUpName>
                          {away.name}
                        </LineUpName>
                      </LineUpBoxName>
                    </LineUpBoxPlayer>

                  )
                })
                }
              </LineUpBoxAway>
            </Fragment>
          );
        }
        )
        }

      </LineUpContainer>
    </LineUpStyles >
  );
};

LineUp.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  suplentes: PropTypes.arrayOf(PropTypes.shape({})),
  dfl: PropTypes.number,
  dfa: PropTypes.number,
  mdl: PropTypes.number,
  mda: PropTypes.number,
  fwl: PropTypes.number,
  fwa: PropTypes.number,

};

LineUp.defaultProps = {
  name: "Manchester United",
  number: "9",
  suplentes: [],
  dfl: 1,
  dfa: 1,
  mdl: 1,
  mda: 1,
  fwl: 1,
  fwa: 1,
};

export default LineUp;