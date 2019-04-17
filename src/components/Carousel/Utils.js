

class Utils {
    static getMainSection(breadcrumbs) {
        return (breadcrumbs && breadcrumbs[0]) ? breadcrumbs[0] : {};
    }

    static getSubSection(breadcrumbs) {
        if (breadcrumbs && breadcrumbs.length >= 2) {
            return breadcrumbs[1];
        }
        return {};
    }

    static getSection(breadcrumbs) {
        let section = {};
        if (breadcrumbs && breadcrumbs.length > 0) {
            section = breadcrumbs[breadcrumbs.length - 1];
        }
        return section;
    }


    static getSectionLogo(MAIN_SECTION, SUB_SECTION) {
        let logo = "";
        logo = `/logos/${this.getCleanedString(MAIN_SECTION.text, "-")}/lg_${this.getCleanedString(SUB_SECTION.text)}_w.svg`;
        return logo;
    }

    static getCleanedString(string, type = "") {
        let stringCleaned = (!string) ? "" : string;
        stringCleaned = decodeURI(stringCleaned);
        const specialChars = "!@#$^&%*()+=-[]/{}|:<>?,.";
        for (let i = 0; i < specialChars.length; i += 1) {
            stringCleaned = stringCleaned.replace(new RegExp(`\\${specialChars[i]}`, "gi"), "");
        }

        stringCleaned = stringCleaned.toLowerCase();
        stringCleaned = stringCleaned.replace(/ /g, type);
        stringCleaned = stringCleaned.replace(/á/gi, "a");
        stringCleaned = stringCleaned.replace(/é/gi, "e");
        stringCleaned = stringCleaned.replace(/í/gi, "i");
        stringCleaned = stringCleaned.replace(/ó/gi, "o");
        stringCleaned = stringCleaned.replace(/ú/gi, "u");
        stringCleaned = stringCleaned.replace(/ñ/gi, "n");
        return stringCleaned;
    }

    static getCrop(image, aspect, size = "medium") {
        try {
            return image.renditions[aspect][size].uri;
        } catch (EmptyRenditions) {
            try {
                return image.original.uri;
            } catch (EmptyImage) {
                return "";
            }
        }
    }

    // Get a cookie given its name, return an empty string if it there isn't a match
    static getCookie(cname) {
        const name = `${cname}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i += 1) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // Set a cookie in the main site, given its name, value and days to expire
    static setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${cname}=${cvalue};${expires};path=/`;
    }

    // TODO: BORRAR ESTA FUNCIONA ANTES DEL LANZAMIENTO, SE REEMPLAZO POR getCropByOrientation
    static getCropByHorientation(item, Vrendition = "aspect-9x16") {
        let image;
        if (item.image.original.height > item.image.original.width) {
            image = item.image.renditions[`${Vrendition}`].medium.uri;
        } else {
            image = item.image.renditions["aspect-4x3"].large.uri;
        }
        return image;
    }

    static getAMPImgCrop(
        item,
        horizontalRendition = "aspect-4x3",
        horizontalSize = "medium",
        verticalRendition = "aspect-3x4",
        verticalSize = "medium",
    ) {
        return this.getCropByOrientation(item, horizontalRendition,
            horizontalSize, verticalRendition, verticalSize);
    }

    static getAMPImgObjCrop(
        item,
        horizontalRendition = "aspect-4x3",
        horizontalSize = "medium",
        verticalRendition = "aspect-3x4",
        verticalSize = "medium",
    ) {
        let data = {};
        const HEIGHT = (item.original && item.original.height) || 0;
        const WIDTH = (item.original && item.original.width) || 0;
        try {
            if (HEIGHT > WIDTH) {
                data = item.renditions[verticalRendition][verticalSize];
            } else {
                data = item.renditions[horizontalRendition][horizontalSize];
            }
        } catch (EmptyRenditions) {
            data = {
                uri: item.original.uri,
                height: item.original.height,
                width: item.original.width,
            };
        }
        return data;
    }

    static getCropByOrientation(
        item,
        horizontalRendition = "aspect-4x3",
        horizontalSize = "medium",
        verticalRendition = "aspect-9x16",
        verticalSize = "large",
    ) {
        let uri = "";
        const HEIGHT = (item.original && item.original.height) || 0;
        const WIDTH = (item.original && item.original.width) || 0;
        if (HEIGHT > WIDTH) {
            uri = this.getCrop(item, verticalRendition, verticalSize);
        } else {
            uri = this.getCrop(item, horizontalRendition, horizontalSize);
        }
        return uri;
    }

    static getCropByRenditions(renditions, original, aspect, size = "medium") {
        try {
            return renditions[aspect][size].uri;
        } catch (EmptyRenditions) {
            try {
                return original.uri;
            } catch (EmptyImage) {
                return "";
            }
        }
    }

    static get randomKey() {
        return Math.random().toString(36).substr(2);
    }

    static get isMobile() { /* ads */
        const DEVICE = (typeof navigator !== "undefined")
            ? navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)
            : "desktop";
        const WIDTH_SCREEN = (typeof window !== "undefined")
            ? window.innerWidth
            : "1024";
        let request = "desktop";

        if (DEVICE != null) {
            if (WIDTH_SCREEN <= 768) {
                request = "phone";
            } else if (WIDTH_SCREEN > 768 && WIDTH_SCREEN <= 1024) {
                request = "tablet";
            }
        }
        return request;
    }

    static getDurationVideo(duration) {
        let output = duration.toString();
        if (output.indexOf(":") < 0) {
            const DURATION = parseInt(duration, 10);
            let hours = Math.floor(DURATION / 3600);
            let minutes = Math.floor((DURATION % 3600) / 60);
            let seconds = DURATION - ((minutes * 60) + (hours * 3600));
            if (hours === 0 && minutes <= 9) {
                minutes = `${minutes}:`;
            } else if (hours !== 0 && minutes <= 9) {
                minutes = `0${minutes}:`;
            } else {
                minutes = `${minutes}:`;
            }
            hours = (hours <= 9 && hours > 0) ? `${hours}:` : "";
            seconds = `${seconds <= 9 ? `0${seconds}` : seconds}`;
            output = hours + minutes + seconds;
        }
        return output;
    }

    static getModify(breadcrumbs, listModifier) {
        if (breadcrumbs === []) {
            return listModifier.default;
        }
        const MAIN_SECTION = this.getMainSection(breadcrumbs);
        const CLASS_SECCTION = listModifier;
        let modifier = CLASS_SECCTION.default;
        if (MAIN_SECTION !== {} && MAIN_SECTION.text) {
            const AUX = this.getCleanedString(MAIN_SECTION.text);
            modifier = CLASS_SECCTION[AUX] || modifier;
        }
        return modifier;
    }

    static getSectionComplete(type = "", uri = "/", breadcrumbs = []) {
        let section = "";
        if ((type === "EpisodePage" || type === "ClipPage") && breadcrumbs.length >= 1) {
            const SECTION_TYPE_SHOW = breadcrumbs.filter(breadcrumb => breadcrumb.type === "show");
            const SECTION_URI = (SECTION_TYPE_SHOW[0]) ? SECTION_TYPE_SHOW[0].uri : "/";
            const SECTION_URI_ARRAY = SECTION_URI.split("/");
            section = SECTION_URI_ARRAY[1] || section;
        }
        if ((type !== "EpisodePage" && type !== "ClipPage") && breadcrumbs.length === 0) {
            const URI = uri.split("/")[1] || section;
            section = URI;
        }
        if ((type !== "EpisodePage" && type !== "ClipPage") && breadcrumbs.length >= 1) {
            section = (breadcrumbs[0]) ? breadcrumbs[0].text : section;
        }
        return section;
    }

    static getThumbColorModifier(modifier) {
        if (modifier === "TvOnline") {
            return "_two";
        } else if (modifier === "LifeStyle") {
            return "_life";
        }
        return "_pic";
    }

    static getListShare(dataShare) {
        const DOMAIN = dataShare.domain || "";
        const URI = dataShare.uri || "/";
        const URL = `${DOMAIN}${URI}`;
        const TITLE = dataShare.title;
        const SHARE = {
            facebook: {
                href: this.getFacebookShare(URL),
                target: "_blank",
                title: TITLE,
            },
            twitter: {
                href: this.getTwitterShare(TITLE, URL),
                title: TITLE,
            },
            email: {
                href: this.getMailShare(TITLE, DOMAIN, URI),
                title: TITLE,
            },
            whatsapp: {
                href: this.getWhatsappShare(TITLE, URL),
                title: TITLE,
            },
        };
        return SHARE;
    }

    static getMailShare(title, domain, uri, message = "Un amigo te ha recomendado este contenido que puede ser de tu interés.") {
        return `
            mailto:?subject=${title}
            &body=${message} ${title} encuéntralo en este enlace: ${domain}${uri} visitanos en ${domain}`;
    }

    static getFacebookShare(uriShare) {
        return `https://www.facebook.com/sharer/sharer.php?u=${uriShare}`;
    }

    static getTwitterShare(title, uriShare) {
        const URL = `https://twitter.com/intent/tweet?url=${uriShare}&text=${title}`;
        return URL;
    }

    static getWhatsappShare(title, uriShare) {
        return encodeURI(`whatsapp://send?text=${title} ${uriShare}`);
    }

    static setHistory(data, uri, cache = true, reference = "") {
        if (cache) {
            const REFERENCE = reference || `window_history_${this.randomKey}`;
            window.history.pushState(data, REFERENCE, uri);
        }
    }

    static formatSchedule(arr) {
        const newArr = [];
        arr.map((item) => {
            const sd = new Date(Number(item.timestamp) * 1000);
            const ed = new Date(sd.getTime() + ((Number(item.duration) / 60) * 60000));
            const ad = new Date();
            if ((ad.getTime() > sd.getTime() && ad.getTime() < ed.getTime()) ||
            ad.getTime() < sd.getTime()) {
                newArr.push(item);
            }
            return item;
        });
        return newArr;
    }


    static getTimeFromSeconds(item) {
        const reference = new Date((item) ? Number(item.timestamp) * 1000 : "");
        reference.setSeconds(reference.getSeconds() + (item) ? Number(item.duration) : 0);
        const hours = `0${reference.getHours()}`;
        const minutes = `0${reference.getMinutes()}`;
        return `${hours.slice(-2)}:${minutes.slice(-2)}`;
    }

    static checkItemOnSet(item, set) {
        return set.indexOf(item) > -1;
    }

    static showToggle(selector) {
        const REFERENCE = document.querySelector(selector);
        if (REFERENCE !== null) {
            REFERENCE.style.display = (REFERENCE.style.display !== "block") ? "block" : "none";
        }
    }


    static getExpirationContent(endDate, expiration = 5, nowDate = "") {
        const REQUEST = {
            expiration: true,
            type: "fin",
            durationCounter: 0,
        };
        if (endDate) {
            const END = this.formatIsoDate(endDate);
            const NOW = this.formatIsoDate(nowDate);
            const DIFF_DAYS = END.diff(NOW, "days");
            if (DIFF_DAYS >= 0) {
                const DIFF = {
                    days: END.diff(NOW, "days"),
                    hours: END.diff(NOW, "hours"),
                    minutes: END.diff(NOW, "minutes"),
                };
                if (DIFF.days <= expiration && DIFF.days > 0) {
                    REQUEST.expiration = false;
                    REQUEST.type = "days";
                    REQUEST.msg = (DIFF.days > 1) ? "Días" : "Día";
                    REQUEST.durationCounter = `${DIFF.days}`;
                } else if (DIFF.days === 0 && DIFF.hours >= 1) {
                    REQUEST.expiration = false;
                    REQUEST.type = "hours";
                    REQUEST.msg = (DIFF.hours > 1) ? "Horas" : "Hora";
                    REQUEST.durationCounter = `${DIFF.hours}`;
                } else if (DIFF.hours === 0 && DIFF.minutes > 0) {
                    REQUEST.expiration = false;
                    REQUEST.msg = (DIFF.minutes > 1) ? "Minutos" : "Minuto";
                    REQUEST.type = "minutes";
                    REQUEST.durationCounter = `${DIFF.minutes}`;
                } else if (DIFF.days > expiration) {
                    REQUEST.type = "inmortal";
                    REQUEST.expiration = false;
                }
            }
        }
        return REQUEST;
    }

    static arrayUnique(filterArray) {
        let newArray = [];
        if (filterArray.length > 0) {
            newArray = filterArray.reduce((output, item) => {
                const TYPE = (typeof item === "object");
                let existItem = output.includes(item);
                if (TYPE) {
                    const STRING_ARRAY = output.map(auxItem => JSON.stringify(auxItem));
                    const STRING_ITEM = JSON.stringify(item);
                    existItem = STRING_ARRAY.includes(STRING_ITEM);
                }

                if (!existItem) {
                    output.push(item);
                }
                return output;
            }, []);
        }
        return newArray;
    }

    static clearHtmlFromString(stringToClean, options) {
        if (!stringToClean) return "";
        if (!options) return stringToClean.replace(/<(?:.|\n)*?>/gm, "");
        if (options.newLine) {
            return stringToClean.split("<br>").reduce((currentValue, newValue, index) => {
                const newLine = index > 0 ? "\n" : "";
                return currentValue + newLine + newValue.replace(/<(?:.|\n)*?>/gm, "");
            }, "");
        }
        return stringToClean;
    }

    static handleHtmlTagInComponentTitle(components, options) {
        if (components) {
            return components.map((component) => {
                const compCleared = component;
                if (compCleared.title) {
                    compCleared.title = Utils.clearHtmlFromString(compCleared.title, options);
                }
                if (compCleared._type === "List" && compCleared.items) {
                    compCleared.items =
                        Utils.handleHtmlTagInComponentTitle(compCleared.items, options);
                }
                return compCleared;
            });
        }
        return components;
    }

    static existFields(data, keys, requestDefault = "") {
        const KEYS = keys.split(".");
        let objectTest = data;
        const VALIDATE = () => (
            KEYS.every((key) => {
                const REQUEST = (typeof objectTest[key] !== "undefined");
                objectTest = objectTest[key];
                return REQUEST;
            })
        );
        return VALIDATE() ? objectTest : requestDefault;
    }

    static objectCleaner(data, needles) {
        const RETURN_OBJECT = {};
        needles.forEach((needle) => {
            const DATA_TYPE = (data instanceof Array) ? "array" : "object";
            const TYPE_SYMBOL = (DATA_TYPE === "array") ? [] : {};
            if (typeof needle === "string") {
                const FINDED = this.existFields(data, needle, false);
                if (FINDED) {
                    if (DATA_TYPE === "array") {
                        TYPE_SYMBOL.concat([FINDED]);
                    } else {
                        TYPE_SYMBOL[needle] = FINDED;
                    }
                }
            } else {
                const KEY = Object.keys(needle)[0];
                const HAYSTACK = (data[KEY]) ? data[KEY] : false;
                const HAYSTACK_TYPE = (HAYSTACK instanceof Array) ? "array" : "object";
                const NEEDLES = Object.values(needle)[0];
                if (HAYSTACK && HAYSTACK_TYPE === "object") {
                    TYPE_SYMBOL[KEY] = this.objectCleaner(HAYSTACK, NEEDLES);
                } else if (HAYSTACK && HAYSTACK_TYPE === "array") {
                    const ARRAY = HAYSTACK.map((haystackNode) => {
                        const SUB_ARRAY = this.objectCleaner(haystackNode, NEEDLES);
                        return SUB_ARRAY;
                    });
                    TYPE_SYMBOL[KEY] = ARRAY;
                }
            }
            Object.assign(RETURN_OBJECT, TYPE_SYMBOL);
        });
        return RETURN_OBJECT;
    }

    static splitCTA(cta = "", uri = "") {
        const [, text, target, , href] = cta.split("::");
        return {
            href: href || uri,
            target: `_${target}`,
            text,
        };
    }
}

export default Utils;