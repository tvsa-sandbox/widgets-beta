import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Layout from "../../layout";
import ItemCarousel from "../../items/ItemCarousel";
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
    BoxIcons,
    BoxIconWhats,
    IconFacebook,
    IconWhatsApp,
    IconTwitter,
    IconEmail,
    LabelStyles,
    AnchorIcon,
} from "./styles";
import { ContentCarouselThumbStyles } from "../../widgets/ContentCarousel/styles";
import ContentCarousel from "../../widgets/ContentCarousel";
import GalleryItem from "../../items/GalleryItem";

const Gallery = props => {
    // const { children } = props;
    const themeContext = useContext(ThemeContext);
    return (
        <Layout>
            <PageStyles>
                <BoxBodyFull variant="Transparent">
                    <BoxContainer variant="Transparent">
                        <LabelStyles href="./" aria-label="seccion">
                            Galleria
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
                        <BoxIcons variant="Transparent">
                            <AnchorIcon href="./">
                                <IconFacebook name="Facebook" variant="Transparent" />
                            </AnchorIcon>
                            <AnchorIcon href="./">
                                <IconTwitter name="Twitter" variant="Transparent" />
                            </AnchorIcon>
                            <BoxIconWhats variant="Transparent">
                                <AnchorIcon href="./">
                                    <IconWhatsApp name="WhatsApp" variant="Transparent" />
                                </AnchorIcon>
                            </BoxIconWhats>
                            <AnchorIcon href="./">
                                <IconEmail name="Email" variant="Transparent" />
                            </AnchorIcon>
                        </BoxIcons>

                        <BoxAuthor variant="Transparent">
                            {themeContext.ui.name === "tudn" ? (
                                <AuthorStyles color="gray3">Por: Erik Solís</AuthorStyles>
                            ) : (
                                <AuthorStyles>Por: Erik Solís</AuthorStyles>
                            )}

                            {themeContext.ui.name === "tudn" ? (
                                <TimeStyles variant="Airtime" color="gray3">
                                    julio 27, 2020 - 15:15
                                </TimeStyles>
                            ) : (
                                <TimeStyles variant="Airtime">Agosto 27, 2020 - 15:15</TimeStyles>
                            )}
                        </BoxAuthor>
                    </BoxContainer>
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <ContentCarousel>
                        <ContentCarouselThumbStyles>
                            <ItemCarousel />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarousel />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarousel />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarousel />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarousel />
                        </ContentCarouselThumbStyles>
                    </ContentCarousel>
                </BoxBodyFull>
            </PageStyles>
        </Layout>
    );
};

export default Gallery;
