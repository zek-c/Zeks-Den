const sounds = [
  {name: 'Bowser Peaches Song', src: '/SOUNDS/peaches.mp3'},
  {name: 'I put the new forgis', src: '/SOUNDS/forgis.mp3'},
  {name: 'Evil Goku', src: '/SOUNDS/prowler.mp3'},
  {name: 'Treat Me Like White Tees', src: '/SOUNDS/whitetees.mp3'},
  {name: 'HL2 trumpets', src: '/SOUNDS/trumpets.mp3'},
  {name: 'i have plans', src: '/SOUNDS/plans.mp3'},
  {name: 'eh eh eh', src: '/SOUNDS/eh.mp3'},
  {name: 'wenomechainasama', src: '/SOUNDS/weno.mp3'},
  {name: 'saul goodman', src: '/SOUNDS/saul.mp3'},
  {name: '1 2 buckle my shoeeee', src: '/SOUNDS/show.mp3'},
  {name: 'Kitchen Nightmares Violin', src: '/SOUNDS/violin.mp3'},
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

