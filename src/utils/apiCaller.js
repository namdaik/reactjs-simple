import axios from 'axios';
import * as Config from './../const';

export default function callApi(path = '', method = 'GET', body){
    return axios({
        method: method,
        url: `http://localhost:8011/aff/getUrl?url=https://freetuts.net/${path}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};