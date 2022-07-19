import axios from 'axios';

export const getTotalNumberOfChannels = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/get_total_channel_count');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getTotalNumberOfSubscribers = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/get_total_subscribers_count');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
