//Aqui vamos a tomar el mail y lo vamos a guardar en el store de redux para mostrarlo.

const addUsername = (username) => {
    return {
        type: 'ADD_USERNAME',
        payload: {
            username
        },
    }
}
export default addUsername;