const videoContainer = document.querySelector('.video-container');
  const video = document.querySelector('.myVideo');
  const playIcon = document.querySelector('.play-icon');

  videoContainer.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playIcon.classList.add('playing');
    } else {
      video.pause();
      playIcon.classList.remove('playing');
    }
  });


  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  const slideWidth = 1000; // Must match container width

  function goToSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    dots[currentIndex].classList.add('active');
  }

  // Add click event to each dot
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      goToSlide(index);
    });
  });

  const cards=document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      // const index = parseInt(this.getAttribute('data-index'));
      
      cards.forEach(card=>{
        card.classList.remove('card_active');
      });
      card.classList.add('card_active');
    });
  });
