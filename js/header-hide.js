document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    let scrollingTimeout;

    function hideHeader() {
        header.classList.add('hidden-header');
    }

    function showHeader() {
        header.classList.remove('hidden-header');
    }

    function handleScroll() {
        clearTimeout(scrollingTimeout);

        if (!header.classList.contains('hidden-header')) {
            hideHeader();
        }

        scrollingTimeout = setTimeout(function () {
            showHeader();
        }, 1500); // Adjust the timeout value to control how long it takes to show the header after the user stops scrolling
    }

    window.addEventListener('scroll', handleScroll);

    // Initial header visibility
    showHeader();
});

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    function updateHeaderBackground() {
        const scrollY = window.scrollY;

        if (scrollY === 0) {
            // At the top of the page (landing page)
            header.classList.add('bg-transparent');
        } else {
            // Scrolling down
            header.classList.remove('bg-transparent');
        }
    }

    window.addEventListener('scroll', updateHeaderBackground);

    // Initial header background
    updateHeaderBackground();
});

