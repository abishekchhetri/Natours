import axios from 'axios';
import { addAlert, removeAlert } from './alert';

export const createBookingSession = async (tourId) => {
  try {
    console.log(tourId);

    const stripeLink = await axios.post(
      `http://127.0.0.1:3000/api/v1/booking/checkout-session/${tourId}`,
    );

    location.assign(stripeLink.data.url);
  } catch (err) {
    addAlert(error, err);
    window.setTimeout(() => {
      removeAlert();
    }, 2000);
  }
};
