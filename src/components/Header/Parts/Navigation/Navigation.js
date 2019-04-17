import React from "react";
import Link from 'gatsby-link'

const Navigation = () => (
    <nav className="Header__LinksContainer WhiteLabel">
        <div className="Header__Links WhiteLabel">
            <Link to="/" className="Header__Link-Live WhiteLabel">
                En vivo
            </Link>
            <Link to="/" className="Header__Link WhiteLabel">
                Telenovelas
            </Link>
            <Link to="/" className="Header__Link WhiteLabel">
                Programas
            </Link>
            <Link to="/" className="Header__Link WhiteLabel">
                Realities
            </Link>
        </div>
        <div className="Header__SubLinks WhiteLabel">
            <Link to="/" className="Header__MainLink WhiteLabel">
                Espectáculos
            </Link>
            <Link to="/" className="Header__SubLink WhiteLabel">
                Lo Último
            </Link>
            <Link to="/" className="Header__SubLink WhiteLabel">
                Cine y series
            </Link>
            <Link to="/" className="Header__SubLink WhiteLabel">
                Música
            </Link>
            <Link to="/" className="Header__SubLink WhiteLabel">
                Tus Estrellas
            </Link>
        </div>
        <div className="Header__SubLinks WhiteLabel">
            <Link to="/" className="Header__MainLink WhiteLabel">
                Estilo de vida
            </Link>
            <Link to="/" className="Header__SubLink WhiteLabel">
                Sexo
            </Link>
            <Link to="/" className="Header__SubLink WhiteLabel">
                Horóscopo
            </Link>
            <Link to="/" className="Header__SubLink WhiteLabel">
                Viral
            </Link>
        </div>
    </nav>
);

export default Navigation;
