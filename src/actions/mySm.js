import callApi from './../module/api-call/apiCaller';
import FakeContentUrl from './../module/fake-content/FakeContentUrl';

export const actFetchSmRequest = () => {
    return dispatch => {
        return callApi('Sm', 'GET', null).then(res => {
            dispatch(actFetchSm(res.data));
        });
    };
}

export const actFetchSm = (Sm) => {
    return {
        type : 'FETCH_Sm',
        Sm
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`Sm/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteProduct(id));
        })
    };
}

export const actDeleteProduct = (id) => {
    return {
        type : 'DELETE_PRODUCT',
        id
    }
}

export const actGetUrlMySmRequest = (path) => {
    return function (dispatch) {
        var fakeContent = new FakeContentUrl();
         return fakeContent.parseAll().then(res => {
            console.log(res);
            dispatch({
                type : 'GET_URL_MY_SM',
                payload : res
            });
        });
    }
}
