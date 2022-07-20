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

export const getTotalNumberOfNotifications = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/get_total_notifications');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getSubscribersWeeklyCount = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/get_total_subscribers_count_weekly');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getChannelsWeeklyCount = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/channels/get_total_channel_count_weekly');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getNotificationsWeeklyCount = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/feeds/get_total_notifs_sent_nweeks');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const pushTradingVolume = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/get_push_trading_volume');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// $PUSH compared to ETH and BTC

export const PUSHPrice = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/PUSHPrice');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const ETHPrice = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/ETHPrice');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const MATICPrice = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/MATICPrice');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Total Users by Platform

export const dAppUsers = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/dAppUsers');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const IOSUsers = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/IOSUsers');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const androidUsers = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/androidUsers');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const browserUsers = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/browserUsers');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};