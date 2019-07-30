import React from "react";
import { Link } from "gatsby";

const Card = () => (
    <div class="Card WhiteLabel">
        <div class="Card__Container WhiteLabel">
            <div class="Card__Image WhiteLabel">
                <div class="Card__ImagePrograma WhiteLabel">
                    <picture>
                        <img class="Card__ImagePoster" src="./static/aspect-ratio-images/16x9-820x461.jpg" alt="ImageEvent" />
                    </picture>
                </div>
            </div>
            <div class="Card__TextContainer WhiteLabel">
                <div class="Card__TextContainerTitle WhiteLabel">EL CHEMA</div>
                <div class="Card__TextContainerDescription WhiteLabel">El Chema cuenta la historia de cómo el Chema Venegas (Mauricio Ochmann) empezó en el crimen organizado y subió por las filas para convertirse en la cabeza del cartel que dirige en la serie El Señor de los Cielos. El Chema empezó a violar la ley a una edad temprana, transportando marihuana a través de la frontera entre Estados Unidos y México cuando era un niño. Poco a poco, trabajó su camino hasta convertirse en un líder exitoso y hábil, ganando su lugar a través del derramamiento de sangre y la brutalidad, en la historia del tráfico de drogas. Desde que era un joven, El Chema ha sido uno de los enemigos públicos más importantes tanto de los gobiernos de los Estados Unidos como de México.</div>
                <Link class="Card__TextContainerLinkButton" to="https://uat.lasestrellas.tv/fabrica-de-suenos/el-chema" target="_blank WhiteLabel">
                    <button class="Card__TextContainerButton WhiteLabel">
                        Ver más
                    </button>
                </Link>
            </div>
        </div>
    </div>
);

export default Card;
