import React from "react";
import PropTypes from "prop-types";
import {
    ScoreStyles,
    TextStyles,
    BoxGrid,
    BoxTitle,
    BoxHomeGrid,
    BoxAwayGrid,
    BoxScore,
    BoxScoreTime,
    HomeTitle,
    HomeGoals,
    PlayerName,
    AwayTitle,
    AwayGoals,
    ScoreNumber,
    HomeNumber,
    AwayNumber,
    SeparatorStyles,
    TimeStyles
} from "./styles";
import { Box, Image } from "../../accessories";

const Score = props => {
    const { ratio, src, scorehome, scoreaway, league, divider, status, awaygoalname, homegoalname, hometitle, awaytitle } = props;
    return (
        <ScoreStyles>
            <BoxTitle variant="Transparent">
                <TextStyles>{league}</TextStyles>
            </BoxTitle >
            <BoxGrid variant="Transparent">
                <Box variant="Transparent">
                    <BoxHomeGrid variant="Transparent">
                        <HomeTitle variant="h3">{hometitle}</HomeTitle>
                        <Image ratio={ratio} src={src} />
                    </BoxHomeGrid>
                    <HomeGoals variant="Transparent">
                        <PlayerName>{homegoalname}</PlayerName>
                        <PlayerName>{homegoalname}</PlayerName>
                    </HomeGoals>
                </Box>
                <BoxScoreTime variant="Transparent">
                    <ScoreNumber variant="Transparent">
                        <HomeNumber>{scorehome}</HomeNumber>
                        <SeparatorStyles >{divider}</SeparatorStyles >
                        <AwayNumber>{scoreaway}</AwayNumber>
                    </ScoreNumber >
                    <BoxScore variant="Transparent">
                        <TimeStyles>{status}</TimeStyles>
                    </BoxScore>
                </BoxScoreTime>
                <Box variant="Transparent">
                    <BoxAwayGrid variant="Transparent">
                        <Image ratio={ratio} src={src} />
                        <AwayTitle variant="h3"> {awaytitle}</AwayTitle>
                    </BoxAwayGrid>
                    <AwayGoals variant="Transparent">
                        <PlayerName>{awaygoalname}</PlayerName>
                    </AwayGoals>
                </Box>
            </BoxGrid>
        </ScoreStyles>
    );
};

Score.propTypes = {
    children: PropTypes.node,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    league: PropTypes.string,
    hometitle: PropTypes.string,
    homegoalname: PropTypes.string,
    awaygoalname: PropTypes.string,
    awaytitle: PropTypes.string,
    status: PropTypes.string,
    divider: PropTypes.string,
    scorehome: PropTypes.string,
    scoreaway: PropTypes.string,
};

Score.defaultProps = {
    league: "Champions League",
    hometitle: "Bayer Leverkusen",
    awaytitle: "Tottenham",
    homegoalname: "Lewandowski 20'",
    awaygoalname: "Kane 60'",
    status: "2do tiempo",
    divider: "-",
    scoreaway: "1",
    scorehome: "2",
    children: null,
    ratio: "aspect1x1",
    src: {},
};

export default Score;