import React from "react";
import PropTypes from "prop-types";
import { Button, Image } from "../../accessories";
import {
    VersusStyles,
    VersusBoxButtonInactive,
    VersusBoxButtonActive,
    VersusBoxButtons,
    ButtonInactive,
    ButtonActive,
    VersusBoxSection,
    VersusBoxFactColumn,
    VersusFactButton,
    VersusFact,
    VersusBoxEstadisticColumn,
    VersusBoxImage,
    VersusNumbers,
    VersusAddColumn,
    VersusAddButton,
} from "./styles";

const Versus = props => {
    const { feat1, feat2, feat3, feat4, number, src, ratio } = props;
    return (
        <VersusStyles>
            <VersusBoxButtons>
                <VersusBoxButtonInactive>
                    <ButtonInactive>{feat1}</ButtonInactive>
                </VersusBoxButtonInactive>
                <VersusBoxButtonActive>
                    <ButtonActive>{feat2}</ButtonActive>
                </VersusBoxButtonActive>
                <VersusBoxButtonInactive>
                    <ButtonInactive>{feat3}</ButtonInactive>
                </VersusBoxButtonInactive>
                <VersusBoxButtonInactive>
                    <ButtonInactive>{feat4}</ButtonInactive>
                </VersusBoxButtonInactive>
            </VersusBoxButtons>
            <VersusBoxSection>
                <VersusBoxFactColumn>
                    <VersusFactButton></VersusFactButton>
                    <VersusFact>Partidos jugados</VersusFact>
                    <VersusFact>Goles</VersusFact>
                    <VersusFact>Remates a puerta</VersusFact>
                    <VersusFact>% Remates</VersusFact>
                    <VersusFact>% Conversión</VersusFact>
                    <VersusFact>Asistencias</VersusFact>
                </VersusBoxFactColumn>
                <VersusBoxEstadisticColumn>
                    <VersusBoxImage><Image ratio={ratio} src={src} /></VersusBoxImage>
                    <VersusNumbers>{number}</VersusNumbers>
                    <VersusNumbers>{number}</VersusNumbers>
                    <VersusNumbers>{number}</VersusNumbers>
                    <VersusNumbers>{number}</VersusNumbers>
                    <VersusNumbers>{number}</VersusNumbers>
                    <VersusNumbers>{number}</VersusNumbers>
                </VersusBoxEstadisticColumn>
                <VersusBoxEstadisticColumn>
                    <VersusBoxImage><Image ratio={ratio} src={src} /></VersusBoxImage>
                    <VersusNumbers>{number}</VersusNumbers>
                    <VersusNumbers>{number}</VersusNumbers>
                    <VersusNumbers>{number}</VersusNumbers>
                    <VersusNumbers>{number}</VersusNumbers>
                    <VersusNumbers>{number}</VersusNumbers>
                    <VersusNumbers>{number}</VersusNumbers>
                </VersusBoxEstadisticColumn>
                <VersusAddColumn>
                    <VersusAddButton><Button variant="Solid" icon="Close" /></VersusAddButton>
                </VersusAddColumn>
            </VersusBoxSection>
        </VersusStyles>
    )
};

Versus.propTypes = {
    feat1: PropTypes.string,
    feat2: PropTypes.string,
    feat3: PropTypes.string,
    feat4: PropTypes.string,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

Versus.defaultProps = {
    feat1: "Ataque",
    feat2: "Defensa",
    feat3: "Distribución",
    feat4: "Disciplina",
    number: "99",
    src: {},
    ratio: "aspect1x1",
};

export default Versus;
