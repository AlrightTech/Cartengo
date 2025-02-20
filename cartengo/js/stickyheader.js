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



//##################> Show Hide Password start >##############33 
document.querySelectorAll('.eyeicons').forEach(icon => {
    icon.addEventListener('click', function () {
        let input = this.previousElementSibling;
        if (input.type === "password") {
            input.type = "text";
            this.innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            input.type = "password";
            this.innerHTML = '<i class="fas fa-eye"></i>';
        }
    });
});
//##################> Show Hide Password End  >##############33



//##############> Video Start <################## 
var video = document.getElementById("modalVideo");
var modal = document.getElementById("videoModal");

modal.addEventListener('hidden.bs.modal', function () {
    video.pause(); // Pause video when modal is closed
});
//##############> Video End <##################


//##############>2 Video Start <################## 

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('carr-viddeo');
    const playBtn = document.getElementById('carr-viddeo-play');
    const bigPlayBtn = document.querySelector('.carr-viddeo-play-btn');
    const progressBar = document.querySelector('.progress-bar');
    const timeDisplay = document.getElementById('carr-viddeo-time');

    function togglePlay() {
        if (video.paused) {
            video.play();
            playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>';
            bigPlayBtn.style.display = 'none';
        } else {
            video.pause();
            playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>';
            bigPlayBtn.style.display = 'flex';
        }
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    playBtn.addEventListener('click', togglePlay);
    bigPlayBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);

    video.addEventListener('timeupdate', function () {
        const percentage = (video.currentTime / video.duration) * 100;
        progressBar.style.width = percentage + '%';
        timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
    });

    document.querySelector('.progress').addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        video.currentTime = pos * video.duration;
    });
});
 
//##############>2 Video End <################## 



 