import axiosClient from "./axiosClient";

const fruitAPI = {

    getAllAdminProduct(params){
        const url = '/api/product';
        return axiosClient.get(url, params)
    },
    updateAdminProduct(productID){
        const url = `/api/product/${productID}`;
        return axiosClient.patch(url);
    },
};
export default fruitAPI;