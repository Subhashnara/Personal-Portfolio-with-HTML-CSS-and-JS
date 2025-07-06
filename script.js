function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// --- PHOTO GALLERY SCRIPT ---
document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery-item img');
  const overlay = document.getElementById('photo-overlay');
  const enlargedPhoto = document.getElementById('enlarged-photo');
  const closeOverlay = document.getElementById('close-overlay');

  galleryImages.forEach(img => {
    img.addEventListener('dblclick', () => {
      enlargedPhoto.src = img.src;
      overlay.classList.add('show');
    });
  });

  const close = () => {
    overlay.classList.remove('show');
  };

  closeOverlay.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    // Close only if the dark background is clicked, not the image itself
    if (e.target === overlay) {
      close();
    }
  });
});
