// Nav Bar
function toggleMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('open');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
  });
});
// Form validation
function validateForm() {
  let isValid = true;

  // Clear previous errors
  document.querySelectorAll('.error').forEach(e => e.style.display = 'none');
  document.querySelectorAll('.invalid').forEach(e => e.classList.remove('invalid'));
  document.getElementById('success-msg').style.display = 'none';

  // First name
  const firstName = document.getElementById('firstName');
  if (firstName.value.trim() === '') {
    document.getElementById('firstName-error').style.display = 'block';
    firstName.classList.add('invalid');
    isValid = false;
  }

  // Last name
  const lastName = document.getElementById('lastName');
  if (lastName.value.trim() === '') {
    document.getElementById('lastName-error').style.display = 'block';
    lastName.classList.add('invalid');
    isValid = false;
  }

  // Email — checks for a basic valid format
  const email = document.getElementById('email');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    document.getElementById('email-error').style.display = 'block';
    email.classList.add('invalid');
    isValid = false;
  }

  // Subject
  const subject = document.getElementById('subject');
  if (subject.value === '') {
    document.getElementById('subject-error').style.display = 'block';
    subject.classList.add('invalid');
    isValid = false;
  }

  // Message
  const message = document.getElementById('message');
  if (message.value.trim() === '') {
    document.getElementById('message-error').style.display = 'block';
    message.classList.add('invalid');
    isValid = false;
  }

  // If everything passes, show success
  if (isValid) {
    document.getElementById('contact-form').reset();
    document.getElementById('success-msg').style.display = 'block';
  }
}