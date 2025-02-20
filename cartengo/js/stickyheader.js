window.addEventListener("scroll", function () {
    let header = document.querySelector(".mainheader");
    if (window.scrollY > 200) {
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }
});


   window.addEventListener("load", function () {
    document.querySelector(".loader-main").style.display = "none";  
    document.querySelector(".content").style.display = "block"; 
});




// ################> Bottom To top Start <################

var btn = $('#buttonbtmtop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// ################> Bottom To top End <################



// Active Navbar 

// Active Navbar 