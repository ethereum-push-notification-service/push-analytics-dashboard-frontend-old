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




// New Channels per week

export const channelsOnMonday = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/channelsOnMonday');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const channelsOnTuesday = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/channelsOnTuesday');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const channelsOnWednesday = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/channelsOnWednesday');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const channelsOnThursday = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/channelsOnThursday');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const channelsOnFriday = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/channelsOnFriday');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const channelsOnSaturday = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/channelsOnSaturday');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const channelsOnSunday = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/channelsOnSunday');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Total Notifications per week

export const notificationsOnMonday = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/notificationsOnMonday');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const notificationsOnTuesday = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/notificationsOnTuesday');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const notificationsOnWednesday = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/notificationsOnWednesday');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const notificationsOnThursday = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/notificationsOnThursday');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const notificationsOnFriday = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/notificationsOnFriday');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const notificationsOnSaturday = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/notificationsOnSaturday');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const notificationsOnSunday = async () => {
  try {
    const response = await axios.post('https://api.analytics.epns.io/apis/analytics/notificationsOnSunday');

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
