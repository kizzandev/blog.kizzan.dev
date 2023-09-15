const express = require('express');
const app = express();
const port = 3000;
const devsite = `http://127.0.0.1:${port}`;

const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// CV page
app.get('/cv', (req, res) => {
  res.sendFile(__dirname + '/cv.html');
});

// Handle form submission
app.post('/', async (req, res) => {
  const name = req.body.name;
  // const phone = req.body.phone;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  // Sanitize form data
  const sanitized_name = name.replace(/[^a-zA-Z ]/g, '');
  // const sanitized_phone = phone.replace(/[^+0-9]/g, '');
  const sanitized_email = email.replace(/[^a-zA-Z0-9@.]/g, '');
  const sanitized_subject = subject.replace(/[^a-zA-Z ]/g, '');

  // Validate form data
  let is_valid = true;
  const email_regex =
    /^[a-zA-Z0-9.]{1,28}[@]{1}([a-zA-Z0-9]{2,28}[.]{1}){1,6}[a-zA-Z]{2,4}$/;
  const subjectOptions = ['job offer', 'business', 'connect', 'other'];
  // const phone_regex = /^[+]{0,1}[0-9]{10,15}$/;

  if (sanitized_name.length < 2 || sanitized_name.length > 50) {
    // console.log('validation: name invalid');
    is_valid = false;
    // } else if (
    //   (!phone_regex.test(sanitized_phone) && sanitized_phone.length > 0) ||
    //   (sanitized_phone.length < 16 && sanitized_phone.length > 9)
    // ) {
    // console.log('validation: phone invalid');
    // is_valid = false;
  } else if (
    sanitized_email.length < 5 ||
    sanitized_email.length > 50 ||
    !sanitized_email.includes('@') ||
    !email_regex.test(sanitized_email)
  ) {
    // console.log('validation: email invalid');
    is_valid = false;
  } else if (!subjectOptions.includes(sanitized_subject.toLowerCase())) {
    // console.log('validation: subject invalid');
    is_valid = false;
  } else if (message.length < 10 || message.length > 500) {
    // console.log('validation: message invalid');
    is_valid = false;
  }

  if (!is_valid) {
    // return response not ok if form data is invalid
    res.status(400).send('Form data is invalid');
    return;
  }

  try {
    // let gformurl = '';
    // if (sanitized_phone.length > 0) {
    //   gformurl = `https://docs.google.com/forms/d/e/1FAIpQLSfoJJ6j4g1J6e8Rfl4KtBNx7Ry97DxYZuH7OlQ-ajo-ttYT4A/formResponse?entry.535828247=${sanitized_name}&entry.216733776=${sanitized_phone}&entry.820148392=${sanitized_email}&entry.1303174713=${sanitized_subject}&entry.265569860=${sanitized_message}`;
    // } else {
    const gformurl = `https://docs.google.com/forms/d/e/1FAIpQLSfoJJ6j4g1J6e8Rfl4KtBNx7Ry97DxYZuH7OlQ-ajo-ttYT4A/formResponse?entry.535828247=${sanitized_name}&entry.820148392=${sanitized_email}&entry.1303174713=${sanitized_subject}&entry.265569860=${message}`;
    // }

    // submit form data to google form
    await axios.get(gformurl);
    res.status(200).send('Form data submitted successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on ${devsite}`);
});
