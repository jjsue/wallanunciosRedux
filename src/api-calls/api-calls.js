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
                return response;
            })
            .catch(function (error) {
                console.log(error.response.data);
                return error.response.data;
            })
            .finally(function () {
                console.log("Terminada llamada");
            })
}
export {registerCall};