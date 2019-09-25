import React from "react";
import Button from '../Button';
import ButtonIcon from '../ButtonIcon';
import Description from '../Description';

const Box = () => (
    <section class="Box">
        <div class="Box__Container">
            <div class="Box__ButtonContainer">
                <Button />
                <ButtonIcon />
            </div>
            <div class="Box__DescriptionContainer">
                <Description />
            </div>
        </div>
    </section>
);


export default Box;
