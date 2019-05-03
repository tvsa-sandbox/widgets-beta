import React from "react";
import { Link } from "gatsby";
import Logic from "../Carousel/Logic";
import { withPrefix } from "gatsby-link";

const NotesCarousel = () => (
  <section className="NotesCarousel WhiteLabel">
      <div className="NotesCarousel__Carousel WhiteLabel">
          <div className="NotesCarousel__CarouselTrack WhiteLabel">
              <div className="NotesCarousel__CarouselThumbnails WhiteLabel">
                  <div className="NotesCarousel__CarouselThumbContainer WhiteLabel">
                      <div className="NotesCarousel__Item WhiteLabel">
                          <div className="NotesCarousel__ItemThumbnail WhiteLabel">
                                <div className="NotesCarousel__ItemImageContainer WhiteLabel">
                                    <img src={withPrefix("/static/aspect-ratio-images/image1.jpg")} className="NotesCarousel__ItemImage WhiteLabel" />
                                </div>
                          </div>
                          <div className="NotesCarousel__ItemCaption WhiteLabel">
                              <div className="NotesCarousel__ItemTitleContainer WhiteLabel">
                                  <h2 className="NotesCarousel__ItemTitle">DANNA Y LOS SÚPERFASHIONS QUEDAN FUERA DE LA COMPETENCIA</h2>
                              </div>
                              <div className="NotesCarousel__ItemDescriptionContainer WhiteLabel">
                                  <span className="NotesCarousel__ItemDescription WhiteLabel">Una noche triste para el escuadrón conformado por Danna, Sofía, Rubén, Mariana y Sergio, quienes por votación quedaron fuera de la competencia de Pequeños Gigantes.</span>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="NotesCarousel__CarouselThumbContainer WhiteLabel">
                      <div className="NotesCarousel__Item WhiteLabel">
                          <div className="NotesCarousel__ItemThumbnail WhiteLabel">
                                <div className="NotesCarousel__ItemImageContainer WhiteLabel">
                                    <img src={withPrefix("/static/aspect-ratio-images/image1.jpg")} className="NotesCarousel__ItemImage WhiteLabel" />
                                </div>
                          </div>
                          <div className="NotesCarousel__ItemCaption WhiteLabel">
                              <div className="NotesCarousel__ItemTitleContainer WhiteLabel">
                                  <h2 className="NotesCarousel__ItemTitle WhiteLabel">Muere Stefanie Sherk, esposa del actor Demián Bichir </h2>
                              </div>
                              <div className="NotesCarousel__ItemDescriptionContainer WhiteLabel">
                                  <span className="NotesCarousel__ItemDescription WhiteLabel">Muere Stefanie Sherk, esposa del actor Demián Bichir </span>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="NotesCarousel__CarouselThumbContainer WhiteLabel">
                      <div className="NotesCarousel__Item WhiteLabel">
                          <div className="NotesCarousel__ItemThumbnail WhiteLabel">
                                <div className="NotesCarousel__ItemImageContainer WhiteLabel">
                                    <img src={withPrefix("/static/aspect-ratio-images/image1.jpg")} className="NotesCarousel__ItemImage WhiteLabel" />
                                </div>
                          </div>
                          <div className="NotesCarousel__ItemCaption WhiteLabel">
                              <div className="NotesCarousel__ItemTitleContainer WhiteLabel">
                                  <h2 className="NotesCarousel__ItemTitle WhiteLabel">Muere Stefanie Sherk, esposa del actor Demián Bichir </h2>
                              </div>
                              <div className="NotesCarousel__ItemDescriptionContainer WhiteLabel">
                                  <span className="NotesCarousel__ItemDescription WhiteLabel">Muere Stefanie Sherk, esposa del actor Demián Bichir </span>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>



          <div className="NotesCarousel__CarouselArrowsContainer">

          <div className="NotesCarousel__CarouselArrow-Previous WhiteLabel" id="Previous-ucy0snoq1tocc">
                    <button id="ArrowPrevious-ucy0snoq1tocc" className="NotesCarousel__CarouselButton Icn_ArrowLeft WhiteLabel" type="button">
                        <span className="Display">
                            Arrow Previous
                        </span>
                    </button>
          </div>



          <div className="NotesCarousel__CarouselArrow-Next WhiteLabel"  id="Next-ucy0snoq1tocc">
                      <button className="NotesCarousel__CarouselButton Icn_ArrowRight WhiteLabel" type="button" id="ArrowNext-ucy0snoq1tocc" >
                          <span className="Display">
                              Arrow Next
                          </span>
                      </button>
          </div>


          </div>


      </div>

  </section>

);

export default NotesCarousel;
