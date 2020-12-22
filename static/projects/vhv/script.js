(() => {
  /**
   * @FilmButton
   */
  const filmBtn = document.querySelector('#filmBtn');
  const filmModal = document.querySelector('.video');
  console.log(filmBtn);
  filmBtn.addEventListener('click', handleVideoClick);

  function handleVideoClick() {
    console.log('handleVideoClick');
    filmModal.classList.remove('hidden');
  }

  /**
   * @FigureModals
   */
  const figureLinks = document.querySelectorAll('.slide');
  const infoCard = document.querySelectorAll('.info-card');
  const closeX = document.querySelectorAll('.close');
  const back = document.querySelectorAll('.backBtn');
  const modal = document.querySelectorAll('.modal');

  figureLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => handleFigureClick(e, index));
  });

  function handleFigureClick(e, index) {
    infoCard[index].classList.remove('hidden');
  }

  closeX.forEach((close) => {
    close.addEventListener('click', handleClose);
  });
  back.forEach((b) => {
    b.addEventListener('click', handleClose);
  });
  modal.forEach((m) => {
    m.addEventListener('click', handleClose);
  });

  function handleClose(e) {
    const closeClasses = ['close', 'modal', 'backBtn', 'back'];
    const targetClasses = [...e.target.classList];
    const canClose = closeClasses.some((c) => targetClasses.includes(c));
    modal.forEach((m) => {
      canClose && m.classList.add('hidden');
    });
  }

  /**
   * @Download
   */
  const downloadBtn = document.querySelector('#download');
  const feedback = document.querySelector('.feedback');

  downloadBtn.addEventListener('click', () =>
    feedback.classList.toggle('hidden'),
  );

  /**
   * @FragenUndAntworten
   */
  const faqs = document.querySelectorAll('.q-and-a');
  const faqClicker = document.querySelectorAll('.plus');
  const hClicker = document.querySelectorAll('.h');
  const answers = document.querySelectorAll('.answer');

  faqs.forEach((click, index) => {
    click.addEventListener('click', (e) => handleFaqClick(e, index));
  });

  function handleFaqClick(e, index) {
    hClicker[index].classList.toggle('hidden');
    answers[index].classList.toggle('show-answer');
  }

  /**
   * @Feedback
   */
  const form = document.querySelector('form');
  const email = document.querySelector('#email');
  const text = document.querySelector('#verbesserungen');
  const consent = document.querySelector('#datenschutz');
  const submit = document.querySelector('#submit');

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const data = {
      email: email.value,
      text: text.value,
      consent: consent.value,
    };
  });

  /**
   * @Slider
   */
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  const sliderWidth = slider.offsetWidth;
  const slideWidth = slides[0].offsetWidth;

  let lastScrollPos = 0;

  sliderWrapper.addEventListener('scroll', (e) => {
    lastScrollPos = sliderWrapper.scrollLeft;

    handleScroll();
  });

  function handleScroll() {
    if (lastScrollPos < 200) {
      dots.forEach((el) => {
        el.classList.remove('active');
      });
      dots[0].classList.add('active');
    } else if (lastScrollPos > 300 && lastScrollPos < slideWidth) {
      dots.forEach((el) => {
        el.classList.remove('active');
      });
      dots[1].classList.add('active');
    } else if (lastScrollPos > 600) {
      dots.forEach((el) => {
        el.classList.remove('active');
      });
      dots[2].classList.add('active');
    }
  }
})();
