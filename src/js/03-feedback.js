import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form '),
    inputArea: document.querySelector('.feedback-form input'),
    textArea: document.querySelector('.feedback-form textarea'),
    btn: document.querySelector('.feedback-form button'),
};

refs.form.addEventListener('input', throttle(onUserDate, 500));
refs.form.addEventListener('submit', onUserSubmit);

textUserReturn();

const obj = {};

function onUserDate(evt) {
   obj[evt.target.name] = evt.target.value;
   localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

function onUserSubmit(evt) {
    evt.preventDefault();
    console.log('email: ',refs.inputArea.value);
    console.log('message :', refs.textArea.value);
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function textUserReturn() {
  const userText = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (userText) {
      refs.inputArea.value = userText.email !== undefined ? userText.email : "";
      refs.textArea.value = userText.message !== undefined ? userText.message: "";
  }
}
