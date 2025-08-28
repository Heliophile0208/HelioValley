
//parallax
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let plant = document.getElementById('plant');
let bird = document.getElementById('bird');
let bird2 = document.getElementById('bird2');
let bird3 = document.getElementById('bird3');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    plant.style.bottom = value * 0.5 + 'px';
    hill3.style.left = value * 0.05 + 'px';
    hill2.style.left = value * -0.02 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * -0.3 + 'px';
    bird.style.transform = `translate(${value * 1.0}px, ${value * -0.5}px)`;
    bird2.style.transform = `translate(${value * 1.2}px, ${value * -0.3}px)`;
    bird3.style.transform = `translate(${value * 0.8}px, ${value * -0.7}px)`;
});
//lá rơi
const sec = document.querySelector(".secbackground");
const leafImages = ["leaffall.png", "leaffall2.png", "leaffall3.png"];

function createLeaf() {
    const leaf2 = document.createElement("div");
    leaf2.classList.add("leaf");

    // random loại lá
    const randomLeaf = leafImages[Math.floor(Math.random() * leafImages.length)];
    leaf2.style.backgroundImage = `url('${randomLeaf}')`;

    // random vị trí ngang trong secbackground
    leaf2.style.left = Math.random() * sec.offsetWidth + "px";

    // random kích thước
    const size = 20 + Math.random() * 40;
    leaf2.style.width = size + "px";
    leaf2.style.height = size + "px";

    // random tốc độ rơi
    const duration = 5 + Math.random() * 5;
    leaf2.style.animationDuration = duration + "s";

    sec.appendChild(leaf2);

    // Xoá khi rơi xong
    setTimeout(() => {
        leaf2.remove();
    }, duration * 3000);
}

// Tạo lá liên tục mỗi 400ms
setInterval(createLeaf, 400);

//điện thoại
function checkOrientation() {
    const notice = document.getElementById('rotate-notice');
    if (window.innerWidth <= 768 && window.innerHeight > window.innerWidth) {
        // Điện thoại dọc → hiện thông báo
        notice.style.display = 'flex';
    } else {
        // Desktop, tablet, hoặc ngang → ẩn
        notice.style.display = 'none';
    }
}

// Khi load trang
window.addEventListener('load', checkOrientation);
// Khi resize hoặc xoay thiết bị
window.addEventListener('resize', checkOrientation);
//
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.querySelector('.modal .close');
const images = document.querySelectorAll('.gallery img');

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
        modalTitle.textContent = img.dataset.title || img.alt;
        modalDesc.textContent = img.dataset.info;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
//chữ chạy
const elements = document.querySelectorAll('.introduce h2, .introduce p');

function revealOnScroll() {
    const triggerPoint = window.innerHeight * 0.85;

    elements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerPoint) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
// bay ảnh

function checkImages() {
    const triggerBottom = window.innerHeight * 0.85; // vị trí kích hoạt

    images.forEach(img => {
        const imgTop = img.getBoundingClientRect().top;

        if (imgTop < triggerBottom) {
            img.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkImages);
window.addEventListener('load', checkImages); // check ngay khi load
// back to top
document.addEventListener("DOMContentLoaded", function() {
const backToTopBtn = document.getElementById("backToTopBtn");

if (backToTopBtn) {
// Hiển thị/nút ẩn khi cuộn
window.addEventListener("scroll", function() {
if (window.scrollY > 300) {
backToTopBtn.classList.add("show");
} else {
backToTopBtn.classList.remove("show");
}
});

// Cuộn lên đầu trang khi nhấp
backToTopBtn.addEventListener("click", function(e) {
e.preventDefault();
window.scrollTo({
top: 0,
behavior: "smooth"
});
});
} else {
console.error("Không tìm thấy nút 'Lên đầu trang'");
}
});