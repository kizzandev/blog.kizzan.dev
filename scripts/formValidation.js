const fullName = document.querySelector('input[name="entry.2005620554"]');
const email = document.querySelector('input[name="entry.1045781291"]');
const phone = document.querySelector('input[name="entry.1166974658"]');
const company = document.querySelector('input[name="entry.1065046570"]');
const subject = document.querySelector('select[name="entry.645880663"');
const message = document.querySelector('textarea[name="entry.839337160"]');
const form = document.querySelector('#gform');

const nameRegex =
  /^[a-zA-Z äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ\u00f1\u00d1]{2,16}$/;
const emailRegex =
  /^[a-zA-Z0-9._-]{1,28}[@]{1}[a-zA-Z0-9-]{2,28}[.]{1}[a-zA-Z]{2,4}$/;
const phoneRegex = /^[0-9+() -]{0,28}$/;
const companyRegex =
  /^[a-zA-Z0-9()\- !äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ\u00f1\u00d1]{2,28}$/;

const arrayValidation = [];
const BD = [];

let onlyOnes = [0, 0, 0, 0, 0];

const valueName = (nameValue) => {
  if (nameValue.trim()) {
    if (nameRegex.test(nameValue)) {
      if (onlyOnes[0] === 0) {
        arrayValidation.push('name');
        onlyOnes[0] = 1;
      }
      BD.push(nameValue);
    }
  }
};

const valueEmail = (emailValue) => {
  if (emailValue.trim()) {
    if (emailRegex.test(emailValue)) {
      if (onlyOnes[1] === 0) {
        arrayValidation.push('email');
        onlyOnes[1] = 1;
      }
      BD.push(emailValue);
    }
  }
};

const valuePhone = (phoneValue) => {
  if (phoneValue.trim()) {
    if (phoneRegex.test(phoneValue)) {
      BD.push(phoneValue);
    }
  }
};

const valueCompany = (companyValue) => {
  if (companyValue.trim()) {
    if (companyRegex.test(companyValue)) {
      if (onlyOnes[2] === 0) {
        arrayValidation.push('company');
        onlyOnes[2] = 1;
      }
      BD.unshift(companyValue);
    }
  }
};

const valueSubject = (subjectValue) => {
  if (nameRegex.test(subjectValue)) {
    if (onlyOnes[3] === 0) {
      arrayValidation.push('subject');
      onlyOnes[3] = 1;
    }
    BD.push(subjectValue);
  }
};

const valueMsg = (msgValue) => {
  if (msgValue.trim()) {
    if (companyRegex.test(msgValue)) {
      if (onlyOnes[4] === 0) {
        arrayValidation.push('message');
        onlyOnes[4] = 1;
      }
      BD.push(msgValue);
    }
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (arrayValidation.length == 5) {
    document
      .querySelector('#hidden_iframe')
      .setAttribute(
        'src',
        `https://docs.google.com/forms/d/e/1FAIpQLSdvlFJoEvUHiYPtHD5zYbZ746bdRSGDcZDmxWSgMq7x2a_Oqw/formResponse?entry.2005620554=${fullName.value}&entry.1045781291=${email.value}&entry.1166974658=${phone.value}&entry.1065046570=${company.value}&entry.645880663=${subject.value}&entry.839337160=${message.value}`
      );
    alert('Your submission has been processed...');
    fullName.value = '';
    email.value = '';
    phone.value = '';
    company.value = '';
    subject.value = 'Job Offer';
    message.value = '';
  }
});

form.addEventListener('change', (e) => {
  // e.preventDefault();
  e.target.matches('input[name="entry.2005620554"]')
    ? valueName(e.target.value)
    : null;
  e.target.matches('input[name="entry.1045781291"]')
    ? valueEmail(e.target.value)
    : null;
  e.target.matches('input[name="entry.1166974658"]')
    ? valuePhone(e.target.value)
    : null;
  e.target.matches('input[name="entry.1065046570"]')
    ? valueCompany(e.target.value)
    : null;
  e.target.matches('select[name="entry.645880663"]')
    ? valueSubject(e.target.value)
    : null;
  e.target.matches('textarea[name="entry.839337160"]')
    ? valueMsg(e.target.value)
    : null;
});

valueName(fullName.value);
valueEmail(email.value);
valuePhone(phone.value);
valueCompany(company.value);
subject.value = 'Job Offer';
valueSubject(subject.value);
valueMsg(message.value);
