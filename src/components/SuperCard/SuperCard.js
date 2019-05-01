import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const SuperCard = () => (
    <section className="SuperCard WhiteLabel">
        <Link to="/" className="SuperCard__Thumbnail WhiteLabel">
            <div className="SuperCard__ImageContainer WhiteLabel">
                <picture>
                    <source media="(min-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/9x16-389x692.jpg")} />
                    <source media="(min-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/3x4-414x552.jpg")} />
                    <img className="SuperCard__Image" src={withPrefix("/static/aspect-ratio-images/3x4-320x426.jpg")} alt="Test" />
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
                    Label
                </span>
            </div>
        </Link>
        <div className="SuperCard__Caption WhiteLabel">
            <div className="SuperCard__TitleContainer WhiteLabel">
                <h3 className="SuperCard__Title WhiteLabel">
                    “No, no soy yo la que lo está cargando”: Nuevos detalles del embarazo de Joy Huerta
                </h3>
            </div>
            <div className="SuperCard__DescriptionContainer WhiteLabel">
                <p className="SuperCard__Description WhiteLabel">
                    La cantante fue cuestionada si es ella quien lleva en el vientre a la bebé que espera junto a su esposa y dijo que pronto dará más noticias
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
    </section>
);

export default SuperCard;
