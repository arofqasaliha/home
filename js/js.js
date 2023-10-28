const imageContainer = document.querySelector('.image-container')
const images = ["media/lbir.jpg","media/l3id.jpg","media/is3af.png","media/jawami3.png","media/mobadarat.png"];
let currentIndex= 0;
function changeImage(){
    imageContainer.innerHTML = '.';
    const img = document.createElement('img');
    img.src = images[currentIndex];
    img.alt = 'صورة ${currentIndex + 1}';
    imageContainer.appendChild(img);
    currentIndex = (currentIndex + 1) % images.length;
}    
setInterval(changeImage, 6000)
changeImage();