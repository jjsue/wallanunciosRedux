const axios = require('axios').default;

async function registerCall(user,pass){
        return axios({
            method: 'POST',
            url: 'http://34.89.93.186:8080/apiv1/register',
            headers: {
                        accept: 'application/json'
                    },
            data: {
                username: `${user}`,
                password: `${pass}`
            },
            })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return error.response.data;
            })
            .finally(function () {
                console.log("Terminada llamada");
            })
}

async function loginCall(user,pass){
    return axios({
        method: 'POST',
        url: 'http://34.89.93.186:8080/apiv1/login',
        headers: {
                    accept: 'application/json'
                },
        data: {
            username: `${user}`,
            password: `${pass}`
        },
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.response.data;
        })
        .finally(function () {
            console.log("Terminada llamada");
        })
}
export {registerCall, loginCall};