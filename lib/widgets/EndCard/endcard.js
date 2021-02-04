import React from "react";
import PropTypes from "prop-types";
import { Image, Box, Icons, ProgressRing, Text, Button } from "../../accessories";
import { EndCardItem } from "../../items";

import {
    EndCardBox,
    EndCardImageBox,
    EndCardButton,
    EndCardIcon,
    EndCardTitleBox,
    EndCardTitle,
    EndCardCopy,
} from "./styles";

const EndCard = ({ title, src, ratio, progress, btntext, copy, replayCopy, related }) => {
    const thumbs = related.map(thumb => <EndCardItem imgsrc={thumb.src} />);
    return (
        <EndCardBox variant="Flex">
            <Box variant="Flex">
                <EndCardImageBox>
                    <EndCardIcon>
                        <ProgressRing progress={progress} radius={33} />
                        <Icons name="Video" color="white" />
                    </EndCardIcon>
                    <Image src={src} ratio={ratio} />
                </EndCardImageBox>
                <EndCardTitleBox variant="Transparent">
                    <EndCardCopy color="gray">{copy}</EndCardCopy>
                    <EndCardTitle variant="Bold" color="gray">
                        {title}
                    </EndCardTitle>
                    <EndCardButton>{btntext}</EndCardButton>
                </EndCardTitleBox>
            </Box>
            <Button icon="Replay" variant="Transparent" ariaLabel="replay">
                <Text color="gray">{replayCopy}</Text>
            </Button>
            {related ? <Box variant="Flex">{thumbs}</Box> : null}
        </EndCardBox>
    );
};

EndCard.propTypes = {
    ratio: PropTypes.string,
    Title: PropTypes.string,
    btntext: PropTypes.string,
    copy: PropTypes.string,
    replayCopy: PropTypes.string,
    progress: PropTypes.number,
    src: PropTypes.shape({
        desktop: PropTypes.shape({}),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
        }),
    }),
    related: PropTypes.arrayOf(PropTypes.shape({})),
};

EndCard.defaultProps = {
    ratio: "aspect16x9",
    title: "“¡Me enamoré, mamá!”: Clara le cuenta la verdad a Nieves",
    btntext: "Cancelar",
    copy: "A continuación",
    replayCopy: "Volver a Reproducir",
    progress: 0,
    src: {
        desktop: {},
        mobile: {},
    },
    related: [],
};

export default EndCard;
