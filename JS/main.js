let scrollingUp = document.querySelector(".scrolling-up");
window.onscroll = function () {
    if (window.scrollY >= 400) scrollingUp.classList.add("show");
    else scrollingUp.classList.remove("show");
};
scrollingUp.onclick = function () {
    window.scrollTo(0, 0);
};

