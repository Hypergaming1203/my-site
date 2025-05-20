const a = "Qari Israafeel Misbahi";
const b = "Hafiz Luqmaan";
const c = "Hafiz Zaheer-Ul-Haq";
const container = document.getElementById('container');

const recordings = [
  { file: "Q_SurahFatiha_Maya.aac", reader: a , lehja: "Maya", surah: "Al-Fatiha" },
  { file: "surah-alQiyamah full.mp3", reader: b , lehja: "Kurd", surah: "Al-Qiyaamah" },
  { file: "Q_Ghashiyah_misri.aac", reader: a , lehja: "Misri" , surah: "Al-Ghashiyah" },
  { file: "Q_TaawwuzOtasmiyyah_Maya.aac", reader: a , lehja : "Maya", surah: "TaawwuzOtasmiyyah" },
  { file: "wadzuha.misri.q.aac" , reader: a , lehja: "Misri" , surah: "wadzuha" },
  { file: "H_SubHanAllazee_Hijazi.aac" , reader: c,lehja:"Misri",surah:"SubHaanAllazee"},
  //{ file: "" , reader: b,lehja:"",surah:""}
  // aur bhi add kar sakta hai
];

 
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