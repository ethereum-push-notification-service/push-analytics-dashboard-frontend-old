import axios from 'axios';

const API_URL = 'http://localhost:4000/api/analytics';

export const getTotalNumberOfChannels = async () => {
  try {
    const response = await axios.post(`${API_URL}/get_total_channel_count`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getTotalNumberOfSubscribers = async () => {
  try {
    const response = await axios.post(`${API_URL}/get_total_subscribers_count`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
