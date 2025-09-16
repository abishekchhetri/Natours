const body = document.querySelector('body');
export const removeAlert = () => {
  const alert = document.querySelector('.alert');
  if (alert) body.removeChild(alert);
};
export const addAlert = (status, message) => {
  removeAlert();
  const alert = `<div class='alert ${status === 'success' ? 'alert--success' : 'alert--error'}'>${message}</div>`;
  body.insertAdjacentHTML('afterbegin', alert);
};
