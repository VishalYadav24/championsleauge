import axios from "axios";

const API_KEY = "eNraJAvEMOVX0M_d7IfaecVTtJK_QiAXA-_qUL8WJckQX44PZ1U";
const baseUrl="https://api.pandascore.co/lol/champions";

export const getListOfChampions = async() => {
    const pageNumber = 1;
    const pageSize = 10;
    const config = {
        params:{
            "page[number]":pageNumber,
            "page[size]":pageSize,
            "token":API_KEY
        }
    }
    try{

        const response = await axios.get(`${baseUrl}`,config);
        return response?.data;
    }
    catch(error){
        throw(error);
    }
  
};
