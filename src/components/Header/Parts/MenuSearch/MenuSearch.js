import React from "react";

const MenuSearch = (props) => {

const {
        toggleSearch,
    } = props;
    return (
        <seccion className="MenuSearch InactiveSearch WhiteLabel" id="search">
            <button className="MenuSearch__Close Icn_Close WhiteLabel" onClick={() => toggleSearch()}>
                <span className="Display">
                    Close
                </span>
            </button>
            <div className="MenuSearch__BoxContainer WhiteLabel">
                <div className="MenuSearch__Box WhiteLabel">
                    <input type="search" name="q" className="MenuSearch__Input WhiteLabel" />
                </div>
                <div className="MenuSearch__IconContainer WhiteLabel">
                    <div className="MenuSearch__Icon Icn_Search WhiteLabel">
                        <span className="Display">
                            Display
                        </span>
                    </div>
                </div>
            </div>
            <button className="MenuSearch__Button WhiteLabel">
                <span >
                    Buscar
                </span>
            </button>
        </seccion>
    );
};

export default MenuSearch;
