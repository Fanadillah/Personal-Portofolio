function scrollToElement(elementSelector, instance = 0) {
    // select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    //check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        //scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.features');
});

link2.addEventListener('click', () => {
    scrollToElement('.pricing');
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

const projectImages = [
    ["image/project1-1.png", "image/project1-2.png", "image/project1-3.png", "image/project1-4.png"],
    ["image/project2-1.png", "image/project2-2.png", "image/project2-3.png", "image/project2-4.png","image/project2-5.png", "image/project2-6.png", "image/project2-7.png", "image/project2-8.png"],
    ["image/project3-1.png", "image/project3-2.png", "image/project3-3.png", "image/project3-4.png","image/project3-5.png", "image/project3-6.png", "image/project3-7.png"]
];

let currentProject = 0;
let currentSlide = 0;

function openModal(projectIndex) {
    currentProject = projectIndex;
    currentSlide = 0;
    document.getElementById("carousel-img").src = projectImages[projectIndex][0];
    document.getElementById("project-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("project-modal").style.display = "none";
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % projectImages[currentProject].length;
    document.getElementById("carousel-img").src = projectImages[currentProject][currentSlide];
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + projectImages[currentProject].length) % projectImages[currentProject].length;
    document.getElementById("carousel-img").src = projectImages[currentProject][currentSlide];
}
