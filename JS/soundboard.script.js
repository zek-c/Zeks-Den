const sounds = [
  {name: 'Sound 1', src: 'sound1.mp3'},
  {name: 'Sound 2', src: 'sound2.mp3'},
  {name: 'Sound 3', src: 'sound3.mp3'},
  // add more sounds here...
];

const recordContainer = document.getElementById('record-container');

// create a record element for each sound
sounds.forEach((sound, index) => {
  const record = document.createElement('div');
  record.classList.add('record');
  const img = document.createElement('img');
  img.src = '/IMG/IMG_0912.png'; // replace with actual image source
  img.alt = sound.name;
  img.addEventListener('click', () => {
    playSound(index);
    img.classList.add('spin');
  });
  record.appendChild(img);
  const caption = document.createElement('div');
  caption.classList.add('caption');
  caption.innerText = sound.name;
  record.appendChild(caption);
  recordContainer.appendChild(record);
});

function playSound(index) {
  const audio = new Audio(sounds[index].src);
  audio.play();
  audio.addEventListener('ended', () => {
    const currentRecord = recordContainer.children[index].children[0];
    currentRecord.classList.remove('spin');
  });
  recordContainer.children[index].children[0].addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    const currentRecord = recordContainer.children[index].children[0];
    currentRecord.classList.remove('spin');
  });
}
