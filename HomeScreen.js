     const heroVideos = [
    {
      src: "Videos/invitation.mp4",
      title: "The Invitation",
	  image: "Videos/invitation.jpg",
      subtitle: "A prelude to love, filmed in the heart of Araku",
      desc: "Shot in the serene hills of Araku, Kavya and Bhargav's pre-wedding journey unfolds like a dream — a celebration of love, laughter, and the promise of always.",
      meta: "2022 | Pre-Wedding Short Film | Telugu | Araku",
      info: `Kavya and Bhargav’s love story unfolds in this intimate pre-wedding shoot, filmed in the serene landscapes of Araku.<br>
             Shot exclusively for their wedding invitation, this cinematic journey captures the joy, charm, and timeless bond of two hearts becoming one.<br><br>
             <strong>Cast:</strong> Kavya, Bhargav<br>
             <strong>Direction Supervision:</strong> Eswar<br>
             <strong>Genres:</strong> Romance, Nature, Telugu Wedding Films`,
	  tags: "Kavya, Bhargav, Romance, Love, bhaavyam, PreWedding, Invitation, Araku",
	  section: "FriendFlix Originals "
    },
    {
      src: "Videos/bgmi.mp4",
      title: "BGMI Beats",
	  image: "Videos/bgmi.jpg",
      subtitle: "Game of Hearts",
      desc: "Bhargav’s favorite game became Kavya’s secret mission. What started as gameplay turned into a celebration of love and laughter.",
      meta: "2024 | Surprise Anniversary Video | Telugu | BGMI",
      info: `Kavya secretly learned BGMI to surprise Bhargav and spend more time with him in the game he enjoys.<br>
           This video is made from their actual gameplay moments, edited as a lighthearted anniversary gift showing them dancing together in-game.<br><br>
           <strong>Cast:</strong> Kavya, Bhargav (In-Game)<br>
           <strong>Edit:</strong> Eswar<br>
           <strong>Genres:</strong> Gaming, Edit, Romance`,
	  tags: "Kavya, Bhargav, Edit, Eswar, Gaming, Romance, Love, bhaavyam, BGMI",
	  section: "FriendFlix Originals "
    },
	{
  src: "Videos/pavanPelliHighlights.mp4",
  title: "Pavan Pelli Highlights",
  image: "Videos/pavanPelliHighlights.jpg",
  subtitle: "When wedding chaos met cinematic comedy",
  desc: "A hilarious mashup of real-life chaos and reel-life drama from Pavan’s 2025 wedding — edited with heart, humor, and hidden cameras.",
  meta: "2025 | Wedding Highlights | Telugu | Comedy Edit",
  info: `Captured in May 2025, this lighthearted edit turns the emotional and chaotic moments of Pavan's wedding into a mini movie of laughter and love.<br>
         With unexpected entries, playful banter, and moments straight out of a sitcom, this surprise edit captures the true spirit of the celebration.<br><br>
         <strong>Editor & Concept:</strong> Eswar<br>
         <strong>Genres:</strong> Comedy, Wedding, Real Moments`,
  tags: "Pavan, Vaishnavi, wedding, 2025, fun, emotional, kavya, bhargav, eswar, edit, charan, leela, sowjanya, kranthi, durga rao, comedy",
  section: "FriendFlix Originals"
},
    {
  src: "Videos/anniversary.mp4",
  title: "The Anniversary",
  image: "Videos/anniversary.jpg",
  subtitle: "A love story, retold with smiles and surprise",
  desc: "Eswar’s surprise edit for Kavya and Bhargav — their wedding moments woven with emotion, music, and a touch of humor.",
  meta: "2024 | Anniversary Special | Telugu | Emotional & Fun",
  info: `For their anniversary, Eswar created a special surprise video for Kavya and Bhargav.<br>
         Using their wedding footage, he crafted a heartfelt edit filled with nostalgic moments, music, and a funny twist at the end.<br><br>
         <strong>Cast:</strong> Kavya, Bhargav<br>
         <strong>Edit & Surprise Concept:</strong> Eswar<br>
         <strong>Genres:</strong> Wedding, Emotion, Fun, Celebration`,
  tags: "Kavya, Bhargav, anniversary, wedding, edit, eswar, emotion, surprise, fun, song, comedy",
  section: "FriendFlix Originals"
},
    {
  src: "Videos/marryMe.mp4",
  title: "Marry Me",
  image: "Videos/marryMe.jpg",
  subtitle: "A reel that captured a real love story",
  desc: "During the Marry Me trend on Instagram, Kavya and Bhargav recreated the reel as part of their 2022 pre-wedding shoot — blending trend with tenderness.",
  meta: "2022 | Pre-Wedding Reel | Telugu | Trending Love",
  info: `Back in 2022, the “Marry Me” reel trend was viral on Instagram. Kavya and Bhargav, amidst their pre-wedding shoot, recreated this beautiful reel.<br>
         It not only followed the trend but also perfectly captured their chemistry and celebration of love.<br><br>
         <strong>Cast:</strong> Kavya, Bhargav<br>
         <strong>Direction Supervision:</strong> Eswar<br>
         <strong>Genres:</strong> Pre-Wedding, Trend, Romance, Reel`,
  tags: "Kavya, Bhargav, prewedding, reel, trend, marry me, 2022, romance",
  section: "FriendFlix Originals"
}
  ]; 
  
  const $ = id => document.getElementById(id);
  const mainVideo = $("mainVideo");
  const mainContainer = $("mainContainer");
  const muteBtn = $("muteToggle");
  const playBtn = $("playFullscreen");
  const fullscreenPlayer = $("fullscreenPlayer");
  const fullscreenVideo = $("fullscreenVideo");
  const infoModal = $("moreInfo");
  const infoBackdrop = $("moreInfoBackdrop");
  const infoBtn = $("infoBtn");
  const closeInfo = $("closeInfo");
  const playVideo = $("playVideo");
  const searchInput = $("searchInput");
  const searchResults = $("searchResults");
  const mainContent = $("mainContent");
  const userName = new URLSearchParams(window.location.search).get("user") || "User";
  $("username").textContent = userName;
  document.getElementById("homeLink").href = `?user=${userName}`;
  let flag=false;

  let hasInteracted = false;

  muteBtn.addEventListener("click", () => {
    mainVideo.muted = !mainVideo.muted;
    muteBtn.textContent = mainVideo.muted ? "🔇" : "🔊";
  });

  playBtn.addEventListener("click", () => {
    mainVideo.pause();
    mainVideo.muted = true;
    fullscreenVideo.src = mainVideo.querySelector("source").src;
    fullscreenPlayer.style.display = 'flex';
    fullscreenVideo.play();
  });

  $("exitFullscreen").addEventListener("click", () => {
    exitFullscreen();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === 'Escape' && fullscreenPlayer.style.display === 'flex') {
      exitFullscreen();
    }
  });

  function exitFullscreen() {
    fullscreenVideo.pause();
    fullscreenPlayer.style.display = 'none';
    fullscreenVideo.removeAttribute('src');
    fullscreenVideo.load();
    mainVideo.play();
	if(flag){
	  infoModal.style.display = "block";
	  mainVideo.pause();
	  flag=false;
	}
  }

  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const fadeRatio = Math.max(0, 1 - scrollY / 450);
    mainContainer.style.opacity = fadeRatio;
    document.querySelector(".hero-overlay").style.opacity = fadeRatio;

    if (hasInteracted && !mainVideo.muted) {
      mainVideo.volume = fadeRatio;
    }
  });

  document.addEventListener("click", () => {
    hasInteracted = true;
    if (!mainVideo.muted) mainVideo.volume = 1;
  });

  document.querySelectorAll('.movie-card').forEach(card => {
    const video = card.querySelector('video');
    const src = card.dataset.video;

    card.addEventListener('mouseenter', () => {
      video.src = src;
      video.load();
      video.onloadedmetadata = () => {
        video.currentTime = Math.random() * Math.max(0, video.duration - 10);
        video.play();
        setTimeout(() => video.pause(), 10000);
      };
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });

    card.addEventListener('click', () => {
      fullscreenVideo.src = src;
      fullscreenPlayer.style.display = 'flex';
      fullscreenVideo.play();
    });
  });



  const randomVideo = heroVideos[Math.floor(Math.random() * heroVideos.length)];

  $("mainVideoSource").src = randomVideo.src;
  mainVideo.load();
  $("heroTitle").textContent = randomVideo.title;
  $("heroSubtitle").textContent = randomVideo.subtitle;
  $("heroDesc").textContent = randomVideo.desc;
  $("modalVideoSource").src = randomVideo.src;
  $("modalVideo").load();

infoBtn.addEventListener("click", () => {
  $("infoTitle").textContent = randomVideo.title;
  $("infoMeta").textContent = randomVideo.meta;
  $("infoDescription").innerHTML = randomVideo.info;

  const modalVideo = $("modalVideo");
  const modalSource = $("modalVideoSource");
  const posterImg = $("modalPoster");

  posterImg.style.display = "none"; // hide the image initially
  modalVideo.style.display = "block"; // ensure video is visible

  modalSource.src = randomVideo.src;
  modalVideo.load();

  modalVideo.onloadedmetadata = () => {
    const maxStart = Math.max(0, modalVideo.duration - 10);
    const randomStart = Math.random() * maxStart;
    modalVideo.currentTime = randomStart;
    modalVideo.play();

    setTimeout(() => {
      modalVideo.pause();
      modalVideo.style.display = "none";         // hide video
      posterImg.src = randomVideo.image;         // show poster image
      posterImg.style.display = "block";
      posterImg.style.opacity = 0.7;
    }, 10000);
  };

  infoBackdrop.style.display = "block";
  infoModal.style.display = "block";
  mainVideo.pause();
});



  closeInfo.addEventListener("click", () => {
    infoModal.style.display = "none";
    infoBackdrop.style.display = "none";
    mainVideo.play();
  });
  
  playVideo.addEventListener("click", () => {
    infoModal.style.display = "none";
    fullscreenVideo.src = mainVideo.querySelector("source").src;
    fullscreenPlayer.style.display = 'flex';
    fullscreenVideo.play();
	flag=true;
  });

  function renderSearchResults(results) {
    searchResults.innerHTML = "";
	if (results.length === 0) {
	  const noMatch = document.createElement("div");
	  noMatch.style.color = "#aaa";
	  noMatch.style.fontSize = "18px";
	  noMatch.style.padding = "20px";
	  noMatch.style.width = "100%";
	  noMatch.style.textAlign = "center";
	  noMatch.textContent = "No matches found.";
	  searchResults.appendChild(noMatch);
	  return;
	}//movieData
    results.forEach(item => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.dataset.video = item.src;

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;

      const video = document.createElement("video");
      video.muted = true;

      card.appendChild(img);
      card.appendChild(video);
      searchResults.appendChild(card);

      card.addEventListener("mouseenter", () => {
        video.src = item.src;
        video.currentTime = 20;
        video.play();
        setTimeout(() => video.pause(), 10000);
      });

      card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });

      card.addEventListener("click", () => {
        fullscreenVideo.src = item.src;
        fullscreenPlayer.style.display = 'flex';
        fullscreenVideo.play();
      });
    });
  }

  searchInput.addEventListener("input", () => {
    const term = searchInput.value.trim().toLowerCase();
    if (term) {
      const matches = heroVideos.filter(item =>
        item.tags.toLowerCase().includes(term) ||
        item.title.toLowerCase().includes(term)
      );
      mainContent.style.display = "none";
      renderSearchResults(matches);
      searchResults.classList.add("active");
    } else {
      searchResults.classList.remove("active");
      mainContent.style.display = "block";
    }
  });