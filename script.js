document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs .tab');
    const galleries = document.querySelectorAll('.photo-gallery');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = tab.getAttribute('data-category');
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            galleries.forEach(gallery => {
                if (gallery.getAttribute('data-category') === category) {
                    gallery.classList.add('active');
                } else {
                    gallery.classList.remove('active');
                }
            });
        });
    });

    galleries[0].classList.add('active');
});
