import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Ads from "../../accessories/Ads";
import Anchor from "../../accessories/Anchor";
import GalleryOpenItem from "../../items/GalleryOpenItem";
import {
    PageStyles,
    BoxBodyFull,
    BoxData,
    BoxTitle,
    BoxClose,
    TitleStyles,
    BoxAuthor,
    BoxContainer,
    AuthorStyles,
    TextDescription,
    AdsImageStyles,
    IconClose,
    AdsOpenStyles,
} from "./styles";

const GridGalleryOpen = () => {
    // const { children } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <PageStyles>
            <BoxBodyFull variant="Transparent">
                <BoxContainer variant="Transparent">
                    <BoxClose variant="Transparent">
                        <Anchor href="/" aria-label="Close">
                            <IconClose name="Close" variant="Inactive" />
                        </Anchor>
                    </BoxClose>
                    <BoxTitle variant="Transparent">
                        <TitleStyles variant="h2">
                            Angelique Boyer presume músculos de impacto y revela el secreto para
                            mantenerse en forma
                        </TitleStyles>
                    </BoxTitle>
                    <BoxData variant="Transparent">
                        <TextDescription>
                            Los fieles admiradores de la actriz no solo destacaron su habilidad para
                            la aplicación, también lo bonita que luce
                        </TextDescription>
                    </BoxData>
                    <BoxAuthor variant="Transparent">
                        {ui === "tudn" ? (
                            <AuthorStyles color="gray3">Por: Erik Solís</AuthorStyles>
                        ) : (
                            <AuthorStyles color="gray3">Por: Valeria Contreras N.</AuthorStyles>
                        )}
                    </BoxAuthor>
                </BoxContainer>
                <GalleryOpenItem />
                <AdsOpenStyles>
                    <AdsImageStyles
                        src="https://dummyimage.com/250/cccccc/cccccc.png"
                        alt="ads"
                        width="345"
                        height="50"
                    />
                </AdsOpenStyles>
                <GalleryOpenItem />
                <GalleryOpenItem />
                <GalleryOpenItem />
                <AdsOpenStyles>
                    <AdsImageStyles
                        src="https://dummyimage.com/250/cccccc/cccccc.png"
                        alt="ads"
                        width="345"
                        height="250"
                    />
                </AdsOpenStyles>
                <GalleryOpenItem />
            </BoxBodyFull>
        </PageStyles>
    );
};

export default GridGalleryOpen;
