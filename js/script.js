document.addEventListener('DOMContentLoaded', function () {
  const minValueInput = document.getElementById('minValue');
  const maxValueInput = document.getElementById('maxValue');
  const generateBtn = document.getElementById('generateBtn');
  const resultSpan = document.getElementById('result');
  const MAX_VALUE = 10000000; // Максимальное значение

  function sanitizeInput(input) {
    input.value = input.value.replace(/^0+/, '') || '0';

    if (parseInt(input.value, 10) > MAX_VALUE) {
      input.value = MAX_VALUE;
    }
  }

  minValueInput.addEventListener('input', function () {
    sanitizeInput(this);
  });

  maxValueInput.addEventListener('input', function () {
    sanitizeInput(this);
  });

  generateBtn.addEventListener('click', function () {
    let min = parseInt(minValueInput.value, 10);
    let max = parseInt(maxValueInput.value, 10);

    if (isNaN(min) || isNaN(max)) {
      alert('Please enter valid numbers.');
      return;
    }

    if (min > max) {
      alert('Minimum value cannot be greater than maximum value.');
      return;
    }

    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    resultSpan.textContent = randomNum;
  });

  document.addEventListener('dblclick', function (e) {
    e.preventDefault();
}, { passive: false });
});
