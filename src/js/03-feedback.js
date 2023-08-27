import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  const stringifiedData = JSON.stringify(formData);

  localStorage.setItem(STORAGE_KEY, stringifiedData);
}

function onFormSubmit(event) {
  event.preventDefault();
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);
  console.log(parsedData);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function fillFormWithSavedData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);

  if (parsedData) {
    refs.textarea.value = parsedData.message || '';
    refs.input.value = parsedData.email || '';
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
}
fillFormWithSavedData();
