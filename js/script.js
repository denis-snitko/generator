document.addEventListener('DOMContentLoaded', function () {
  const minValueInput = document.getElementById('minValue');
  const maxValueInput = document.getElementById('maxValue');
  const generateBtn = document.getElementById('generateBtn');
  const resultSpan = document.getElementById('result');

  function removeLeadingZeros(input) {
    input.value = input.value.replace(/^0+/, '') || '0';
  }

  minValueInput.addEventListener('input', function () {
    removeLeadingZeros(this);
  });

  maxValueInput.addEventListener('input', function () {
    removeLeadingZeros(this);
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
});
