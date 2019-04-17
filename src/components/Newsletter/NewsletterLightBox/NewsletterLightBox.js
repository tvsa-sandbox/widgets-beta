import React from "react";
import { Link } from "gatsby";
import { withPrefix } from "gatsby";

const NewsletterLightBox = () => (
    <div className="NewsletterLightBox WhiteLabel">
        <div className="NewsletterLightBox__Container WhiteLabel">
            <div className="NewsletterLightBox__CloseButtonContainer WhiteLabel">
                <div className="NewsletterLightBox__CloseButton Icn_Close WhiteLabel">
                    <span className="Display">
                        Close
                    </span>
                </div>
            </div>
            <div className="NewsletterLightBox__ImageContainer WhiteLabel">
                <source media="(min-width: 0px) and (max-width: 414px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                <source media="(min-width: 415px) and (max-width: 768px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                <source media="(min-width: 769px)" srcSet={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} />
                <img src={withPrefix("/static/aspect-ratio-images/16x9-Graphic3-209x114.png")} className="NewsletterLightBox__Image WhiteLabel" alt="test"/>
            </div>
            <div className="NewsletterLightBox__DescriptionContainer WhiteLabel">
                <span className="NewsletterLightBox__Description WhiteLabel">
                    Recibe todos los detalles de tu programación favorita directamente en tu Bandeja de Entrada
                </span>
            </div>
            <form className="NewsletterLightBox__FormContainer WhiteLabel">
                <div className="NewsletterLightBox__InputNameContainer WhiteLabel">
                    <p className="NewsletterLightBox__InputName WhiteLabel">
                        Nombre
                    </p>
                    <input type="text" name="" placeholder="ingresa tu nombre" className="NewsletterLightBox__InputNamePlaceHolder WhiteLabel" />
                </div>
                <div className="NewsletterLightBox__InputMailContainer WhiteLabel">
                    <p className="NewsletterLightBox__InputMail WhiteLabel">
                        Email
                    </p>
                    <input type="text" name="" placeholder="@ingresa tu email" className="NewsletterLightBox__InputMailPlaceHolder WhiteLabel" />
                </div>
            </form>
            <div className="NewsletterLightBox__ConditionsContainer WhiteLabel">
                <input type="checkbox" id="cbox1" value="first_checkbox" className="NewsletterLightBox__ConditionsCheckbox WhiteLabel" />
                    <div className="NewsletterLightBox__ConditionsTextContainer WhiteLabel">
                        <p className="NewsletterLightBox__ConditionsText WhiteLabel">
                            He leído y acepto los
                            <Link className="NewsletterLightBox__ConditionsAnchor WhiteLabel" to="/">
                                Términos y Condiciones
                            </Link>
                        </p>
                    </div>
                <div className="NewsletterLightBox__PrivacyText WhiteLabel">
                    Lee nuestro
                    <Link className="NewsletterLightBox__PrivacyAnchor WhiteLabel" to="/">
                         Aviso de Privacidad
                    </Link>
                </div>
            </div>
            <div className="NewsletterLightBox__SendButtonContainer WhiteLabel">
                <button className="NewsletterLightBox__SendButton WhiteLabel">
                    Enviar
                </button>
            </div>
        </div>
    </div>
);

export default NewsletterLightBox;
