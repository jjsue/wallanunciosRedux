import { addCall } from './../api-calls/api-calls';
const adStorage = (adData) => {
    return {
        type: 'AD_STORAGE',
        payload: {
            adData,
        },
    }
};
export {adStorage};