import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Title, Text, Box, Info, Time, Anchor } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Typography",
};

const BoxTypography = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin: auto;
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const TypographyTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
    `,
);

const TypographyDescription = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin-top: ${theme.space.lg};
        margin-bottom: ${theme.space.xxl};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const CaptionTypography = styled(Text)(
    ({ theme }) => css`
        padding-top: ${theme.space.lg};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        line-height: ${theme.lineHeights.llg};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const TypographyContainer = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: ${theme.space.xxl};
        margin-right: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const BoxText = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        max-width: 310px;
        margin-left: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 500px;
        }
    `,
);

const BoxTextTitle = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        max-width: 310px;
        margin-left: ${theme.space.lg};
        margin-bottom: ${theme.space.xxl};
        margin-top: ${theme.space.xxl};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 500px;
        }
    `,
);

const SubTitleText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fbase};
        font-weight: ${theme.fontWeights.bold};
        color: ${theme.colors.graycataloge};
        padding-bottom: ${theme.space.base};
        padding-left: ${theme.space.lg};
    `,
);

const BoxStyle = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: ${theme.space.xxl};
        margin-top: ${theme.space.xxl};
    `,
);

const TitleType = styled(Title)(({ theme }) => css``);

const TextCopy = styled(Text)(
    ({ theme }) => css`
        line-height: ${theme.lineHeights.llg};
        font-size: ${theme.fontSizes.fsm};
    `,
);

const FontContainer = styled(Box)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.xl3};
    `,
);

const ScaleContainer = styled(Box)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.xl3};
        margin-top: ${theme.space.xl3};
    `,
);

const TextContainer = styled(Box)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.xl3};
        margin-top: ${theme.space.xl3};
    `,
);

export const TITLE = () => {
    const name = text("Titulo", "Title");
    const namelabel = text("Etiqueta", "Label");
    return (
        <BoxTypography variant="Transparent">
            <FontContainer variant="Transparent">
                <TypographyDescription variant="Transparent">
                    <TypographyTitle variant="h2">Typography</TypographyTitle>
                    <CaptionTypography>
                        The fonts will make reading easier and will help with the general structure
                        of the interface.
                    </CaptionTypography>
                </TypographyDescription>
                <TypographyContainer variant="Transparent">
                    <BoxStyle variant="Transparent">
                        <SubTitleText variant="h2">Main Typeface</SubTitleText>
                        <BoxText variant="Transparent">
                            <TextCopy>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.
                            </TextCopy>
                        </BoxText>
                    </BoxStyle>

                    <BoxStyle variant="Transparent">
                        <SubTitleText variant="h2">Secondary Typeface</SubTitleText>
                        <BoxText variant="Transparent">
                            <TextCopy>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.
                            </TextCopy>
                        </BoxText>
                    </BoxStyle>

                    <BoxStyle variant="Transparent">
                        <SubTitleText variant="h2">"System Typeface"</SubTitleText>
                        <BoxText variant="Transparent">
                            <TextCopy>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.
                            </TextCopy>
                        </BoxText>
                    </BoxStyle>
                </TypographyContainer>
            </FontContainer>

            <ScaleContainer variant="Transparent">
                <TypographyDescription variant="Transparent">
                    <TypographyTitle variant="h2">Headings</TypographyTitle>
                    <CaptionTypography>
                        Headings are the most prominent typographic elements. They are the first
                        items that users read. They must attract attention and give information in
                        the most efficient way. The h1 heading is the most prominent heading style
                        and the h6 heading is the least.
                    </CaptionTypography>
                </TypographyDescription>
                <TypographyContainer variant="Transparent">
                    <BoxTextTitle variant="Transparent">
                        <TitleType variant="h1">H1 - {name}</TitleType>
                    </BoxTextTitle>

                    <BoxTextTitle variant="Transparent">
                        <TitleType variant="h2">H2 - {name} </TitleType>
                    </BoxTextTitle>

                    <BoxTextTitle variant="Transparent">
                        <TitleType variant="h3">H3 - {name} </TitleType>
                    </BoxTextTitle>

                    <BoxTextTitle variant="Transparent">
                        <TitleType variant="h4">H4 - {name} </TitleType>
                    </BoxTextTitle>

                    <BoxTextTitle variant="Transparent">
                        <TitleType variant="h5">H5 - {name} </TitleType>
                    </BoxTextTitle>

                    <BoxTextTitle variant="Transparent">
                        <TitleType variant="h6">H6 - {name} </TitleType>
                    </BoxTextTitle>
                </TypographyContainer>
            </ScaleContainer>

            <TextContainer variant="Transparent">
                <TypographyDescription variant="Transparent">
                    <TypographyTitle variant="h2">Text</TypographyTitle>
                    <CaptionTypography>Different types of text.</CaptionTypography>
                </TypographyDescription>
                <TypographyContainer variant="Transparent">
                    <BoxStyle variant="Transparent">
                        <SubTitleText variant="h2">Text Paragraph</SubTitleText>
                        <BoxText variant="Transparent">
                            <TextCopy>
                                This is a sample of the actual 120 characters accepted in a
                                description in the user interface.
                            </TextCopy>
                        </BoxText>
                    </BoxStyle>

                    <BoxStyle variant="Transparent">
                        <SubTitleText variant="h2">Info</SubTitleText>
                        <BoxText variant="Transparent">
                            <Info>Author: José de Jesus</Info>
                        </BoxText>
                    </BoxStyle>

                    <BoxStyle variant="Transparent">
                        <SubTitleText variant="h2">Airtime</SubTitleText>
                        <BoxText variant="Transparent">
                            <Time variant="Airtime">July 28 ,2020</Time>
                        </BoxText>
                    </BoxStyle>

                    <BoxStyle variant="Transparent">
                        <SubTitleText variant="h2">Duration</SubTitleText>
                        <BoxText variant="Transparent">
                            <Time variant="Duration">24:00</Time>
                        </BoxText>
                        <BoxText variant="Transparent">
                            <Time variant="DurationLight">24:00</Time>
                        </BoxText>
                    </BoxStyle>

                    <BoxStyle variant="Transparent">
                        <SubTitleText variant="h2">Counter</SubTitleText>
                        <BoxText variant="Transparent">
                            <Time>10/10</Time>
                        </BoxText>
                    </BoxStyle>

                    <BoxStyle variant="Transparent">
                        <SubTitleText variant="h2">Label</SubTitleText>
                        <BoxText variant="Transparent">
                            <Text variant="Label">{namelabel}</Text>
                        </BoxText>
                    </BoxStyle>
                </TypographyContainer>
            </TextContainer>
        </BoxTypography>
    );
};
