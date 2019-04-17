import React, { Component } from "react";
import Logic from "../Carousel/Logic";
import CardPersonItem from "./Items/CardPerson_Item";

class CardPerson extends Component {

    componentDidMount(){
        const LOGIC = new Logic();
        LOGIC.init = {
            id: "ucy0snoq1tocp",
            isMixed: false,
            moveItems: 1,
        };
    }

    render() {
        return (
            <section className="CardPerson WhiteLabel">
                <div className="CardPerson__TitleContainer WhiteLabel">
                    <h2 className="CardPerson__Title WhiteLabel">
                        Card Person
                    </h2>
                </div>
                <section className="CardPerson__Carousel WhiteLabel" id="Carousel-ucy0snoq1tocp">
                    <div className="CardPerson__CarouselArrow-Previous WhiteLabel" id="Previous-ucy0snoq1tocp">
                        <button id="ArrowPrevious-ucy0snoq1tocp" className="CardPerson__CarouselButton Icn_ArrowLeft WhiteLabel" type="button">
                            <span className="Display">
                                Arrow Previous
                            </span>
                        </button>
                    </div>
                    <div className="CardPerson__CarouselTrack WhiteLabel"  id="Track-ucy0snoq1tocp" >
                        <div className="CardPerson__CarouselThumbnails WhiteLabel" id="ItemList-ucy0snoq1tocp">
                                <CardPersonItem id="item-ucy0snoq1tocp1" />
                                <CardPersonItem id="item-ucy0snoq1tocp1" />
                                <CardPersonItem id="item-ucy0snoq1tocp2" />
                                <CardPersonItem id="item-ucy0snoq1tocp3" />
                                <CardPersonItem id="item-ucy0snoq1tocp4" />
                                <CardPersonItem id="item-ucy0snoq1tocp5" />
                                <CardPersonItem id="item-ucy0snoq1tocp6" />
                                <CardPersonItem id="item-ucy0snoq1tocp7" />
                                <CardPersonItem id="item-ucy0snoq1tocp8" />
                                <CardPersonItem id="item-ucy0snoq1tocp9" />
                                <CardPersonItem id="item-ucy0snoq1tocp10" />
                                <CardPersonItem id="item-ucy0snoq1tocp11" />
                                <CardPersonItem id="item-ucy0snoq1tocp12" />
                                <CardPersonItem id="item-ucy0snoq1tocp13" />
                                <CardPersonItem id="item-ucy0snoq1tocp14" />
                                <CardPersonItem id="item-ucy0snoq1tocp15" />
                                <CardPersonItem id="item-ucy0snoq1tocp16" />
                                <CardPersonItem id="item-ucy0snoq1tocp17" />
                                <CardPersonItem id="item-ucy0snoq1tocp18" />
                                <CardPersonItem id="item-ucy0snoq1tocp19" />
                                <CardPersonItem id="item-ucy0snoq1tocp20" />
                                <CardPersonItem id="item-ucy0snoq1tocp21" />
                                <CardPersonItem id="item-ucy0snoq1tocp22" />
                                <CardPersonItem id="item-ucy0snoq1tocp23" />
                        </div>
                    </div>
                    <div className="CardPerson__CarouselArrow-Next WhiteLabel" id="Next-ucy0snoq1tocp">
                        <button className="CardPerson__CarouselButton Icn_ArrowRight WhiteLabel" type="button" id="ArrowNext-ucy0snoq1tocp" >
                            <span className="Display">
                                Arrow Next
                            </span>
                        </button>
                    </div>
                </section>
            </section>
        );
    }
}

export default CardPerson;
