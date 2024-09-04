document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.menu-item');
    console.log(images)
    images.forEach(image => {
        image.addEventListener('click', () => {
            alert(`You clicked on the ${image.alt} image!`);
        });
    });
});
