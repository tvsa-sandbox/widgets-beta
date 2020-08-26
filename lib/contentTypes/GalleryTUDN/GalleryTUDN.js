import React from "react";
import Layout from "../../layout";
import ItemCarousel from "../../items/ItemCarousel";
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
} from "./styles";
import { ContentCarouselThumbStyles } from "../../widgets/ContentCarousel/styles";
import ContentCarousel from "../../widgets/ContentCarousel";
import GalleryItem from "../../items/GalleryItem";

const GalleryTUDN = props => {
    // const { children } = props;
    return (
        <Layout ui="tudn">
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
                            <IconFacebook name="Facebook" variant="Transparent" />
                            <IconTwitter name="Twitter" variant="Transparent" />
                            <BoxIconWhats variant="Transparent">
                                <IconWhatsApp name="WhatsApp" variant="Transparent" />
                            </BoxIconWhats>
                            <IconEmail name="Email" variant="Transparent" />
                        </BoxIcons>

                        <BoxAuthor variant="Transparent">
                            <AuthorStyles>Por: Erik Solís</AuthorStyles>
                            <TimeStyles variant="Airtime">julio 27, 2020 - 15:15</TimeStyles>
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

export default GalleryTUDN;
