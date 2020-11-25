import React from "react";
import PropTypes from "prop-types";
import { Image, Box, Text, Icons, ProgressRing } from "../../accessories";
import { EndCardBox, EndCardImageBox, EndCardButton, EndCardIcon, EndCardTitleBox } from "./styles";

const EndCard = ({ title, src, ratio, progress, btntext, copy }) => {
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
                    <Text color="gray">{copy}</Text>
                    <Text variant="Bold" color="gray" size="fsm" lh="lbase">
                        {title}
                    </Text>
                </EndCardTitleBox>
            </Box>
            <EndCardButton>{btntext}</EndCardButton>
        </EndCardBox>
    );
};

EndCard.propTypes = {
    ratio: PropTypes.string,
    Title: PropTypes.string,
    btntext: PropTypes.string,
    copy: PropTypes.string,
    progress: PropTypes.number,
    src: PropTypes.shape({
        desktop: PropTypes.shape({}),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
        }),
    }),
};

EndCard.defaultProps = {
    ratio: "aspect16x9",
    title: "Titulo de Video",
    btntext: "Cancelar",
    copy: "A continuación",
    progress: 0,
    src: {
        desktop: {},
        mobile: {},
    },
};

export default EndCard;
