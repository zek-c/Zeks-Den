const sounds = [
  {name: 'Bowser Peaches Song', src: 'sound1.mp3'},
  {name: 'I put the new forgis', src: 'sound2.mp3'},
  {name: 'Evil Goku', src: 'sound3.mp3'},
  {name: 'Treat Me Like White Tees', src: 'sound1.mp3'},
  {name: 'HL2 trumpets', src: 'sound2.mp3'},
  {name: 'i have plans', src: 'sound3.mp3'},
  {name: 'eh eh eh', src: 'sound2.mp3'},
  {name: 'wenomechainasama', src: 'sound3.mp3'},
  {name: 'saul goodman', src: 'sound2.mp3'},
  {name: '1 2 buckle my shoeeee', src: 'sound3.mp3'},
  {name: 'Kitchen Nightmares Violin', src: 'sound2.mp3'},
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
  let isSpinning = false; // track spinning state
  let audio = new Audio(sound.src);
  audio.addEventListener('ended', () => {
    isSpinning = false; // stop spinning when audio ends
    img.classList.remove('spin');
  });
  img.addEventListener('click', () => {
    if (isSpinning) {
      // if already spinning, stop and reset audio
      audio.pause();
      audio.currentTime = 0;
      isSpinning = false;
      img.classList.remove('spin');
    } else {
      // otherwise, start spinning and play audio
      audio.play();
      isSpinning = true;
      img.classList.add('spin');
    }
  });
  record.appendChild(img);
  const caption = document.createElement('div');
  caption.classList.add('caption');
  caption.innerText = sound.name;
  record.appendChild(caption);
  recordContainer.appendChild(record);
});

