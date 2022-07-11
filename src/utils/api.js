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

// $PUSH compared to ETH and BTC

export const PUSHPrice = async () => {
  try {
    const response = await axios.post(`${API_URL}/PUSHPrice`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const ETHPrice = async () => {
  try {
    const response = await axios.post(`${API_URL}/ETHPrice`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const MATICPrice = async () => {
  try {
    const response = await axios.post(`${API_URL}/MATICPrice`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Total Users by Platform

export const dAppUsers = async () => {
  try {
    const response = await axios.post(`${API_URL}/dAppUsers`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const IOSUsers = async () => {
  try {
    const response = await axios.post(`${API_URL}/IOSUsers`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const androidUsers = async () => {
  try {
    const response = await axios.post(`${API_URL}/androidUsers`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const browserUsers = async () => {
  try {
    const response = await axios.post(`${API_URL}/browserUsers`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// New Subscribers Per Week 

export const subscribersOnMonday = async () => {
  try {
    const response = await axios.post(`${API_URL}/subscribersOnMonday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const subscribersOnTuesday = async () => {
  try {
    const response = await axios.post(`${API_URL}/subscribersOnTuesday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const subscribersOnWednesday = async () => {
  try {
    const response = await axios.post(`${API_URL}/subscribersOnWednesday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const subscribersOnThursday = async () => {
  try {
    const response = await axios.post(`${API_URL}/subscribersOnThursday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const subscribersOnFriday = async () => {
  try {
    const response = await axios.post(`${API_URL}/subscribersOnFriday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const subscribersOnSaturday = async () => {
  try {
    const response = await axios.post(`${API_URL}/subscribersOnSaturday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const subscribersOnSunday = async () => {
  try {
    const response = await axios.post(`${API_URL}/subscribersOnSunday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// New Channels per week

export const channelsOnMonday = async () => {
  try {
    const response = await axios.post(`${API_URL}/channelsOnMonday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const channelsOnTuesday = async () => {
  try {
    const response = await axios.post(`${API_URL}/channelsOnTuesday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const channelsOnWednesday = async () => {
  try {
    const response = await axios.post(`${API_URL}/channelsOnWednesday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const channelsOnThursday = async () => {
  try {
    const response = await axios.post(`${API_URL}/channelsOnThursday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const channelsOnFriday = async () => {
  try {
    const response = await axios.post(`${API_URL}/channelsOnFriday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const channelsOnSaturday = async () => {
  try {
    const response = await axios.post(`${API_URL}/channelsOnSaturday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const channelsOnSunday = async () => {
  try {
    const response = await axios.post(`${API_URL}/channelsOnSunday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Total Notifications per week

export const notificationsOnMonday = async () => {
  try {
    const response = await axios.post(`${API_URL}/notificationsOnMonday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const notificationsOnTuesday = async () => {
  try {
    const response = await axios.post(`${API_URL}/notificationsOnTuesday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const notificationsOnWednesday = async () => {
  try {
    const response = await axios.post(`${API_URL}/notificationsOnWednesday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const notificationsOnThursday = async () => {
  try {
    const response = await axios.post(`${API_URL}/notificationsOnThursday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const notificationsOnFriday = async () => {
  try {
    const response = await axios.post(`${API_URL}/notificationsOnFriday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const notificationsOnSaturday = async () => {
  try {
    const response = await axios.post(`${API_URL}/notificationsOnSaturday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const notificationsOnSunday = async () => {
  try {
    const response = await axios.post(`${API_URL}/notificationsOnSunday`, {});

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};