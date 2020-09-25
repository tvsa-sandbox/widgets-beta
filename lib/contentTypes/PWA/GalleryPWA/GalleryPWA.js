import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import Layout from "../../../layout";
import ItemCarousel from "../../../items/ItemCarousel";
// import { Multicontent } from "../../accessories";
import {
    PageStyles,
    BoxBodyFull,
    BoxData,
    BoxTitle,
    TitleStyles,
    BoxAuthor,
    BoxContainer,
    AuthorStyles,
    TimeStyles,
    TextDescription,
    LabelStyles,
} from "./styles";
import { ContentCarouselThumbStyles } from "../../../widgets/ContentCarousel/styles";
import ContentCarousel from "../../../widgets/ContentCarouselPWA";
import GalleryItemPWA from "../../../items/GalleryItemPWA";

const GalleryPWA = props => {
    const { slides, items } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <Layout breadcrumbs={[]}>
            <PageStyles>
                <BoxBodyFull variant="Transparent">
                    <BoxContainer variant="Transparent">
                        <LabelStyles href="./" aria-label="seccion">
                            Galería
                        </LabelStyles>
                        <BoxTitle variant="Transparent">
                            <TitleStyles variant="h2">
                                Este es el regalo ideal según su signo zodiacal
                            </TitleStyles>
                        </BoxTitle>
                        <BoxData variant="Transparent">
                            <TextDescription>
                                Cada signo zodiacal tiene una personalidad bien definida y gustos
                                también. Así que si no sabes qué regalarle a alguien ¡acá te decimos
                                cuál es el regalo ideal para cada signo zodiacal!
                            </TextDescription>
                        </BoxData>
                        <BoxAuthor variant="Transparent">
                            {ui === "tudn" ? (
                                <AuthorStyles color="gray3">Por: Erik Solís</AuthorStyles>
                            ) : (
                                <AuthorStyles>Por: Erik Solís</AuthorStyles>
                            )}

                            {ui === "tudn" ? (
                                <TimeStyles variant="Airtime" color="gray3">
                                    julio 27, 2020 - 15:15
                                </TimeStyles>
                            ) : (
                                <TimeStyles variant="Airtime">Agosto 27, 2020 - 15:15</TimeStyles>
                            )}
                        </BoxAuthor>
                    </BoxContainer>
                    <GalleryItemPWA image={slides} />
                    <GalleryItemPWA image={slides} />
                    <GalleryItemPWA image={slides} />
                    <GalleryItemPWA image={slides} />
                    <GalleryItemPWA image={slides} />
                    <GalleryItemPWA image={slides} />
                    <GalleryItemPWA image={slides} />
                    <GalleryItemPWA image={slides} />
                    <GalleryItemPWA image={slides} />
                    <ContentCarousel>
                        <ContentCarouselThumbStyles>
                            <ItemCarousel ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarousel ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarousel ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarousel ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarousel ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                    </ContentCarousel>
                </BoxBodyFull>
            </PageStyles>
        </Layout>
    );
};

GalleryPWA.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.shape({})),
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

GalleryPWA.defaultProps = {
    slides: [],
    items: [],
};

export default GalleryPWA;
