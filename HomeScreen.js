
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

      const title = document.createElement("div");
	  title.className = "movie-title";
	  title.textContent = item.title;
	  
	  const tag = document.createElement("div");
	  tag.className = "tag";
	  
	  if(item.status){
		tag.textContent = item.status;
		card.append(img, video, title, tag);
	  }else{
		card.append(img, video, title);  
	  }

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
	mainVideo.muted = true;
	muteBtn.textContent ="🔇";
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
  
  const sectionContainer = document.getElementById("videoSections");

function createMovieCard(item) {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.dataset.video = item.src;

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;

  const video = document.createElement("video");
  video.muted = true;

  const title = document.createElement("div");
  title.className = "movie-title";
  title.textContent = item.title;
  
  const tag = document.createElement("div");
  tag.className = "tag";
  
  if(item.status){
	tag.textContent = item.status;
    card.append(img, video, title, tag);
  }else{
	card.append(img, video, title);  
  }
  

  card.onmouseenter = () => {
    video.src = item.src;
    video.load();
    video.onloadedmetadata = () => {
      video.currentTime = Math.random() * Math.max(0, video.duration - 10);
      video.play();
      setTimeout(() => video.pause(), 10000);
    };
  };
  card.onmouseleave = () => {
    video.pause();
    video.currentTime = 0;
  };
  card.onclick = () => {
    fullscreenVideo.src = item.src;
    fullscreenPlayer.style.display = 'flex';
    fullscreenVideo.play();
    resumeInfoModal = false;
  };

  bindMovieCardEvents(card);
  return card;
}

function bindMovieCardEvents(card) {
  const video = card.querySelector("video");
  const src = card.dataset.video;

  card.addEventListener("mouseenter", () => {
    video.src = src;
	video.muted = true; 
    video.load();
    video.onloadedmetadata = () => {
      video.currentTime = Math.random() * Math.max(0, video.duration - 10);
      video.play();
      setTimeout(() => video.pause(), 10000);
    };
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });

  card.addEventListener("click", () => {
    fullscreenVideo.src = src;
    fullscreenPlayer.style.display = 'flex';
    fullscreenVideo.play();
  });
}


function cloneRowForLoop(row, minCards = 15) {
  const originalCards = [...row.children];

  while (row.children.length < minCards) {
    originalCards.forEach(original => {
      const clone = original.cloneNode(true);
      bindMovieCardEvents(clone); // 🔁 Add interactions to clone
      row.appendChild(clone);
    });
  }
}


function renderDynamicSections(videos) {
  const grouped = {};

  // Group videos by section
  videos.forEach(v => {
    v.section.split(',').forEach(section => {
      const key = section.trim();
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(v);
    });
  });

  // 1️⃣ Render FriendFlix Originals First (if exists)
  if (grouped["FriendFlix Originals"]) {
    const title = document.createElement("h2");
    title.className = "first-section-title";
    title.textContent = "FriendFlix Originals";
    const row = document.createElement("div");
    row.className = "row";
    grouped["FriendFlix Originals"].forEach(video => {
      const card = createMovieCard(video);
      row.appendChild(card);
    });
    cloneRowForLoop(row);
    sectionContainer.append(title, row);
    delete grouped["FriendFlix Originals"]; // Remove it to avoid re-rendering
  }

  // 2️⃣ Continue Watching Section (Always second)
  const continueTitle = document.createElement("h2");
  continueTitle.className = "section-title";
  continueTitle.innerHTML = `Continue Watching For <span id="username">${userName}</span>`;
  const continueRow = document.createElement("div");
  continueRow.className = "row";
  continueWatchingList.forEach(video => {
    const card = createMovieCard(video);
    continueRow.appendChild(card);
  });
  cloneRowForLoop(continueRow);
  sectionContainer.append(continueTitle, continueRow);

  // 3️⃣ Remaining sections
  for (const sectionName in grouped) {
    const title = document.createElement("h2");
    title.className = "section-title";
    title.textContent = sectionName;

    const row = document.createElement("div");
    row.className = "row";

    grouped[sectionName].forEach(video => {
      const card = createMovieCard(video);
      row.appendChild(card);
    });
    cloneRowForLoop(row);
    sectionContainer.append(title, row);
  }
}


const continueWatchingList = [...heroVideos]
  .sort(() => 0.5 - Math.random())
  .slice(0, 9);

// Call this function after DOM is ready
renderDynamicSections(heroVideos);
