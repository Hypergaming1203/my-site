const a = "Qari Israafeel Misbahi";
const b = "Hafiz Luqmaan";

const recordings = [
  { file: "Q_SurahFatiha_Maya.aac", reader: a , lehja: "Maya", surah: "Al-Fatiha" },
  { file: "surah-alQiyamah full.mp3", reader: b , lehja: "Kurd", surah: "Al-Qiyaamah" },
  // aur bhi add kar sakta hai
];

const container = document.getElementById('audio-container');

recordings.forEach((rec) => {
  const box = document.createElement('div');
  box.className = 'audio-box';
  box.innerHTML = `
    <div class="audio-title">${rec.surah} (${rec.lehja}) - ${rec.reader}</div>
    <audio controls src="${rec.file}"></audio>
    <br>
    <a href="${rec.file}" download>Download</a>
  `;
  container.appendChild(box);

  const audio = box.querySelector('audio');

  audio.addEventListener('play', () => {
    // sab box se "playing" class hatao aur sab audio ko pause karo
    document.querySelectorAll('.audio-box').forEach(b => {
      const otherAudio = b.querySelector('audio');
      if (otherAudio !== audio) {
        otherAudio.pause();
        otherAudio.currentTime = 0;
        b.classList.remove('playing');
      }
    });

    // ab current box ko highlight karo
    box.classList.add('playing');
  });

  audio.addEventListener('pause', () => {
    box.classList.remove('playing');
  });
});