import axios from 'axios';
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from '../constants/productListConstants';

const productsList = ()=> async(dispatch)=>{
    try{
        dispatch({type: PRODUCT_LIST_REQUEST});

        const { data } = await axios.get('/products');

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        });

    }catch(error){
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message
        })
    }
}

export { productsList }