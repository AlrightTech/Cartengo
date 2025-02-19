window.addEventListener("scroll", function () {
    let header = document.querySelector(".mainheader");
    if (window.scrollY > 200) {
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }
});
