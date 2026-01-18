const a = "Qari Israafeel Misbahi";
const b = "Hafiz Luqmaan";
const c = "Hafiz Zaheer-Ul-Haq";

const container = document.getElementById("container");
const hammenu = document.querySelector(".hammenu");
const hamb = document.querySelector(".hamb");

const recordings = [
  { file: "Audios/q_surahfatiha_maya.aac", reader: a, lehja: "Maya", surah: "Al-Fatiha" },
  { file: "Audios/l_surahfatiha_kurd.aac", reader: b, lehja: "Kurd", surah: "Al-Fatiha" },

  { file: "Audios/q_taawwuzotasmiyyah_maya.aac", reader: a, lehja: "Maya", surah: "Taawwuz & Tasmiyyah" },

  { file: "Audios/aliflaammeem.raqabi.h.aac", reader: c, lehja: "Raqabi", surah: "Al-Baqarah (Alif Laam Meem)" },
  { file: "Audios/aliflaammeem.raqabi.q.aac", reader: a, lehja: "Raqabi", surah: "Al-Baqarah (Alif Laam Meem)" },

  { file: "Audios/aliflaamraa.misri.q.aac", reader: a, lehja: "Misri", surah: "Aal-e-Imran" },

  { file: "Audios/arrahmaan.misri.q.aac", reader: a, lehja: "Misri", surah: "Ar-Rahman" },

  { file: "Audios/fatihatoyunfiqoon.raqabi.h.m4a", reader: c, lehja: "Raqabi", surah: "Fatihatul Yoonfiqoon" },

  { file: "Audios/h_subhanallazee_hijazi.aac", reader: c, lehja: "Hijazi", surah: "Subhaanallazee" },
  { file: "Audios/sub,han,allazee.hijazi.h.m4a", reader: c, lehja: "Hijazi", surah: "Subhaanallazee" },

  { file: "Audios/hal_ataaka.misri.q.mp3", reader: a, lehja: "Misri", surah: "Al-Insaan (Hal Ataaka)" },

  { file: "Audios/innallahashtara.misri.h.aac", reader: c, lehja: "Misri", surah: "At-Tawbah (Inna Allaha Ishtara)" },

  { file: "Audios/izaajaa,a.misri.q.aac", reader: a, lehja: "Misri", surah: "An-Nasr (Izaa Jaa-a)" },

  { file: "Audios/izasshams.misri.q.aac", reader: a, lehja: "Misri", surah: "Ash-Shams" },
  { file: "Audios/izazulzilah.misri.q.aac", reader: a, lehja: "Misri", surah: "Az-Zalzalah" },

  { file: "Audios/layastawee.misri.q.aac", reader: a, lehja: "Misri", surah: "La Yastawi" },

  // Al-Qiyamah (parts)
  { file: "Audios/surah qiyamah (1).aac", reader: b, lehja: "Kurd", surah: "Al-Qiyamah (Part 1)" },
  { file: "Audios/surah qiyamah (2).aac", reader: b, lehja: "Kurd", surah: "Al-Qiyamah (Part 2)" },
  { file: "Audios/surah qiyamah (3).aac", reader: b, lehja: "Kurd", surah: "Al-Qiyamah (Part 3)" },
  { file: "Audios/surah qiyamah Z.m4a", reader: b, lehja: "Kurd", surah: "Al-Qiyamah (Z)" },
  { file: "Audios/surah-alqiyamah full.mp3", reader: b, lehja: "Kurd", surah: "Al-Qiyamah (Full)" },

  { file: "Audios/q_ghashiyah_misri.aac", reader: a, lehja: "Misri", surah: "Al-Ghashiyah" },

  { file: "Audios/wadzuha.misri.q.aac", reader: a, lehja: "Misri", surah: "Ad-Duha" },
  { file: "Audios/watteen.misri.q.aac", reader: a, lehja: "Misri", surah: "At-Teen" },
  { file: "Audios/wailullikulli.misri.q.aac", reader: a, lehja: "Misri", surah: "Al-Humazah" }
];

hamb.addEventListener("click", () => {
  hammenu.classList.toggle("active");
});

recordings.forEach((rec) => {
  const box = document.createElement("div");
  box.className = "audio-box";

  box.innerHTML = `
    <div class="audio-title">
      ${rec.surah} (${rec.lehja}) - ${rec.reader}
    </div>
    <audio controls src="${rec.file}"></audio>
    <br>
    <a href="${rec.file}" download>Download</a>
  `;

  container.appendChild(box);

  const audio = box.querySelector("audio");

  audio.addEventListener("play", () => {
    document.querySelectorAll(".audio-box").forEach((b) => {
      const otherAudio = b.querySelector("audio");
      if (otherAudio !== audio) {
        otherAudio.pause();
        otherAudio.currentTime = 0;
        b.classList.remove("playing");
      }
    });
    box.classList.add("playing");
  });

  audio.addEventListener("pause", () => {
    box.classList.remove("playing");
  });
});