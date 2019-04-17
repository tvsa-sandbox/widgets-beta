import React from "react";
import { withPrefix } from "gatsby";

const Image = () => (
            <aside className="Image WhiteLabel">
                <div className="Image__PictureContainer WhiteLabel">
					<picture>
						<source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-414x311.jpg")} />
						<source media="(min-width: 415px) and (max-widht: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-716x537.jpg")} />
						<source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/4x3-818x614.jpg")} />
						<img className="Image__Picture WhiteLabel" src={withPrefix("/static/aspect-ratio-images/4x3-716x537.jpg")} alt="Test" />
					</picture>
				</div>
				<div className="Image__InfoContainer WhiteLabel">
					<div className="Image__DescriptionContainer WhiteLabel">
						<h3 className="Image__Description WhiteLabel">
							Carlos Rivera llega como coach de La Voz México y aquí te decimos 6 datos curiosos
						</h3>
					</div>
					<div className="Image__TextContainer">
						<small className="Image__Text WhiteLabel">
							Instagram
						</small>
					</div>
				</div>
			</aside>
);

export default Image;
