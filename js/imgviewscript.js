// ==== ไฟล์ imgviewscript.js ====

const lightbox = document.getElementById("lightbox");
const lbImage = document.getElementById("lbImage");
const lbCaption = document.getElementById("lbCaption");
const lbThumbs = document.getElementById("lbThumbs");

let currentIndex = 0;
let currentGallery = [];
let lastFocused = null;

// ฟังก์ชันสร้าง thumbnails
function buildThumbnails() {
  lbThumbs.innerHTML = "";

  currentGallery.forEach((img, index) => {
    const thumb = document.createElement("button");
    const thumbImg = document.createElement("img");

    // ✅ ใช้ภาพต้นฉบับมาสร้าง thumbnail (crop ด้วย CSS)
    thumbImg.src = img.src;
    thumbImg.alt = img.caption || "";

    thumb.addEventListener("click", () => {
      showImage(index);
    });

    thumb.appendChild(thumbImg);
    lbThumbs.appendChild(thumb);
  });
}

// อัปเดตภาพหลัก
function showImage(index) {
  currentIndex = (index + currentGallery.length) % currentGallery.length;
  const img = currentGallery[currentIndex];
  lbImage.src = img.src;
  lbImage.alt = img.alt || "";
  lbCaption.textContent = img.alt || "";
  updateActiveThumb();
}

function updateActiveThumb() {
  lbThumbs.querySelectorAll("button").forEach(b => b.classList.remove("active"));
  const active = lbThumbs.querySelector(`button[data-index="${currentIndex}"]`);
  if (active) active.classList.add("active");
}

// เปิด lightbox
function openLightbox(galleryKey) {
  currentGallery = galleryCollections[galleryKey] || [];
  if (currentGallery.length === 0) return;

  buildThumbnails();
  showImage(0);

  lastFocused = document.activeElement;
  lightbox.setAttribute("aria-hidden", "false"); // ✅ ทำให้ popup แสดง
  document.documentElement.style.overflow = "hidden"; // ปิด scroll
}

function closeLightbox() {
  lightbox.setAttribute("aria-hidden", "true"); // ✅ ซ่อน popup
  document.documentElement.style.overflow = "";
  lbImage.src = "";
  if (lastFocused) lastFocused.focus();
}

// การควบคุมปุ่ม
document.addEventListener("click", (e) => {
  if (e.target.closest("[data-prev]")) showImage(currentIndex - 1);
  else if (e.target.closest("[data-next]")) showImage(currentIndex + 1);
  else if (e.target.closest("[data-close]")) closeLightbox();
});

// เปิด gallery ตามปุ่ม
document.querySelectorAll(".open-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.gallery;
    openLightbox(key);
  });
});

// ปิดด้วย Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.getAttribute("aria-hidden") === "false") {
    closeLightbox();
  } else if (e.key === "ArrowLeft") {
    showImage(currentIndex - 1);
  } else if (e.key === "ArrowRight") {
    showImage(currentIndex + 1);
  }
});
