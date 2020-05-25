const adStorage = (adData) => {
    return {
        type: 'AD_STORAGE',
        payload: {
            adData,
        },
    }
};
export {adStorage};