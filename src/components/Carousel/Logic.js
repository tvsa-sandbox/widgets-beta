import Utils from "./Utils";

/**
 * Logic for carousel.
 *
 * @category UI Carousel.
 * @package Carousel.
 * @subpackage Parts.
 * @author Televisa Digital.
  */
class Logic {
    /**
     * Generates the transition of the carousel.
     *
     * @param  {Boolean} isNext (Optional) Indicates the orientation of the slide.
     * @return {void}.
     */
    animateCarousel(isNext = true) {
        const {
            scroll, moveTo,
            moveItems, items,
        } = this.config;

        let count = 0;
        const TIME = setInterval(() => {
            items[scroll] += (isNext) ? +moveTo : -moveTo;
            count += moveTo;
            if (Math.floor(count) >= moveItems) {
                count = 0;
                this.whatArrowToHidden();
                clearInterval(TIME);
            }
        }, moveTo);
    }

    /**
     * Enable the mixed option.
     *
     * @param  {Boolean} mixed (Optional) Indicator for action.
     * @return {void}
     */
    buildMixed(mixed = false) {
        const RESIZE = window.addEventListener || null;
        if (RESIZE && mixed) {
            RESIZE("resize", () => {
                if (this.configCarousel && this.config.hasEvent) {
                    this.setEventArrow();
                }
            });
        }
    }

    /**
     * Validate configg.
     *
     * @return {Boolean}
     */
    get configCarousel() {
        let setConfig = false;
        const {
            container, items,
            moveItems, next,
            previus,
        } = this.config;
        const TOTAL_ITEM = Utils.existFields(items, "children.length", 0);
        const IS_VERTICAL = items.offsetHeight > items.offsetWidth;
        const TYPE_SIZE = (IS_VERTICAL) ? "Height" : "Width";
        const TYPE_SCROLL = (IS_VERTICAL) ? "Top" : "Left";
        const CONTAINER_SIZE = container[`offset${TYPE_SIZE}`];
        const ITEM_SIZE = Utils.existFields(items, `children.0.offset${TYPE_SIZE}`, 0);
        const ITEMS = Math.trunc(CONTAINER_SIZE / ITEM_SIZE);
        const NO_ARROW = (TOTAL_ITEM <= ITEMS);
        const SCROLL_SIZE = items[`scroll${TYPE_SIZE}`];

        if (NO_ARROW) {
            this.hiddenElement(next);
            this.hiddenElement(previus);
        } else {
            this.config.moveItems = ITEM_SIZE * moveItems;
            this.config.moveTo = ITEM_SIZE / 10;
            this.config.realSize = SCROLL_SIZE - CONTAINER_SIZE;
            this.config.scroll = `scroll${TYPE_SCROLL}`;
            this.hiddenElement(previus, "none");
            setConfig = true;
        }
        return setConfig;
    }

    /**
     * Get an element of the DOM.
     *
     * @param  {stting} selector (Option) querySelector.
     * @return {Object}
     */
    getElementDom(selector = "") {
        const DOCUMENT = document || null;
        const DOM = (selector && DOCUMENT)
            ? document.querySelector(`${selector}${this.id}`)
            : null;
        return DOM;
    }

    /**
     * Hide an element of the DOM.
     *
     * @param  {object} element (Optional) Reference to object of the dom.
     * @param  {String} show (Optional) Property for display.
     * @return {void}
     */
    hiddenElement(element = null, show = "none") {
        if (element && this.id) {
            let display = Utils.existFields(element, "parentNode.style.display", "block");
            display = (display === "block" || show === "block") ? "" : "none";
            Object.assign(element.parentNode.style, { display });
        }
    }

    /**
     * Start the corrucel.
     *
     * @return {void}
     */
    set init(config) {
        const CONFIG = Object.assign({}, config);
        this.id = CONFIG.id;
        const NEXT = this.getElementDom("#ArrowNext-") || null;
        const PREVIOUS = this.getElementDom("#ArrowPrevious-") || null;
        if (Utils.isMobile === "desktop") {
            const { isMixed, moveItems } = CONFIG;
            const CONTAINER = this.getElementDom("#Carousel-") || null;
            const ITEMS = this.getElementDom("#ItemList-") || null;
            const MOVE_ITEMS = parseInt(moveItems, 10);
            this.config = {
                container: CONTAINER,
                items: ITEMS,
                next: NEXT,
                previus: PREVIOUS,
                moveItems: (moveItems <= 0 || Number.isNaN(MOVE_ITEMS)) ? 2 : moveItems,
                hasEvent: true,
            };

            if (CONTAINER && ITEMS) {
                this.buildMixed(isMixed);
                if (this.configCarousel) {
                    this.setEventArrow();
                }
            }
        } else {
            this.hiddenElement(NEXT);
            this.hiddenElement(PREVIOUS);
        }
    }

    /**
     * assign the events to the arrows.
     *
     * @return {void}
     */
    setEventArrow() {
        const { next, previus } = this.config;
        next.addEventListener("click", () => this.animateCarousel());
        previus.addEventListener("click", () => this.animateCarousel(false));
        this.hasEvent = false;
    }

    /**
     * Valid that arrow has to hide.
     *
     * @return {void}
     */
    whatArrowToHidden() {
        const {
            items, next,
            previus, scroll,
            realSize,
        } = this.config;
        const DISPLAY_PREVIUS = (items[scroll] > 0) ? "block" : "none";
        const DISPLAY_NEXT = (items[scroll] >= realSize) ? "none" : "block";
        this.hiddenElement(previus, DISPLAY_PREVIUS);
        this.hiddenElement(next, DISPLAY_NEXT);
    }
}

export default Logic;