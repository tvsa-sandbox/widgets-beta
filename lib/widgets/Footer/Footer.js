import React from "react";
import {
    FooterStyles,
    NetworksStyles,
    AboutStyles,
    SectionStyles,
    SectionTextStyles,
    ContactStyles,
    SectionInfoStyles,
    CopyRightStyles,
    TextCopyStyles,
    SectionMobileStyles,
    CopyIconStyles,
    NetworkIconStyles,
    MobileIconStyles,
    ComboStyles,
    SelectStyles,
    LabelStyles,
} from "./styles";
import Box from "../../accessories/Box";

const Footer = () => {
    const handleSelect = event => {
        window.open(event.target.value, "_self");
    };

    return (
        <FooterStyles id="Footer">
            <SectionMobileStyles href="/">
                <Box variant="Transparent">
                    <MobileIconStyles name="Televisa" variant="Footer" />
                </Box>
                <ComboStyles>
                    <LabelStyles htmlFor="tvsasites">Otros Portales Televisa</LabelStyles>
                    <SelectStyles id="tvsasites" name="tvsasites" onChange={handleSelect}>
                        <option value="https://www.televisa.com/">Televisa</option>
                        <option value="https://www.tudn.mx/">TUDN</option>
                        <option value="https://www.lasestrellas.tv/">Las Estrellas</option>
                        <option value="https://noticieros.televisa.com/">Noticierolevisa</option>
                        <option value="https://www.televisa.com/gala-tv/">Nueve</option>
                        <option value="http://www.televisa.com/canal5/">Canal 5</option>
                        <option value="https://noticieros.televisa.com/noticiaso-foro-tv/">
                            Foro Tv
                        </option>
                        <option value="https://www.lasestrellas.tv/cea/">CEA</option>
                    </SelectStyles>
                </ComboStyles>
            </SectionMobileStyles>
            <SectionStyles>
                <NetworksStyles href="https://www.televisa.com/">
                    <NetworkIconStyles name="Televisa" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles href="https://www.tudn.mx/">
                    <NetworkIconStyles name="Deportes" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles href="https://www.lasestrellas.tv/">
                    <NetworkIconStyles name="LasEstrellas" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles href="https://noticieros.televisa.com/">
                    <NetworkIconStyles name="News" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles href="https://www.televisa.com/gala-tv/">
                    <NetworkIconStyles name="Nueve" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles href="https://noticieros.televisa.com/noticias-vivo-foro-tv/">
                    <NetworkIconStyles name="ForoTV" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles href="https://www.televisa.com/canal5/">
                    <NetworkIconStyles name="CanalCinco" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles href="https://www.lasestrellas.tv/cea/">
                    <NetworkIconStyles name="CEA" variant="Footer" />
                </NetworksStyles>
            </SectionStyles>
            <SectionTextStyles>
                <AboutStyles href="https://www.televisa.com/corporativo/">
                    Acerca de Televisa
                </AboutStyles>
                <AboutStyles href="https://www.televisa.com/sala-de-prensa/">
                    Sala de Prensa
                </AboutStyles>
                <AboutStyles href="http://www.televisair.com/">Inversionistas</AboutStyles>
                <AboutStyles href="http://www.televisair.com/~/media/Files/T/Televisa-IR/documents/sostenibilidad19grif-esp.pdf">
                    Sostentabilidad
                </AboutStyles>
                <AboutStyles href="https://www.frentecreativo.com/">
                    NEWSLETTER FRENTE CREATIVO
                </AboutStyles>
            </SectionTextStyles>
            <SectionInfoStyles>
                <ContactStyles href="https://www.televisa.com/informacion/aplicaciones/">
                    Apps
                </ContactStyles>
                <ContactStyles href="http://televisaventas.tv/">Anúnciate</ContactStyles>
                <ContactStyles href="http://www.televisa.com/corporativo/contacto/">
                    Contáctanos
                </ContactStyles>
                <ContactStyles href="http://www.televisa.com/responsable-derecho-replica/">
                    Responsable derecho de réplica
                </ContactStyles>
                <ContactStyles href="http://www.televisa.com/convenio-de-usuario/">
                    Convenio del usuario
                </ContactStyles>
                <ContactStyles href="http://www.televisa.com/politica-de-privacidad/">
                    Política de privacidad
                </ContactStyles>
                <ContactStyles href="http://www.televisa.com/opi/">
                    Oferta pública de infraestructura
                </ContactStyles>
            </SectionInfoStyles>
            <CopyRightStyles>
                <CopyIconStyles name="Logo" variant="Footer" />
                <TextCopyStyles>
                    Derechos Reservados @ Televisa S.A. de C.V. TELEVISA y el logotipo de TELEVISA
                    son marcas registradas
                </TextCopyStyles>
            </CopyRightStyles>
        </FooterStyles>
    );
};

export default Footer;
