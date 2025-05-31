const formMemoryKey = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const formData = {email:'', message:''};


function saveInput(e) {
  const name = e.target.name;
  const value = e.target.value

  formData[name] = value.trim();

  localStorage.setItem(formMemoryKey, JSON.stringify(formData));
}

formEl.addEventListener('input', saveInput);

const restoreFormFromStorage = rawData => {
  if (!rawData) {
    return;
  }
  const { email, message } = formEl.elements;
  const { email: savedEmail, message: savedMessage } =
    JSON.parse(rawData);

  email.value = savedEmail; 
  message.value = savedMessage; 

  formData.email = savedEmail;
  formData.message = savedMessage;
};
restoreFormFromStorage(localStorage.getItem(formMemoryKey));


function handleFormSubmit(e) {
  e.preventDefault();
  
  if (formData.email === '' || formData.message === '') {
    console.log('«Fill please all fields».');
    return;
  }
 console.log(formData);
 localStorage.removeItem(formMemoryKey);
 formData.email = '';
 formData.message = '';
 e.currentTarget.reset();
}

formEl.addEventListener('submit', handleFormSubmit);