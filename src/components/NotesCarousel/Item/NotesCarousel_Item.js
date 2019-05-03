import React from "react";
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";

const NotesCarousel_Item = (props) => (

  <div className="NotesCarousel__CarouselThumbContainer WhiteLabel" id={props.id}>
      <div className="NotesCarousel__Item WhiteLabel">

          <div className="NotesCarousel__ItemThumbnail WhiteLabel">
              <div className="NotesCarousel__ItemImageContainer WhiteLabel">
                  <img src={withPrefix("/static/aspect-ratio-images/image2.jpg")} className="NotesCarousel__ItemImage WhiteLabel" />
              </div>
          </div>

          <div className="NotesCarousel__ItemCaption WhiteLabel">
              <div className="NotesCarousel__ItemTitleContainer WhiteLabel">
                  <h2 className="NotesCarousel__ItemTitle WhiteLabel">DANNA Y LOS SÚPERFASHIONS QUEDAN FUERA DE LA COMPETENCIA</h2>
              </div>
              <div className="NotesCarousel__ItemDescriptionContainer WhiteLabel">
                  <span className="NotesCarousel__ItemDescription WhiteLabel">Una noche triste para el escuadrón conformado por Danna, Sofía, Rubén, Mariana y Sergio, quienes por votación quedaron fuera de la competencia de Pequeños Gigantes.</span>
              </div>
          </div>

      </div>
  </div>
);

export default NotesCarousel_Item;
