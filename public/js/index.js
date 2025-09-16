import { createBookingSession } from './booking.js';
import { login, logout } from './login.js';
import { createMap } from './map.js';
import { updateMe } from './updateSetting.js';

let loca = document.querySelector('#map')?.getAttribute('data-location');
let loginForm = document.querySelector('.login-form');
let logoutButton = document.querySelector('.logout');
let userFormData = document.querySelector('.form-user-data');
let userPasswordForm = document.querySelector('.form-user-settings');
let bookTour = document.querySelector('.bookTour');
if (loca) {
  loca = JSON.parse(loca);
  createMap(loca);
}

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#email.form__input').value;
    const password = document.querySelector('#password.form__input').value;
    await login(email, password);
  });
}

if (logoutButton) {
  logoutButton.addEventListener('click', async (e) => {
    await logout();
  });
}

if (userFormData) {
  userFormData.addEventListener('submit', async (e) => {
    e.preventDefault();
    //this is the old way of doint the
    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    //now we create key value pair of form so it is recognized by the server itself
    const data = new FormData();
    data.append('name', document.getElementById('name').value);
    data.append('email', document.getElementById('email').value);
    data.append('photo', document.getElementById('photo').files[0]); //including the file since we have upload single file so...

    //the data is absolutely fine with the ajax request to server
    await updateMe(data, 'me');
  });
}

if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.password-change-button').textContent =
      'updating...';
    const previousPassword = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateMe({ previousPassword, password, passwordConfirm }, 'password');
    document.querySelector('.password-change-button').textContent =
      'SAVE PASSWORD';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });
}

if (bookTour) {
  bookTour.addEventListener('click', (e) => {
    const { tourid } = e.target.dataset;
    createBookingSession(tourid);
  });
}
