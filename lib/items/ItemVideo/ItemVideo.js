import React from "react";
import PropTypes from "prop-types";
import {
    ItemVideoStyles,
    ItemVideoBoxVideoPlayer,
    BoxTimeStyles,
    CaptionBoxStyles,
    ItemVideoTime,
    ItemVideoText,
    ItemVideoTitleStyles,
    DescriptionTextStyles,
    BoxIconsStyles,
    BoxSocial,
    ItemIconStyles,
    IconTextStyles,
} from "./styles";
import { Image, Title, Text, Time, Icons, Box } from "../../accessories";
import SocialModal from "../SocialModal";
import SocialBox from "../SocialBox";
import EndCard from "../../widgets/EndCard";

const ItemVideo = props => {
    const { src, ratio } = props;
    return (
        <ItemVideoStyles variant="Solid">
            <Box>
                <Image alt="ItemVideo" ratio={ratio} src={src} />
                <ItemVideoBoxVideoPlayer>Ver video</ItemVideoBoxVideoPlayer>
                <EndCard />
            </Box>
            <CaptionBoxStyles>
                <BoxTimeStyles variant="Transparent">
                    <ItemVideoText>Episodio 8</ItemVideoText>
                    <Time variant="Duration">Jun. 19.2020</Time>
                    <BoxSocial isMobile variant="Trasparent">
                        <Icons name="Share" color="gray" />
                        <SocialModal closebtn={false} />
                    </BoxSocial>
                    <BoxSocial variant="Trasparent">
                        <SocialBox />
                    </BoxSocial>
                </BoxTimeStyles>
                <ItemVideoTitleStyles variant="h3">
                    A semanas de convertirse en mamá, Fernanda Castillo
                </ItemVideoTitleStyles>
                <DescriptionTextStyles>
                    La cuenta regresiva para que Fernanda Castillo y Erik Hayser debuten como papás
                    está por arrancar, mientras, en la recta final de la dulce espera....
                </DescriptionTextStyles>
                <BoxIconsStyles variant="Transparent">
                    <ItemIconStyles name="LasEstrellas" variant="Inactive" />
                    <IconTextStyles variant="Outline">El Dragón</IconTextStyles>
                </BoxIconsStyles>
            </CaptionBoxStyles>
        </ItemVideoStyles>
    );
};

ItemVideo.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

ItemVideo.defaultProps = {
    src: {},
    ratio: "aspect16x9",
};

export default ItemVideo;
