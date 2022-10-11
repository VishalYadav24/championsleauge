import axios from "axios";

const API_KEY = "eNraJAvEMOVX0M_d7IfaecVTtJK_QiAXA-_qUL8WJckQX44PZ1U";
const baseUrl = "https://api.pandascore.co/lol/champions";

export const getListOfChampions = async () => {
  const pageNumber = 1;
  const pageSize = 10;
  const config = {
    params: {
      "page[number]": pageNumber,
      "page[size]": pageSize,
      token: API_KEY,
    },
  };
  try {
    const response = await axios.get(`${baseUrl}`, config);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getChampion = async (championName) => {
  console.log(championName)
  const additionalDataURL = "https://lolbe2.azurewebsites.net/api/v1/champstaticdata";
  const config = {
    params: {
      "search[name]": championName,
      token: API_KEY,
    },
  };
  const additionalConfig = {
    params: {
      "champion": championName,
      
    },
  };
  
  try {
    const response = await axios.get(`${baseUrl}`, config);
    const additionalResponse = await axios.get(`${additionalDataURL}`,additionalConfig);
    const introduction = {"description":additionalResponse.data[0]?.introduction};
    const finalResponse = [{...response.data[0],...introduction}]
    console.log(finalResponse)
    return finalResponse;
  } catch (error) {
    throw error;
  }
};
