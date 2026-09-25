const form = document.getElementById('loginForm');
const submitBtn = form.querySelector('.submit-btn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  
  setTimeout(() => {
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    
    emailInput.value = '';
    passwordInput.value = '';
  }, 2000);
});

const inputs = document.querySelectorAll('.form-input');

inputs.forEach(input => {
  input.addEventListener('blur', function() {
    if (this.value.trim() !== '') {
      this.style.borderColor = '#10b981';
    }
  });
  
  input.addEventListener('focus', function() {
    this.style.borderColor = '#2563eb';
  });
});
