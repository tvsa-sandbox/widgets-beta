import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { Box, Image } from "../../accessories";
import {
    TabsMatchStyles,
    TabsMatchContainerStyles,
    TabsMatchButtonStyles,
    TabsMatchButtonContainerStyles,
    TabsMatchButtonActiveStyles,
} from "../TabsMatch/styles";
import {
    VersusStyles,
    VersusBoxSection,
    VersusBoxFactColumn,
    VersusFactButton,
    VersusFact,
    VersusBoxEstadisticColumn,
    VersusBoxImage,
    VersusNumbers,
    VersusBoxPorcent,
} from "./styles";

const Versus = props => {
    const { numbers, src, ratio, sections } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <VersusStyles>
            <TabsMatchStyles>
                <TabsMatchContainerStyles variant="Transparent">
                    <TabsMatchButtonContainerStyles>
                        <TabsMatchButtonActiveStyles href="/" variant="Solid" color={ui === "tudn" ? "Light" : null}>
                            Ataque
                     </TabsMatchButtonActiveStyles>
                    </TabsMatchButtonContainerStyles>
                    {sections.map(section => {
                        return (
                            <Fragment key={section.id}>
                                <TabsMatchButtonContainerStyles>
                                    <TabsMatchButtonStyles href="/" variant="Outline">
                                        {section.title}
                                    </TabsMatchButtonStyles>
                                </TabsMatchButtonContainerStyles>
                            </Fragment >
                        );
                    })}
                </TabsMatchContainerStyles>
            </TabsMatchStyles>
            <VersusFactButton variant="Flex">
                <VersusBoxImage><Image ratio={ratio} src={src} /></VersusBoxImage>
                <VersusBoxImage><Image ratio={ratio} src={src} /></VersusBoxImage>
            </VersusFactButton>
            <VersusBoxSection>
                <VersusBoxFactColumn>
                    <VersusFact>Partidos jugados</VersusFact>
                    <VersusFact>Goles</VersusFact>
                    <VersusFact>Remates a puerta</VersusFact>
                    <VersusFact>Precisión de Remates</VersusFact>
                    <VersusFact>Porcentaje de Conversión</VersusFact>
                    <VersusFact>Asistencias</VersusFact>
                </VersusBoxFactColumn>
                <Box variant="Flex">
                    <VersusBoxPorcent>
                        {numbers.map(number => {
                            return (
                                <Fragment key={number.id}>
                                    <VersusBoxEstadisticColumn>
                                        <VersusNumbers>{number.local}</VersusNumbers>
                                    </VersusBoxEstadisticColumn>
                                    <VersusBoxEstadisticColumn>
                                        <VersusNumbers>{number.away}</VersusNumbers>
                                    </VersusBoxEstadisticColumn>
                                </Fragment >
                            );
                        })}
                    </VersusBoxPorcent>
                </Box>
            </VersusBoxSection>
        </VersusStyles >
    )
};

Versus.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

Versus.defaultProps = {
    src: {},
    ratio: "aspect1x1",
};

export default Versus;
