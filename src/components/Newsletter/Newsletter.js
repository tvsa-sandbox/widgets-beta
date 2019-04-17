import React from "react";
import NewsletterLightBox from "./NewsletterLightBox/NewsletterLightBox";

const NewsletterBox = () => (
    <section className="NewsletterBox WhiteLabel">
        <div className="NewsletterBox__Container WhiteLabel">
            <div className="NewsletterBox__TitleContainer WhiteLabel">
                <h2 className="NewsletterBox__Title WhiteLabel">
                    ¡Recibe lo mejor de nuestro contenido directo a tu correo!
                </h2>
            </div>
            <div className="NewsletterBox__RegisterContainer WhiteLabel">
                <button className="NewsletterBox__Register WhiteLabel">
                    Regístrate
                </button>
            </div>
        </div>
        <NewsletterLightBox />
    </section>
);

export default NewsletterBox;
