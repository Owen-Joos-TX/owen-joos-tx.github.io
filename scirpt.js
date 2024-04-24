document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.image-container img');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    function updateImageDisplay(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImageDisplay(currentIndex);
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImageDisplay(currentIndex);
    });

    updateImageDisplay(0); // Display the first image initially
});




// I 100% copyed code here ngl. idk java script really
