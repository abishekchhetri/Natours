import { addAlert, removeAlert } from './alert.js';
import axios from 'axios';

export const login = async (email, password) => {
  try {
    const res = await axios.post('/api/v1/users/login', {
      email,
      password,
    });

    if (res.data.status === 'success') {
      addAlert('success', 'logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    }
  } catch (err) {
    addAlert('error', 'email or password incorrect');
    window.setTimeout(() => {
      removeAlert();
    }, 1000);
    console.log(err);
  }
};

export const logout = async () => {
  try {
    const logout = await axios.get('/api/v1/users/logout');

    if (logout.data.status === 'success') {
      addAlert('success', 'logged out successfully!');
      window.setTimeout(() => {
        location.assign('/');
        // location.reload(true);
      }, 1000);
    }
  } catch (err) {
    addAlert('error', 'failed to logout!');
    window.setTimeout(() => {
      removeAlert();
    }, 1000);
  }
};
