import React from "react";
import { Link } from "gatsby";

const Footer = () => (
    <footer className="Footer WhiteLabel">
        <section className="Footer__NetworksMobile WhiteLabel">
            <Link to="/" className="Footer__Logo Icn_TelevisaFull WhiteLabel" href="http://www.televisa.com/">
                <div className="Display">
                    Logo Televisa
                </div>
            </Link>
            <div className="Footer__Selector WhiteLabel">
                <select className="Footer__Networks WhiteLabel">
                    <option value="http://www.televisa.com/">
                        Televisa
                    </option>
                    <option value="https://deportes.televisa.com/">
                        Televisa Deportes
                    </option>
                    <option value="http://noticieros.televisa.com/">
                        Noticieros Televisa
                    </option>
                    <option value="http://www.televisa.com/gala-tv">
                        Gala TV
                    </option>
                    <option value="http://noticieros.televisa.com/">
                        FOROtv
                    </option>
                    <option value="http://www.televisa.com/canal5/">
                        Canal 5
                    </option>
                    <option value="http://www.lasestrellas.tv/cea/">
                        CEA
                    </option>
                </select>
            </div>
        </section>
        <section className="Footer__NetworksDesktop WhiteLabel">
            <Link to="/" className="Footer__NetworkLink Icn_Televisa WhiteLabel">
                <span className="Display">
                    Logo Televisa
                </span>
            </Link>
            <Link to="/" className="Footer__NetworkLink Icn_Deportes WhiteLabel">
                <span className="Display">
                    Logo Deportes
                </span>
            </Link>
            <Link to="/" className="Footer__NetworkLink Icn_News WhiteLabel">
                <span className="Display">
                    Logo News
                </span>
            </Link>
            <Link to="/" className="Footer__NetworkLink Icn_Nueve WhiteLabel">
                <span className="Display">
                    Logo GalaTv
                </span>
            </Link>
            <Link to="/" className="Footer__NetworkLink Icn_ForoTV WhiteLabel">
                <span className="Display">
                    FLogo oroTv
                </span>
            </Link>
            <Link to="/" className="Footer__NetworkLink Icn_CanalCinco WhiteLabel">
                <span className="Display">
                    Logo Canal5
                </span>
            </Link>
            <Link to="/" className="Footer__NetworkLink Icn_CEA WhiteLabel">
                <span className="Display">
                    Logo CEA
                </span>
            </Link>
        </section>
        <section className="Footer__About WhiteLabel">
            <Link to="/" className="Footer__AboutLink WhiteLabel">
                Acerca de Televisa
            </Link>
            <Link to="/" className="Footer__AboutLink WhiteLabel">
                Sala de Prensa
            </Link>
            <Link to="/" className="Footer__AboutLink WhiteLabel">
                Inversionistas
            </Link>
            <Link to="/" className="Footer__AboutLink WhiteLabel">
                Sustentabilidad
            </Link>
        </section>
        <section className="Footer__Contact WhiteLabel">
            <Link to="/" className="Footer__ContactLink WhiteLabel">
                Apps
            </Link>
            <Link to="/" className="Footer__ContactLink WhiteLabel">
                Anúnciate
            </Link>
            <Link to="/" className="Footer__ContactLink WhiteLabel">
                Contáctanos
            </Link>
            <Link to="/" className="Footer__ContactLink WhiteLabel">
                Responsable derecho de réplica
            </Link>
            <Link to="/" className="Footer__ContactLink WhiteLabel">
                Convenio del usuario
            </Link>
            <Link to="/" className="Footer__ContactLink WhiteLabel">
                Política de privacidad
            </Link>
            <Link to="/" className="Footer__ContactLink WhiteLabel">
                Oferta pública de infraestructura
            </Link>
        </section>
        <section className="Footer__Copyright WhiteLabel">
            <div className="Footer__MainLogo Icn_Logo WhiteLabel">
                <span className="Display">
                    Logo Televisa Corporate
                </span>
            </div>
            <div className="Footer__TextContainer WhiteLabel">
                <p className="Footer__Text WhiteLabel">
                    Derechos Reservados @ Televisa S.A. de C.V. TELEVISA y el logotipo
                    de TELEVISA son marcas registradas
                </p>
            </div>
        </section>
    </footer>
);

export default Footer;
