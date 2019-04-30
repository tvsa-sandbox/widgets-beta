import React from "react";
import { Link } from "gatsby";

const Privacy = () => (
    <section className="Privacy WhiteLabel">
        <div className="Privacy__Container WhiteLabel">
            <div className="Privacy__TitleContainer WhiteLabel">
                <h2 className="Privacy__Title WhiteLabel">
                    USO DE COOKIES
                </h2>
            </div>
            <div className="Privacy__CloseContainer WhiteLabel">
                <button className="Privacy__Close Icn_Close WhiteLabel">
                    <span className="Display">
                        Close
                    </span>
                </button>
            </div>
            <div className="Privacy__DescriptionContainer WhiteLabel">
                <p className="Privacy__Description WhiteLabel">
                    Este sitio utiliza cookies para ayudarnos a mejorar tu experiencia cada vez que lo visities.
                    Al continuar navegando en él, estarás aceptando su uso.
                    Podrás deshabilitar accediendo a la configuración de tu navegador.
                </p>
            </div>
            <div className="Privacy__ShowMoreContainer WhiteLabel">
                <Link className="Privacy__ShowMore WhiteLabel">
                    VER MÁS
                </Link>
            </div>
            <div className="Privacy__ButtonContainer WhiteLabel">
                <button className="Privacy__Button WhiteLabel">
                    OK
                </button>
            </div>
        </div>
    </section>
);

export default Privacy;
