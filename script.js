
function spotifyActive() {
  const spotifyList = document.querySelectorAll('.js-spotify h3')
    const ativoClass = 'ativo';
    if(spotifyList.length) {
      spotifyList[0].classList.add(ativoClass);
      spotifyList[0].nextElementSibling.classList.add(ativoClass);
      function activeSpotify () {
        this.classList.toggle(ativoClass);
        this.nextElementSibling.classList.toggle(ativoClass);
      }
    }

    spotifyList.forEach((item) =>{
      item.addEventListener('click', activeSpotify);
    })
}

spotifyActive();


const backToTopButton = document.querySelector(".back-top-btn");

function activeTopButton () {
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 300) {
    backToTopButton.classList.add('ativo');
  }
  else {
    backToTopButton.classList.remove('ativo');
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.addEventListener('scroll', activeTopButton);
backToTopButton.addEventListener('click', scrollToTop);



