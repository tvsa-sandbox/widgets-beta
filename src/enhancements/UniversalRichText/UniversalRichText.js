import React from "react";

const UniversalRichText = () => (
    <section className="RichText WhiteLabel">
        <aside className="RichText-Aside WhiteLabel">
            <div className="RichText__Container">
                <iframe title="iframe" width="100%" height="315" src="https://www.youtube.com/embed/4PJtEQ72f1M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </aside>
        <div className="RichText-Full WhiteLabel">
            <div className="RichText__Container">
                <iframe title="iframe" src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A4lteJuSjb9Jt9W1W7PIU2U" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </div>
        <div className="RichText-Wrapper WhiteLabel">
            <div className="RichText__Container">
                <iframe title="iframe" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FTelevisaDeportes%2Fposts%2F10156841400972340&width=500" width="500" height="639"  allow="encrypted-media"></iframe>           
            </div>
        </div>
    </section>
);

export default UniversalRichText;
