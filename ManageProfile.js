import { auth, db } from "./firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const profileGrid = document.getElementById("profileGrid");
const chooseProfileIcons = document.getElementById("chooseProfileIcons");
const profileIcons = document.getElementById("profileIcons");
const addBtn = document.querySelector(".add-profile-btn");
const doneBtn = document.querySelector(".done-profile-btn");
const logoutBtn = document.getElementById("logoutBtn");

let uid = null;
let profileRef = null;
let activeAvatarPicker = null;
let chooseAvatarText = null;

const avatars = [
  "Profiles/red.jpg",
  "Profiles/blue.jpg",
  "Profiles/yellow.jpg",
  "Profiles/green.jpg",
  "Profiles/luca1.jpg",
  "Profiles/luca2.jpg",
  "Profiles/luca3.jpg",
  "Profiles/luca4.jpg",
  "Profiles/luca5.jpg",
  "Profiles/luca6.jpg",
  "Profiles/luca7.jpg",
  "Profiles/luca8.jpg",
  "Profiles/luca9.jpg",
  "Profiles/luca10.jpg",
  "Profiles/luca11.jpg",
  "Profiles/luca12.jpg"
];

let localProfiles = [];

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }
  uid = user.uid;
  profileRef = collection(db, "users", uid, "profiles");
  await loadProfiles();
});

async function loadProfiles() {
  localProfiles = [];
  profileGrid.innerHTML = "";
  chooseProfileIcons.innerHTML = "";
  profileIcons.innerHTML = "";

  // 👉 Show loading text
  profileGrid.innerHTML = `<div id="loading" style="color: #aaa; font-size: 20px; margin-bottom: 20px;">Loading profiles...</div>`;

  const snapshot = await getDocs(profileRef);

  // 👉 Remove loading after fetch
  profileGrid.innerHTML = "";

  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    localProfiles.push({
      id: docSnap.id,
      name: data.name,
      avatar: data.avatar,
      action: "none"
    });
  });

  renderProfiles();
}


function renderProfiles() {
  profileGrid.innerHTML = "";

  localProfiles.filter(p => p.action !== "delete").forEach(p => {
    const div = document.createElement("div");
    div.className = "profile-box";
    div.setAttribute("data-id", p.id);

    div.innerHTML = `
      <div class="profile-img-wrapper">
        <img src="${p.avatar}" class="profile-img" />
        <img src="Icons/Edit.png" class="edit-icon" title="Edit Name" />
        <img src="Icons/bin.png" class="delete-icon" title="Delete Profile"></img>
        <div class="change-avatar-btn">Change Profile Icon</div>
      </div>
      <div class="profile-name-wrapper">
        <input type="text" value="${p.name}" class="profile-name-input" ${p.action === "add" ? "autofocus" : ""}/>
      </div>
    `;

    const input = div.querySelector(".profile-name-input");
    const editIcon = div.querySelector(".edit-icon");
    const deleteIcon = div.querySelector(".delete-icon");
    const changeBtn = div.querySelector(".change-avatar-btn");

    input.readOnly = p.action !== "add";

    editIcon.onclick = () => {
      input.readOnly = false;
      input.classList.add("editing");
      input.focus();
    };

    input.addEventListener("blur", () => {
      input.readOnly = true;
      input.classList.remove("editing");
    });

    deleteIcon.onclick = () => {
      p.action = "delete";
      renderProfiles();
    };

    changeBtn.onclick = () => {
      showAvatarPicker(p.id, div);
    };

    profileGrid.appendChild(div);
    p.element = div;
  });
}

function showAvatarPicker(profileId, parentDiv) {
  if (activeAvatarPicker) activeAvatarPicker.remove();
  if (chooseAvatarText) chooseAvatarText.remove();

  document.querySelectorAll('.profile-box').forEach(box => {
    box.style.transform = "scale(1)";
    box.querySelector('.profile-img')?.classList.remove("glow-highlight");
  });

  const profileBox = document.querySelector(`.profile-box[data-id="${profileId}"]`);
  profileBox.style.transform = "scale(1.1)";
  profileBox.querySelector('.profile-img').classList.add("glow-highlight");

  const chooseAvatar = document.createElement("div");
  chooseAvatar.className = "choose-avatar";
  chooseAvatar.textContent = "Choose Profile Icon:";
  chooseAvatar.style.display = "block";
  chooseAvatarText = chooseAvatar;

  const picker = document.createElement("div");
  picker.className = "avatar-picker";

  const currentProfile = localProfiles.find(p => p.id === profileId);

  avatars.forEach(avatar => {
    const img = document.createElement("img");
    img.src = avatar;
    img.className = "avatar-thumb";

    if (avatar === currentProfile.avatar) {
      img.classList.add("selected");
    }

    img.onclick = () => {
      currentProfile.avatar = avatar;
      if (currentProfile.action !== "add") currentProfile.action = "update";
      renderProfiles();
      showAvatarPicker(profileId, parentDiv);
    };

    picker.appendChild(img);
  });

  chooseProfileIcons.appendChild(chooseAvatar);
  profileIcons.appendChild(picker);
  activeAvatarPicker = picker;
}

addBtn.addEventListener("click", () => {
  const activeCount = localProfiles.filter(p => p.action !== "delete").length;
  if (activeCount >= 10) {
    showLimitBanner("⚠️ You can only have a maximum of 10 profiles.");
    return;
  }

  const base = "User";
  let index = 1;
  let name = `${base}${index}`;
  while (localProfiles.some(p => p.name.toLowerCase() === name.toLowerCase() && p.action !== "delete")) {
    index++;
    name = `${base}${index}`;
  }

  localProfiles.push({
    id: "temp_" + Date.now(),
    name,
    avatar: avatars[Math.floor(Math.random() * avatars.length)],
    action: "add"
  });

  renderProfiles();
});

doneBtn.addEventListener("click", async () => {
  // 🔄 Update local profile names from DOM
  document.querySelectorAll(".profile-box").forEach(box => {
    const input = box.querySelector(".profile-name-input");
    const id = box.getAttribute("data-id");
    const profile = localProfiles.find(p => p.id === id);
    if (profile) {
      const newName = input.value.trim();
      if (newName !== profile.name) {
        profile.name = newName;
        if (profile.action !== "add") profile.action = "update";
      }
    }
  });

  // ❌ Duplicate name check
  const namesSeen = new Set();
  for (const p of localProfiles.filter(p => p.action !== "delete")) {
    const key = p.name.toLowerCase();
    if (namesSeen.has(key)) {
      showLimitBanner(`❌ Duplicate profile name: "${p.name}"`);
      return;
    }
    namesSeen.add(key);
  }

  // ⏳ Show saving feedback
  doneBtn.disabled = true;
  doneBtn.textContent = "Saving...";

  // 🚀 Batch all DB actions in parallel
  const tasks = localProfiles.map(p => {
    if (p.action === "add" && p.name) {
      return addDoc(profileRef, {
        name: p.name,
        avatar: p.avatar,
        createdAt: new Date()
      });
    } else if (p.action === "update" && p.name) {
      return updateDoc(doc(profileRef, p.id), {
        name: p.name,
        avatar: p.avatar
      });
    } else if (p.action === "delete") {
      return deleteDoc(doc(profileRef, p.id));
    } else {
      return Promise.resolve(); // No action
    }
  });

  await Promise.all(tasks); // ✅ Wait for all to complete

  window.location.href = "ProfileScreen.html";
});


function showLimitBanner(message) {
  const banner = document.getElementById("limit-banner");
  banner.textContent = message;
  banner.style.display = "block";
  banner.classList.add("show");

  setTimeout(() => {
    banner.classList.remove("show");
    setTimeout(() => {
      banner.style.display = "none";
    }, 500);
  }, 5000);
}
