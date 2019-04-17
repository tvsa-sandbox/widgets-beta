import React, { Component } from "react";
import Logic from "../Carousel/Logic";
import ProfileFollowItem from "./Items/ProfileFollow_Item";

class ProfileFollow extends Component {
    componentDidMount(){
        const LOGIC = new Logic();
        LOGIC.init = {
            id: "ucy0snoq1topf",
            isMixed: false,
            moveItems: 1,
        };
    }
    render() {
        return (
            <section className="ProfileFollow WhiteLabel">
                <div className="ProfileFollow__TitleContainer WhiteLabel">
                    <h2 className="ProfileFollow__Title WhiteLabel">
                        Profile Follow Title
                    </h2>
                </div>
                <section className="ProfileFollow__Carousel WhiteLabel"  id="Carousel-ucy0snoq1topf" >
                    <div className="ProfileFollow__CarouselArrow-Previous WhiteLabel"  id="Previous-ucy0snoq1topf" >
                        <button className="ProfileFollow__CarouselButton Icn_ArrowLeft WhiteLabel" type="button" id="ArrowPrevious-ucy0snoq1topf" >
                            <span className="Display">
                                Arrow Previous
                            </span>
                        </button>
                    </div>
                    <div className="ProfileFollow__CarouselTrack WhiteLabel"  id="Track-ucy0snoq1topf" >
                        <div className="ProfileFollow__CarouselThumbnails WhiteLabel"  id="ItemList-ucy0snoq1topf" >
                                <ProfileFollowItem id="item-ucy0snoq1topf1" />
                                <ProfileFollowItem id="item-ucy0snoq1topf2" />
                                <ProfileFollowItem id="item-ucy0snoq1topf3" />
                                <ProfileFollowItem id="item-ucy0snoq1topf4" />
                                <ProfileFollowItem id="item-ucy0snoq1topf5" />
                                <ProfileFollowItem id="item-ucy0snoq1topf6" />
                                <ProfileFollowItem id="item-ucy0snoq1topf7" />
                                <ProfileFollowItem id="item-ucy0snoq1topf8" />
                                <ProfileFollowItem id="item-ucy0snoq1topf9" />
                                <ProfileFollowItem id="item-ucy0snoq1topf10" />
                                <ProfileFollowItem id="item-ucy0snoq1topf11" />
                                <ProfileFollowItem id="item-ucy0snoq1topf12" />
                                <ProfileFollowItem id="item-ucy0snoq1topf13" />
                                <ProfileFollowItem id="item-ucy0snoq1topf14" />
                                <ProfileFollowItem id="item-ucy0snoq1topf15" />
                                <ProfileFollowItem id="item-ucy0snoq1topf16" />
                        </div>
                    </div>
                    <div className="ProfileFollow__CarouselArrow-Next WhiteLabel" id="Next-ucy0snoq1topf" >
                        <button className="ProfileFollow__CarouselButton Icn_ArrowRight WhiteLabel" type="button"  id="ArrowNext-ucy0snoq1topf" >
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

export default ProfileFollow;
