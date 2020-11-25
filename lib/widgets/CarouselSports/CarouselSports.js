import React from "react";
import PropTypes from "prop-types";
import Carousel from "../../accessories/Carousel";
import {
    CarouselSportsStyles,
    CarouselSportsTitleStyles,
    CarouselSportsThumb,
    CarouselSportsItems,
    CarouselSportsBox,
    CarouselSportsIcon,
} from "./styles";

const CarouselSports = props => {
    const { sportname, title } = props;
    return (
        <CarouselSportsStyles {...props}>
            <Carousel>
                <CarouselSportsBox variant="Transparent">
                    <CarouselSportsTitleStyles variant="h2"> {title}</CarouselSportsTitleStyles>
                </CarouselSportsBox>
                <CarouselSportsThumb>
                    <CarouselSportsItems href="/" variant="Transparent">
                        <CarouselSportsIcon name="Cloud" variant="Outline" />
                        {sportname}
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Transparent">
                        <CarouselSportsIcon name="Cloud" variant="Outline" />
                        {sportname}
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Transparent">
                        <CarouselSportsIcon name="Cloud" variant="Outline" />
                        {sportname}
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Transparent">
                        <CarouselSportsIcon name="Cloud" variant="Outline" />
                        {sportname}
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Transparent">
                        <CarouselSportsIcon name="Cloud" variant="Outline" />
                        {sportname}
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Transparent">
                        <CarouselSportsIcon name="Cloud" variant="Outline" />
                        {sportname}
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Transparent">
                        <CarouselSportsIcon name="Cloud" variant="Outline" />
                        {sportname}
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Transparent">
                        <CarouselSportsIcon name="Cloud" variant="Outline" />
                        {sportname}
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Transparent">
                        <CarouselSportsIcon name="Cloud" variant="Outline" />
                        {sportname}
                    </CarouselSportsItems>
                    <CarouselSportsItems href="/" variant="Transparent">
                        <CarouselSportsIcon name="Cloud" variant="Outline" />
                        {sportname}
                    </CarouselSportsItems>
                </CarouselSportsThumb>
            </Carousel>
        </CarouselSportsStyles>
    );
};

CarouselSports.propTypes = {
    sportname: PropTypes.string,
    title: PropTypes.string,
};

CarouselSports.defaultProps = {
    sportname:
        "Deportes",
    title: "All Sports",
};

export default CarouselSports;

