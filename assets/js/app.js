const btn = document.querySelector('.btn');
const copyBtn = document.querySelector('.--blue');
const disp = document.querySelector('.display');
const body = document.querySelector('body');

btn.addEventListener('click', (e) => {
  disp.innerHTML = generateColor();
});

copyBtn.addEventListener('click', (e) => {
  copyClipboard();
});

const copyClipboard = () => {
  const temp = document.createElement('textarea');
  body.appendChild(temp);
  temp.value = disp.innerText;
  temp.select();
  document.execCommand('copy');
  temp.remove();
};

const generateNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const generateColor = () => {
  let color = new String('#');
  let hex = new Array('1','2','3','4', '5','6','7','8','9','A','B','C','D','E','F');

  for (let i = 0; i < 6; i++) {
    color += hex[generateNumber(1, 15)];
  }

  return color;
};
