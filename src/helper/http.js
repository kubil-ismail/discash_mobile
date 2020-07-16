/* eslint-disable prettier/prettier */
import axios from 'axios';

const url = 'http://192.168.43.133:8000/';

// Fetch Data
export const get = async (data) => {
  try {
    const getData = await axios.get(url + data.url, data.body, data.config);
    return getData;
  } catch (error) {
    return error.response;
  }
};

// Post Data
export const post = async (data) => {
  try {
    const postData = await axios.post(url + data.url, data.body, data.config);
    return postData;
  } catch (error) {
    return error.response;
  }
};

// Patch Data
export const patch = async (data) => {
  try {
    const patchData = await axios.patch(url + data.url, data.body, data.config);
    return patchData;
  } catch (error) {
    return error.response;
  }
};

// Remove Data
export const remove = async (data) => {
  try {
    const postData = await axios.delete(url + data.url, data.body, data.config);
    return postData;
  } catch (error) {
    return error.response;
  }
};
