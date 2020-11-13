import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Carousel } from "../../accessories";
import { Favorite, ContentCarousel } from "../../widgets";
import { ThemeContext } from "styled-components";
import { ContentCarouselThumbStyles } from "../../widgets/ContentCarousel/styles";
import { EpisodeItem, ChapterItem } from "../../items";
import { HomeVideoGrid, PageStyles } from "./styles";
import Layout from "../../layoutcv";

const HomeVideo = props => {
    const { imgcarrusel, imgitem } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <Layout breadcrumbs={[]}>
            <PageStyles>
                <Favorite />
                <HomeVideoGrid>
                    <ChapterItem src={imgitem} />
                    <ChapterItem src={imgitem} />
                    <ChapterItem src={imgitem} />
                    <ChapterItem src={imgitem} />
                    <ChapterItem src={imgitem} />
                    <ChapterItem src={imgitem} />
                    <ChapterItem src={imgitem} />
                    <ChapterItem src={imgitem} />
                </HomeVideoGrid>
                <ContentCarousel title="Una familia de diez" titlecolor="gray" titlevariant="h2">
                    <Carousel arrow="Back" arrowcolor="white" arrowsize="40">
                        <ContentCarouselThumbStyles>
                            <EpisodeItem ratio="aspect16x9" image={imgcarrusel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <EpisodeItem ratio="aspect16x9" image={imgcarrusel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <EpisodeItem ratio="aspect16x9" image={imgcarrusel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <EpisodeItem ratio="aspect16x9" image={imgcarrusel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <EpisodeItem ratio="aspect16x9" image={imgcarrusel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <EpisodeItem ratio="aspect16x9" image={imgcarrusel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <EpisodeItem ratio="aspect16x9" image={imgcarrusel} />
                        </ContentCarouselThumbStyles>
                    </Carousel>
                </ContentCarousel>
                <ContentCarousel title="Carrousel Video" titlecolor="gray" titlevariant="h2">
                    <Carousel arrow="Back" arrowcolor="white" arrowsize="40">
                        <ContentCarouselThumbStyles>
                            <EpisodeItem ratio="aspect16x9" image={imgcarrusel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <EpisodeItem ratio="aspect16x9" image={imgcarrusel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <EpisodeItem ratio="aspect16x9" image={imgcarrusel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <EpisodeItem ratio="aspect16x9" image={imgcarrusel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <EpisodeItem ratio="aspect16x9" image={imgcarrusel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <EpisodeItem ratio="aspect16x9" image={imgcarrusel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <EpisodeItem ratio="aspect16x9" image={imgcarrusel} />
                        </ContentCarouselThumbStyles>
                    </Carousel>
                </ContentCarousel>
            </PageStyles>
        </Layout>
    );
};

HomeVideo.propTypes = {
    imgcarrusel: PropTypes.shape({
        desktop: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
    }),
    imgitem: PropTypes.shape({
        desktop: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string,
        }),
    }),
};

HomeVideo.defaultProps = {
    imgcarrusel: {
        desktop: {
            srcSet: "",
        },
        mobie: {
            srcSet: "",
        },
    },
    imgitem: {},
};

export default HomeVideo;
