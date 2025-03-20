import axios from 'axios';
import { Data, PropsFetchImagesFromAPI } from '../App/App.types';

const myApiKey = 'aUUFhV5qzOKkzPfoynscYskdBG7Pocuu1yonl_sGUaA';
axios.defaults.headers.common['Authorization'] = `Client-ID ${myApiKey}`;
axios.defaults.headers.common['Accept'] = 'v1';

export const fetchImagesFromAPI = async ({query, page}: PropsFetchImagesFromAPI): Promise<Data> => {
  try {
    const response = await axios.get<Data>(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}`
    );
    console.log(response.data);
  
  return  response.data;
  } catch (error: unknown) {
       throw new Error(`Error fetching images: ${(error as Error).message}`);
  }
};
