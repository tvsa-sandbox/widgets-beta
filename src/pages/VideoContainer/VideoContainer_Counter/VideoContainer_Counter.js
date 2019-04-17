import React from "react";
import Link from "gatsby-link";

const VideoContainer_Counter = () => (
    <div className="VideoContainer__Counter WhiteLabel">
        <Link to="/" className="VideoContainer__CounterLink WhiteLabel">
            <h3 className="VideoContainer__CounterLinkTitle WhiteLabel">VER: FUEGO EN LA SANGRE</h3>
        </Link>
        <div className="VideoContainer__CounterTextContainer WhiteLabel">
            <div className="VideoContainer__CounterLeftContainer WhiteLabel">
                <p className="VideoContainer__CounterLeft WhiteLabel">TE QUEDAN:</p>
            </div>
            <div className="VideoContainer__CounterDaysContainer WhiteLabel">
                <p className="VideoContainer__CounterDays WhiteLabel">6</p>
                <span className="VideoContainer__CounterDaysText WhiteLabel">dias</span>
            </div>
            <div className="VideoContainer__CounterChapterContainer WhiteLabel">
                <p className="VideoContainer__CounterChapter WhiteLabel">PARA VER ESTE CAPÍTULO</p>
            </div>
        </div>
        <div className="VideoContainer__CounterReminderContainer WhiteLabel">
            <p className="VideoContainer__CounterReminder WhiteLabel">* RECUERDA QUE SIEMPRE ENCONTRARÁS LOS ÚLTIMOS CINCO CAPÍTULOS DE NUESTRAS NOVELAS.</p>
        </div>
    </div>
);

export default VideoContainer_Counter;
