import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const SuperCardItem = (props) => (

        <div className="SuperCard__CarouselThumbContainer WhiteLabel" id={props.id}>


                <Link to="/" className="SuperCard__Thumbnail WhiteLabel">
                    <div className="SuperCard__ImageContainer WhiteLabel">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="https://staging.televisa.psdops.com/dims4/default/03df249/2147483647/strip/true/crop/1079x1920+0+0/resize/389x692!/quality/90/?url=https%3A%2F%2Fvideoassets-stg.televisa.com%2F301785%2Fsnapshot1556123607247.jpg"/>
                            <source media="(min-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/34feliz.jpg")} />
                            <img className="SuperCard__Image" src={withPrefix("/static/aspect-ratio-images/34feliz2.jpg")} alt="Test" />
                        </picture>
                    </div>
                    <div className="SuperCard__IconContainer WhiteLabel">
                        <div className="SuperCard__Icon Icn_Video WhiteLabel">
                            <span className="Display">
                                Display
                            </span>
                        </div>
                    </div>
                    <div className="SuperCard__LabelContainer WhiteLabel">
                        <span className="SuperCard__Label WhiteLabel">
                            13/20
                        </span>
                    </div>
                </Link>
                <div className="SuperCard__Caption WhiteLabel">
                    <div className="SuperCard__TitleContainer WhiteLabel">
                        <h3 className="SuperCard__Title WhiteLabel">
                            7 Lecciones aprendidas tras usar shorts por una semana
                        </h3>
                    </div>
                    <div className="SuperCard__DescriptionContainer WhiteLabel">
                        <p className="SuperCard__Description WhiteLabel">
                            La fatshionista te invita a unirte al "reto shorts" y te comparte siete cosas que aprendió de esta prenda 
                        </p>
                    </div>
                    <div className="SuperCard__DateContainer WhiteLabel">
                        <time datetime="2018-11-20 20:00" className="SuperCard__Date WhiteLabel">
                            20 de Noviembre
                        </time>
                    </div>
                    <div className="SuperCard__ButtonContainer WhiteLabel">
                        <button className="SuperCard__Button WhiteLabel">
                            Ver contenido
                        </button>
                    </div>
                </div>

        </div>

);

export default SuperCardItem;
