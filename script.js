document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scroll down
            navbar.classList.add('collapsed');
        } else {
            // Scroll up
            navbar.classList.remove('collapsed');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }, false);
});

document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var isNavbarVisible = false;
    var timer;

    // Function to show the navbar
    function showNavbar() {
        navbar.classList.add('visible');
        isNavbarVisible = true;
    }

    // Function to hide the navbar
    function hideNavbar() {
        navbar.classList.remove('visible');
        isNavbarVisible = false;
    }

    // Mousemove event listener to toggle navbar visibility
    document.addEventListener('mousemove', function (event) {
        clearTimeout(timer);
        if (!isNavbarVisible) {
            showNavbar();
        }
        timer = setTimeout(function () {
            if (event.clientY > 50) { // Adjust the value based on your navbar height
                hideNavbar();
            }
        }, 100); // Adjust the delay before hiding the navbar (in milliseconds)
    });

    // Mouseleave event listener to hide the navbar when the mouse leaves the viewport
    document.addEventListener('mouseleave', function () {
        hideNavbar();
    });
});

document.getElementById("id-switch-1").addEventListener("change", function () {
    if (this.checked) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
});

function setTheme(themeName) {
    document.body.className = themeName;
    document.cookie = "theme=" + themeName;
}
window.onload = function () {
    var theme = getCookie("theme");
    if (theme) {
        document.body.className = theme;
        if (theme === "dark") {
            document.getElementById("id-switch-1").checked = true;
        }
    }
}
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
class CheckboxSwitch {
    constructor(domNode) {
        this.switchNode = domNode;
        this.switchNode.addEventListener('focus', () => this.onFocus(event));
        this.switchNode.addEventListener('blur', () => this.onBlur(event));
    }
    onFocus(event) {
        event.currentTarget.parentNode.classList.add('focus');
    }
    onBlur(event) {
        event.currentTarget.parentNode.classList.remove('focus');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var expandButton = document.querySelector('.expand-button');
    var socialLinks = document.querySelector('.social-links');

    expandButton.addEventListener('mouseenter', function() {
        socialLinks.classList.add('show');
    });

    socialLinks.addEventListener('mouseleave', function() {
        socialLinks.classList.remove('show');
    });
});


function toggleVisibility() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        if (isVisible) {
            section.querySelector('.viewport_content').style.display = 'block';
        } else {
            section.querySelector('.viewport_content').style.display = 'none';
        }
    });
}

// Initial call to toggleVisibility to set initial state
toggleVisibility();

// Event listener for scroll event to call toggleVisibility when scrolling
window.addEventListener('scroll', toggleVisibility);
