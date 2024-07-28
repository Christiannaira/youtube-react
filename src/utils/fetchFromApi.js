import axios from "axios";

const options = {
    method: 'GET',
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': '1e8571aaf4msh6c0ad5a8f8c2affp1e9d7ejsnc63beb1b3a52',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

export const fetchFromApi = async(url) => {

    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data

}