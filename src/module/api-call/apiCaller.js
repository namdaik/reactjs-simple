import axios from 'axios';

export default function callApi(path = '', method = 'GET', body){
    return axios({
        method: method,
        url: `https://1.boogek.com/f/getUrl?url=https://freetuts.net/${path}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};