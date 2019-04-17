import React from 'react'
import Logo from './Parts/Logo/Logo'
import LiveButton from './Parts/LiveButton/LiveButton'
import Navigation from './Parts/Navigation/Navigation'
import HeaderDrop from './Parts/HeaderDrop/HeaderDrop'
import MenuSearch from './Parts/MenuSearch/MenuSearch'
import InnerSearch from './Parts/InnerSearch/InnerSearch'
import SocialNetworks from './Parts/SocialNetworks/SocialNetworks'
import LinksNetworks from './Parts/LinksNetworks/LinksNetworks'


const Header = ({ siteTitle }) => {
    const toggleSidebar = () => {
        const SELECTOR = "#navigation";
        const CARD = document.querySelector(SELECTOR);
        console.log(SELECTOR)
        CARD.classList.toggle("ActiveMenu");
        CARD.classList.toggle("InactiveMenu");
    };
    const toggleSearch = () => {
        const SELECTOR2 = "#search";
        const CARD2 = document.querySelector(SELECTOR2);
        console.log(SELECTOR2)
        CARD2.classList.toggle("ActiveSearch");
        CARD2.classList.toggle("InactiveSearch");
    };

    return (
        <header className="Header WhiteLabel">
            <section className="Header__Mobile WhiteLabel">
                <Logo />
                <h4 className="Header__MobileTitle WhiteLabel">titulos</h4>
                <LiveButton />
                <div className="Header__OpenNav WhiteLabel">
                    <button className="Header__OpenNavButton Icn_Menu WhiteLabel" onClick={() => toggleSidebar()}>
                        <span className="Display">
                            hamburger
                        </span>
                    </button>
                </div>
            </section>
            <div className="Header__Grid WhiteLabel InactiveMenu" id="navigation">
                <section className="Header__Logo WhiteLabel">
                    <Logo />
                    <div className="Header__CloseNav WhiteLabel">
                        <button className="Header__CloseNavButton Icn_Close WhiteLabel" onClick={() => toggleSidebar()}>
                            <span className="Display">
                                close
                            </span>
                        </button>
                    </div>
                </section>
                <section className="Header__Navigation WhiteLabel" >
                    <Navigation />
                    <InnerSearch />
                </section>
                <section className="Header__Dinamic WhiteLabel">
                    <MenuSearch toggleSearch={toggleSearch}/>
                    <SocialNetworks />
                    <LinksNetworks />
                    <div className="Header__OpenSearch WhiteLabel">
                    <button className="Header__OpenSearchButton Icn_Search WhiteLabel" onClick={() => toggleSearch()}>
                        <span className="Display">
                            buscar
                        </span>
                    </button>
                    </div>
                </section>
            </div>
            <HeaderDrop />
        </header>
    );
};
export default Header
