import React from "react";

const ButtonIcon = () => (
    <div className="Button__Container">
        <button className="Button" type="button">
            <div className="Button__IconContainer" >
                <div className="Button__Icon Icn_Icono WhiteLabel">
                    <span className="Display">
                        Icono
                    </span>
                </div>
            </div>
            <span className="Button__Text">
                Click Me!
            </span>
        </button>
    </div>
);

export default ButtonIcon;
