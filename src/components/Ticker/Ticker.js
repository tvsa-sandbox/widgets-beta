import React, { Component } from "react";
import TickerEvents from "./TickerEvents";
import TickerEventsLink from "./TickerEventsLink";
import Logic from "../Carousel/Logic";

class Ticker extends Component {
	componentDidMount(){
		const LOGIC = new Logic();
		LOGIC.init = {
			id: "ucy0snoq1tot1",
			isMixed: false,
			moveItems: 1,
		};
	}

	render() {
		return (
			<section className="Ticker WhiteLabel">
				<div className="Ticker__Container WhiteLabel">
					<div className="Ticker__TitleContainer WhiteLabel">
						<h2 className="Ticker__Title WhiteLabel">
							Próximos Estrenos
						</h2>
					</div>
					<div className="Ticker__CarouselContainer WhiteLabel" id="Carousel-ucy0snoq1tot1">
						<div className="Ticker__Carousel WhiteLabel">
							<div className="Ticker__CarouselArrow-Previous WhiteLabel" id="Previous-ucy0snoq1tot1">
								<button className="Ticker__CarouselButton Icn_ArrowLeft WhiteLabel" id="ArrowPrevious-ucy0snoq1tot1">
									<span className="Display">
										Arrow Previous
									</span>
								</button>
							</div>
							<div className="Ticker__CarouselTrack WhiteLabel">
								<div className="Ticker__CarouselThumbnails WhiteLabel" id="ItemList-ucy0snoq1tot1">
									<div className="Ticker__ThumbContainer WhiteLabel">
										<TickerEvents />
									</div>
									<div className="Ticker__ThumbContainer WhiteLabel" id="item-ucy0snoq1tot11">
										<TickerEventsLink />
									</div>
									<div className="Ticker__ThumbContainer WhiteLabel" id="item-ucy0snoq1tot12">
										<TickerEventsLink />
									</div>
									<div className="Ticker__ThumbContainer WhiteLabel" id="item-ucy0snoq1tot13">
										<TickerEvents />
									</div>
									<div className="Ticker__ThumbContainer WhiteLabel" id="item-ucy0snoq1tot14">
										<TickerEvents />
									</div>
									<div className="Ticker__ThumbContainer WhiteLabel" id="item-ucy0snoq1tot15">
										<TickerEvents />
									</div>
									<div className="Ticker__ThumbContainer WhiteLabel" id="item-ucy0snoq1tot16">
										<TickerEventsLink />
									</div>
									<div className="Ticker__ThumbContainer WhiteLabel" id="item-ucy0snoq1tot17">
										<TickerEventsLink />
									</div>
									<div className="Ticker__ThumbContainer WhiteLabel" id="item-ucy0snoq1tot18">
										<TickerEvents />
									</div>
									<div className="Ticker__ThumbContainer WhiteLabel" id="item-ucy0snoq1tot19">
										<TickerEvents />
									</div>
								</div>
							</div>
							<div className="Ticker__CarouselArrow-Next WhiteLabel" id="Next-ucy0snoq1tot1">
								<button className="Ticker__CarouselButton Icn_ArrowRight WhiteLabel" id="ArrowNext-ucy0snoq1tot1">
									<span className="Display">
										Arrow Next
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Ticker;
