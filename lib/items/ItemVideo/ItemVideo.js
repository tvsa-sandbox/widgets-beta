import React from "react";
import PropTypes from "prop-types";
import {
    ItemVideoStyles,
    ItemVideoBoxVideoPlayer,
    BoxTimeStyles,
    CaptionBoxStyles,
    ItemVideoText,
    BoxIconsStyles,
    BoxSocial,
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
                        <Icons name="ArrowUp" color="white" />
                        <SocialModal closebtn={false} />
                    </BoxSocial>
                    <BoxSocial variant="Trasparent">
                        <SocialBox />
                    </BoxSocial>
                </BoxTimeStyles>
                <Title variant="h6">El regreso de un guerrero</Title>
                <Text>
                    Mariana Echeverría presume la lujosa joya que Óscar Jiménez le regaló por el
                    nacimiento de su hijo
                </Text>
                <BoxIconsStyles variant="Transparent">
                    <Icons name="LasEstrellas" variant="Inactive" />
                    <Text>El Dragón</Text>
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
