import axios from 'axios';

const API_URL = 'https://api.analytics.epns.io/api/analytics';

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

export const getTotalNumberOfNotifications = async () => {
  try {
    const response = await axios.post(`${API_URL}/get_total_notifications`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const pushTradingVolume = async () => {
  try {
    const response = await axios.post(`${API_URL}/get_push_trading_volume`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};