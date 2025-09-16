import axios from 'axios';
import { addAlert, removeAlert } from './alert';

//we are consuming apis from here it is awesome and so customizable unlike the traditional post
export const updateMe = async (data, type) => {
  try {
    const link =
      type === 'me' ? '/api/v1/users/updateMe' : '/api/v1/users/updatePassword';

    const message =
      type === 'me'
        ? 'User updated successfully'
        : 'Password updated successfully';

    const user = await axios.patch(link, data);
    if ((user.data.status = 'success')) addAlert('success', message);
    window.setTimeout(() => {
      location.reload(true);
    }, 1000);
  } catch (err) {
    console.log(err);

    addAlert('fail', err.response.data.message);
    window.setTimeout(() => {
      removeAlert();
    }, 1000);
  }
};
