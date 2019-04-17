import React from "react";

const InnerSearch = () =>(
        <seccion className="InnerSearch WhiteLabel">
            <div className="InnerSearch__BoxContainer WhiteLabel">
                <div className="InnerSearch__Box WhiteLabel">
                    <input type="search" name="q" placeholder="Buscar" className="InnerSearch__Input WhiteLabel" />
                </div>
                <div className="InnerSearch__IconContainer WhiteLabel">
                    <button className="InnerSearch__Icon Icn_Search WhiteLabel">
                        <span className="Display">
                            Display
                        </span>
                    </button>
                </div>
            </div>
        </seccion>
    );

export default InnerSearch;
