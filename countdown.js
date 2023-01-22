const output = document.querySelector('.output');
output.innerHTML = '';

let i = 100;

while (i >= 0) {
  const para = document.createElement('p');
  if (i === 100) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
}