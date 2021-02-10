import React from "react";
import PropTypes from "prop-types";
import { TimelineStyles, BoxContainerStyles } from "./styles";
import { Box, Title, Text, Time, Image } from "../../accessories";

const Timeline = props => {
    const { team1, team2, src } = props;
    return (
        <TimelineStyles {...props}>
            <BoxContainerStyles variant="Flex">
                <Box>
                    <Box>
                        <Image src={src} ratio={ratio} />
                    </Box>
                    <Text>4-3-3</Text>
                </Box>
                <Box>
                    <Text>{team1}</Text>
                    <Title variant="h4">3</Title>
                    <Text>-</Text>
                    <Title variant="h4">1</Title>
                    <Text>{team2}</Text>
                </Box>
                <Box>
                    <Box>
                        <Image src={src} ratio={ratio} />
                    </Box>
                    <Text>4-3-3</Text>
                </Box>
            </BoxContainerStyles>
            <Box>
                <Title variant="h4">Liga MX Clausura</Title>
                <Time>jueves 21 de enero 2021</Time>
                <Time>09:00pm</Time>
            </Box>
            <Box>
                <Image ratio={ratio} src={src} />
                <Image ratio={ratio} src={src} />
            </Box>
        </TimelineStyles>
    );
};

Tiimeline.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    team1: PropTypes.string,
    team2: PropTypes.string,
};

Timeline.defaultProps = {
    src: {},
    ratio: PropTypes.string,
    team1: "Atlético de San Luis",
    team2: "Guadalajara",
};

export default Timeline;
