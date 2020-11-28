import React from "react";
import PropTypes from "prop-types";
import {
    ItemVideoStyles,
    ItemVideoBoxVideoPlayer,
    BoxTimeStyles,
    CaptionBoxStyles,
    ItemVideoText,
    ItemVideoTitleStyles,
    DescriptionTextStyles,
    BoxIconsStyles,
    BoxSocial,
    ItemIconStyles,
    IconTextStyles,
} from "./styles";
import { Image, Anchor, Time, Icons, Box } from "../../accessories";
import SocialModal from "../SocialModal";
import SocialBox from "../SocialBox";
import EndCard from "../../widgets/EndCard";

const ItemVideo = props => {
    const {
        src,
        ratio,
        social,
        uri,
        videoepisode,
        videodate,
        title,
        videodescription,
        show,
    } = props;
    return (
        <ItemVideoStyles variant="Solid">
            <Box>
                <Image alt="ItemVideo" ratio={ratio} src={src} />
                <ItemVideoBoxVideoPlayer>Ver video</ItemVideoBoxVideoPlayer>
                <EndCard src={src} />
            </Box>
            <CaptionBoxStyles>
                <BoxTimeStyles variant="Transparent">
                    <ItemVideoText>{videoepisode}</ItemVideoText>
                    <Time variant="Duration">{videodate}</Time>
                    <BoxSocial isMobile variant="Trasparent">
                        <Icons name="Share" color="gray" />
                        <SocialModal closebtn={false} />
                    </BoxSocial>
                    <BoxSocial variant="Trasparent">
                        <SocialBox items={social} />
                    </BoxSocial>
                </BoxTimeStyles>
                <ItemVideoTitleStyles variant="h3">{title}</ItemVideoTitleStyles>
                <DescriptionTextStyles>{videodescription}</DescriptionTextStyles>
                <BoxIconsStyles variant="Transparent">
                    <Anchor href={uri} aria-label="button">
                        <ItemIconStyles name="LasEstrellas" variant="Inactive" />
                    </Anchor>
                    <IconTextStyles variant="Transparent">{show}</IconTextStyles>
                </BoxIconsStyles>
            </CaptionBoxStyles>
        </ItemVideoStyles>
    );
};
ItemVideo.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    videoepisode: PropTypes.string,
    title: PropTypes.string,
    uri: PropTypes.string,
    videodate: PropTypes.string,
    videodescription: PropTypes.string,
    show: PropTypes.string,
    social: PropTypes.arrayOf(PropTypes.shape({})),
};
ItemVideo.defaultProps = {
    src: {},
    ratio: "aspect16x9",
    videoepisode: "Episodio 8",
    uri: "./",
    title: "A semanas de convertirse en mamá Fernanda Castillo",
    videodate: "Jun. 19.2020",
    show: "El Dragón",
    social: [],
    videodescription:
        "La cuenta regresiva para que Fernanda Castillo y Erik Hayser debuten como papás está por arrancar mientras en la recta final de la dulce espera...",
};
export default ItemVideo;
