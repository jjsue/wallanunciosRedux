const adCreate = (adData) => {
    return {
        type: 'AD_CREATE',
        payload: {
            adData,
        },
    }
};
const formNameCreateAd = (adData) => {
    return {
        type: 'AD_CREATE_FORM_NAME',
        payload: {
            adData,
        },
    }
};
const formSellOrBuyCreateAd = (adData) => {
    return {
        type: 'AD_CREATE_FORM_SELL_OR_BUY',
        payload: {
            adData,
        },
    }
};
const formTagsCreateAd = (adData) => {
    return {
        type: 'AD_CREATE_FORM_TAGS',
        payload: {
            adData,
        },
    }
};
const formPriceCreateAd = (adData) => {
    return {
        type: 'AD_CREATE_FORM_PRICE',
        payload: {
            adData,
        },
    }
};
const formTextAreaDescriptionCreateAd = (adData) => {
    return {
        type: 'AD_CREATE_FORM_DESCRIPTION',
        payload: {
            adData,
        },
    }
};
const formUrlCreateAd = (adData) => {
    return {
        type: 'AD_CREATE_FORM_IMAGE_URL',
        payload: {
            adData,
        },
    }
};
export {adCreate, formNameCreateAd, formSellOrBuyCreateAd, formTagsCreateAd, formPriceCreateAd, formTextAreaDescriptionCreateAd, formUrlCreateAd};