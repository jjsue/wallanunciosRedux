const addUsername = (username) => {
    return {
        type: 'ADD_USERNAME',
        payload: {
            username
        },
    }
};
export default addUsername;