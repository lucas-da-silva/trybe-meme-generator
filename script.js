const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const inputImg = document.querySelector('#meme-insert');
const uploadMeme = document.querySelector('#meme-image');
const container = document.querySelector('#meme-image-container');

const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');

const meme1 = document.querySelector('#meme-1');
const meme1Src = meme1.src;
const meme2 = document.querySelector('#meme-2');
const meme2Src = meme2.src;
const meme3 = document.querySelector('#meme-3');
const meme3Src = meme3.src;
const meme4 = document.querySelector('#meme-4');
const meme4Src = meme4.src;

// Create text when typed in input
inputText.addEventListener('keyup', () => {
  memeText.innerText = inputText.value;
});

inputImg.addEventListener('change', () => {
  // [file] provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo.
  const [file] = inputImg.files;

  if (file) {
    uploadMeme.src = URL.createObjectURL(file);
  }
});

fire.addEventListener('click', () => {
  container.style.border = '3px dashed rgb(255, 0, 0)';
});

water.addEventListener('click', () => {
  container.style.border = '5px double rgb(0, 0, 255)';
});

earth.addEventListener('click', () => {
  container.style.border = '6px groove rgb(0, 128, 0)';
});

meme1.addEventListener('click', () => {
  uploadMeme.id = 'meme-image';
  uploadMeme.src = meme1Src;
});

meme2.addEventListener('click', () => {
  uploadMeme.id = 'meme-image';
  uploadMeme.src = meme2Src;
});

meme3.addEventListener('click', () => {
  uploadMeme.id = 'meme-image';
  uploadMeme.src = meme3Src;
});

meme4.addEventListener('click', () => {
  uploadMeme.id = 'meme-image';
  uploadMeme.src = meme4Src;
});