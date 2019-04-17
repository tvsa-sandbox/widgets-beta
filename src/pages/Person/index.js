import React from "react";
import Menu from "../../components/Menu";
import Navegation from "../../components/Navegation";
import LiveToolBar from "../../components/LiveToolBar";
import PersonItem from "./Item/Person_Item";
import Footer from "../../components/Footer";

const Page = () => (
    <section className="Page WhiteLabel">
        <Menu />
        <Navegation />
        <div className="Person WhiteLabel">
            <section className="PageContent__Container-Left WhiteLabel">
                <section className="PageContent__Aside WhiteLabel">
                    <PersonItem />
                </section>
                <section className="PageContent__Body WhiteLabel">
                    <div className="Person__CaptionContainer WhiteLabel">
                        <div className="Person__TitleContainer WhiteLabel">
                            <h3 className="Person__Title WhiteLabel">
                                JULIETA AGUILAR RIVERA
                            </h3>
                        </div>
                        <div className="Person__DescriptionContainer WhiteLabel">
                            <p className="Person__Description WhiteLabel">
                                Julieta es una mujer moderna en todo el sentido de la palabra, es una combinación entre la belleza física y una gran inteligencia para los negocios. Julieta es hábil, trabajadora, honesta y muy directa, pero no por eso deja de ser femenina, tierna y cariñosa cuando debe serlo.
                                Finalmente ha logrado el balance entre la vida familiar y la vida profesional; alcanzando lo que muchas mujeres anhelan. Pero lograrlo, le ha costado mucho trabajo.
                                Julieta viene de un pasado complicado: cuando era una adolescente, tuvo que presenciar el momento en el que su padre: Hugo, abandonó a la familia, ya que no quería tener que lidiar con la presión de estar dividido entre su madre y su esposa Catalina. Esta situación hizo que Julieta desarrollara una particular aversión a tener una familia política, aunque al mismo tiempo, parte de ello la convirtió en la mujer que es hoy.
                                Su personalidad se hizo más fuerte y tuvo que encontrar una forma de ayudar a su madre para sacar adelante a sus hermanos: Hugo y Bruno. Sin embargo, siempre tiene pleitos con Catalina, ya que ésta ha sobreprotegido a sus hijos varones y permitido que Julieta se volviera la ‘alcancía’ de la familia.
                                Conoció a Robert Cooper, un hombre que parecía ser el partido perfecto: dedicado, talentoso, viviendo en México, y con su familia adoptiva viviendo lejos de él, en Estados Unidos. No obstante, y pese a todo pronóstico, Robert (que en realidad se llama Juan Pablo) encontró a su familia biológica: los Córcega, logrando a la par que Julieta se topara con la familia política de la cual siempre quiso escapar.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
        <LiveToolBar />
        <Footer />
    </section>
);

export default Page;
