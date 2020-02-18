const axios = require('axios').default;

function registerCall(user,pass){
    console.log(user);
    console.log(pass);
    return (
        axios({
            method: 'POST',
            url: 'http://34.89.93.186:8080/apiv1/register',
            //responseType: 'application/json',
            headers: {
                        accept: 'application/json'
                    },
            data: {
                username: `${user}`,
                password: `${pass}`
            },
            })
            .then(function (response) {
                console.log(`Response: ${response}`);
                console.log(response);
            })
            .catch(function (error) {
                console.log(`Error: ${error}`);
            })
            .finally(function () {
                console.log("Finally");
            })
    )
}
export {registerCall};