import React from "react";
import styled, { css } from "styled-components";
import { withKnobs } from "@storybook/addon-knobs";

import { Title, Box, Text } from "accessories";

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Box",
};

const BoxContainer = styled(Box)(
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

const BoxDescription = styled(Box)(
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

const BoxTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        padding-bottom: ${theme.space.lg};
    `,
);

const BoxCaption = styled(Text)(
    ({ theme }) => css`
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        line-height: ${theme.lineHeights.llg};
    `,
);

const BoxContent = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        padding-left: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const BoxType = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        max-width: 150px;
        height: 100px;
        background-color: ${theme.colors.Dark};
        margin-bottom: ${theme.space.xxl};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 600px;
        }
    `,
);

const BoxTypeFlex = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        max-width: 150px;
        height: 100px;
        background-color: ${theme.colors.Dark};
        margin-bottom: ${theme.space.xxl};
        margin-left: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 600px;
        }
    `,
);

const BoxTransparent = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        max-width: 200px;
        height: 100px;
        border: 1px #cccccc solid;
    `,
);

const SubTitleBox = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.Light};
        padding: ${theme.space.lg};
    `,
);

const SubTitleTransparent = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.Dark};
        padding: ${theme.space.lg};
    `,
);

const SubTitleText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fbase};
        font-weight: ${theme.fontWeights.bold};
        color: ${theme.colors.graycataloge};
        padding-bottom: ${theme.space.base};
    `,
);

const TextCopy = styled(Text)(
    ({ theme }) => css`
        line-height: ${theme.lineHeights.llg};
        font-size: ${theme.fontSizes.fsm};
    `,
);

export const BOX = () => {
    return (
        <BoxContainer variant="Transparent">
            <BoxDescription variant="Transparent">
                <BoxTitle variant="h2">Box</BoxTitle>
                <BoxCaption>
                    The Box is an element, which can be modified by yourself as you need.
                </BoxCaption>
            </BoxDescription>
            <BoxContent variant="Transparent">
                <BoxDescription variant="Transparent">
                    <SubTitleText variant="h2">Box Solid</SubTitleText>
                    <TextCopy>Box with background color.</TextCopy>
                </BoxDescription>
                <BoxType variant="Solid">
                    <SubTitleBox>Solid</SubTitleBox>
                </BoxType>
                <BoxDescription variant="Transparent">
                    <SubTitleText variant="h2">Box Space</SubTitleText>
                    <TextCopy>Box with space.</TextCopy>
                </BoxDescription>
                <BoxType variant="Space">
                    <SubTitleBox>Space</SubTitleBox>
                </BoxType>
                <BoxDescription variant="Transparent">
                    <SubTitleText variant="h2">Box Transparent</SubTitleText>
                    <TextCopy>Box without background color.</TextCopy>
                </BoxDescription>
                <BoxTransparent variant="Transparent">
                    <SubTitleTransparent>Transparent</SubTitleTransparent>
                </BoxTransparent>
                <BoxDescription variant="Transparent">
                    <SubTitleText variant="h2">Box Flex</SubTitleText>
                    <TextCopy>Wrapper to combine the elements in one single row.</TextCopy>
                </BoxDescription>
                <Box variant="Flex">
                    <BoxType variant="Solid">
                        <SubTitleBox>Flex</SubTitleBox>
                    </BoxType>
                    <BoxTypeFlex variant="Solid">
                        <SubTitleBox>Flex</SubTitleBox>
                    </BoxTypeFlex>
                </Box>
            </BoxContent>
        </BoxContainer>
    );
};
