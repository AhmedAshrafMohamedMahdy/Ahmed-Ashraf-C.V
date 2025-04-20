
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = `&copy; ${yearSpan.textContent} Ahmed Ashraf Mohamed Mahdy`;



    document.addEventListener("DOMContentLoaded", function() {
        document.body.style.opacity = 0;
        document.body.style.transition = "opacity 1s";
        setTimeout(() => {
            document.body.style.opacity = 1;
        }, 100);
    });