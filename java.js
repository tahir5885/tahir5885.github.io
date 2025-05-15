// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').slice(1);
    document.getElementById(targetID).scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll to top button
const btn = document.createElement('button');
btn.textContent = '⬆';
btn.id = 'scrollTopBtn';
btn.style = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 15px;
  font-size: 20px;
  background: #00ffff;
  color: #000;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  z-index: 1000;
`;
document.body.appendChild(btn);

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// Lightbox for gallery
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.style = `
  position: fixed;
  top:0; left:0; right:0; bottom:0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1001;
`;
document.body.appendChild(lightbox);

const img = document.createElement('img');
img.style.maxWidth = '90%';
img.style.maxHeight = '80%';
lightbox.appendChild(img);

lightbox.addEventListener('click', () => {
  lightbox.style.visibility = 'hidden';
  lightbox.style.opacity = '0';
});

galleryImages.forEach(image => {
  image.style.cursor = 'pointer';
  image.addEventListener('click', () => {
    img.src = image.src;
    lightbox.style.visibility = 'visible';
    lightbox.style.opacity = '1';
  });
});
