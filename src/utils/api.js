import axios from 'axios';

const API_URL = 'https://api.analytics.epns.io/apis/analytics';

export const getTotalNumberOfChannels = async () => {
  try {
    const response = await axios.post(`${API_URL}/get_total_channel_count`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getTotalNumberOfSubscribers = async () => {
  try {
    const response = await axios.post(`${API_URL}/get_total_subscribers_count`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getTotalNumberOfNotifications = async () => {
  try {
    const response = await axios.post(`${API_URL}/feeds/get_notifs_sent`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getSubscribersWeeklyCount = async () => {
  try {
    const response = await axios.post(`${API_URL}/get_total_subscribers_count_weekly`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const pushTradingVolume = async () => {
  try {
    const response = await axios.post(`${API_URL}/get_push_trading_volume`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// $PUSH compared to ETH and BTC

export const PUSHPrice = async () => {
  try {
    const response = await axios.post(`${API_URL}/PUSHPrice`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const ETHPrice = async () => {
  try {
    const response = await axios.post(`${API_URL}/ETHPrice`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const MATICPrice = async () => {
  try {
    const response = await axios.post(`${API_URL}/MATICPrice`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Total Users by Platform

export const dAppUsers = async () => {
  try {
    const response = await axios.post(`${API_URL}/dAppUsers`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const IOSUsers = async () => {
  try {
    const response = await axios.post(`${API_URL}/IOSUsers`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const androidUsers = async () => {
  try {
    const response = await axios.post(`${API_URL}/androidUsers`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const browserUsers = async () => {
  try {
    const response = await axios.post(`${API_URL}/browserUsers`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// New Channels per week

export const getChannelsPerWeek = async () => {
  try {
    const response = await axios.post(`${API_URL}/get_total_channel_count_weekly`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Total Notifications 

export const getTotalNotifications = async () => {
  try {
    const response = await axios.post(`${API_URL}/feeds/get_notifs_sent`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Total Notifications 

export const getNotificationsPerWeek = async () => {
  try {
    const response = await axios.post(`${API_URL}/feeds/get_total_notifs_sent_nweeks`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
