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
            withCredentials: true,
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
        withCredentials: true,
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
async function addCall(user,pass){
    return axios({
        method: 'GET',
        url: 'http://34.89.93.186:8080/apiv1/anuncios',
        withCredentials: true,
        })
        .then(function (response) {
            //console.log(response);
            return response.data;
        })
        .catch(function (error) {
            //console.log(error.response.data);
            return error.response.data;
        })
        .finally(function () {
            console.log("Terminada llamada");
        })
}
///apiv1/anuncios el endpoint de los anuncios.
export {registerCall, loginCall, addCall};