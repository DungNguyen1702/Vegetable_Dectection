import axiosClient from "./axiosClient";

const fruitAPI = {
    allFruit: async() => {
        const url = "/api/fruit/";
        return await axiosClient.get(url)
    },

    getFruitById : async(id)=>{
        const url = `/api/fruit/${id}`;
        return await axiosClient.get(url)
    }
};
export default fruitAPI;