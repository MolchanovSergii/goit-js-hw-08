import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form '),
    input: document.querySelector('.feedback-form input'),
    text: document.querySelector('.feedback-form textarea'),
    btn: document.querySelector('.feedback-form button'),
};

refs.form.addEventListener('input', throttle(onUserDate, 500));
refs.form.addEventListener('submit', onUserSubmit);

textUserReturn();

const obj = {};

function onUserDate(evt) {
    // obj[evt.target.name] = evt.target.value;
    obj.email = refs.form.email.value;
    obj.message = refs.form.message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

function onUserSubmit(evt) {
    evt.preventDefault();
    console.log('data user ',obj);
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function textUserReturn() {
    const userText = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (userText) {
      refs.input.value = userText.email;
      refs.text.value = userText.message;
  }
}
