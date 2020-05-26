const adCreate = (adData) => {
    return {
        type: 'AD_CREATE',
        payload: {
            adData,
        },
    }
};
export {adCreate};