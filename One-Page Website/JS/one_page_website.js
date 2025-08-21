// LIGHTBOX GALLERY SCRIPT
const galleryImages = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        caption.innerHTML = img.alt;
    });
});

// Close the modal when clicking the close button
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal if user clicks outside the image
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
