import React from "react";
import { withPrefix } from "gatsby";

const LeadImage = () => (
    <div className="LeadImage-Inner WhiteLabel">
        <div className="LeadImage__PictureContainer-Inner WhiteLabel">
            <picture>
				<source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-414x311.jpg")} />
				<source media="(min-width: 415px) and (max-widht: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-716x537.jpg")} />
				<source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-818x614.jpg")} />
				<img className="LeadImage__Picture-Inner WhiteLabel" src={withPrefix("/static/aspect-ratio-images/4x3-716x537.jpg")} alt="Test" />
			</picture>
		</div>
		<div className="LeadImage__InfoContainer-Inner WhiteLabel">
			<div className="LeadImage__DescriptionContainer-Inner WhiteLabel">
				<h3 className="LeadImage__Description-Inner WhiteLabel">
					Carlos Rivera llega como coach de La Voz México y aquí te decimos 6 datos curiosos
				</h3>
			</div>
			<div className="LeadImage__TextContainer-Inner WhiteLabel">
				<small className="LeadImage__Text-Inner WhiteLabel">
					Instagram
				</small>
			</div>
		</div>
	</div>
);

export default LeadImage;
