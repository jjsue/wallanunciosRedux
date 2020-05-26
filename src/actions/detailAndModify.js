const detailAction = (adData) => {
    return {
        type: 'DETAIL_GET',
        payload: {
            adData,
        },
    }
};

export {detailAction};