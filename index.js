const express = require('express');
const app = express();
const port = 3000;
const devsite = `http://127.0.0.1:${port}`;

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
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  // Sanitize form data
  const sanitized_name = name.replace(/[^a-zA-Z ]/g, '');
  const sanitized_phone = phone.replace(/[^0-9]/g, '');
  const sanitized_email = email.replace(/[^a-zA-Z0-9@.]/g, '');
  const sanitized_subject = subject.replace(/[^a-zA-Z ]/g, '');
  const sanitized_message = message.replace(/[^a-zA-Z0-9 .]/g, '');

  // Validate form data
  let is_valid = true;
  const email_regex =
    /^[a-zA-Z0-9.]{1,28}[@]{1}([a-zA-Z0-9]{2,28}[.]{1}){1,6}[a-zA-Z]{2,4}$/;
  const subjectOptions = ['Job Offer', 'Business', 'Connect', 'Other'];

  if (sanitized_name.length < 2 || sanitized_name.length > 50) {
    is_valid = false;
  } else if (
    (sanitized_phone.length > 0 && sanitized_phone.length < 10) ||
    sanitized_phone.length > 15
  ) {
    is_valid = false;
  } else if (
    sanitized_email.length < 5 ||
    sanitized_email.length > 50 ||
    !sanitized_email.includes('@') ||
    !email_regex.test(sanitized_email)
  ) {
    is_valid = false;
  } else if (!subjectOptions.includes(sanitized_subject)) {
    is_valid = false;
  } else if (sanitized_message.length < 10 || sanitized_message.length > 500) {
    is_valid = false;
  }

  if (!is_valid) {
    res.send('Invalid form data');
    return;
  } else {
    // Send email to me, or
    // Fill Google Form with form data, or
    // Something else

    // Send confirmation to user
    res.send(
      `Thank you for contacting us ${name}. We will get back to you shortly.`
    );
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on ${devsite}`);
});
