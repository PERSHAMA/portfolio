document.addEventListener('DOMContentLoaded', () => {

  // --- Intro Splash Screen Logic & Hero Sync ---
  const introScreen = document.getElementById('intro-screen');
  
  // 1. إضافة كلاس في البداية عشان نوقف أنيميشن الـ Hero
  document.body.classList.add('intro-active');

  // 2. التحكم في وقت إخفاء الإنترو (بعد ثانيتين هنا)
  setTimeout(() => {
    if (introScreen) {
      introScreen.classList.add('fade-out');
    }
    // 3. إزالة الكلاس عشان يبدأ أنيميشن الـ Hero يشتغل بسلاسة قدام الزائر
    document.body.classList.remove('intro-active');
  }, 2000); // 2000 تعني ثانيتين

  // --- Scroll Progress Bar ---
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  if (scrollProgressBar) {
    window.addEventListener('scroll', () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      scrollProgressBar.style.width = progress + '%';
    });
  }

  // --- Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- 3D Mouse Parallax Tilt Effect on Hero Card ---
  const tiltContainer = document.getElementById('tiltContainer');
  if (tiltContainer) {
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const rotateX = ((clientY / windowHeight) - 0.5) * -20; 
      const rotateY = ((clientX / windowWidth) - 0.5) * 20;

      tiltContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }

  // --- Control Panel Drawer Logic ---
  const controlDrawer = document.getElementById('controlDrawer');
  const openPanelBtn = document.getElementById('openPanelBtn');
  const closePanelBtn = document.getElementById('closePanelBtn');

  const uploadBtn = document.getElementById('uploadBtn');
  const imageInput = document.getElementById('imageInput');
  const profileImg = document.getElementById('profileImg');

  // Input Elements
  const inputLogo = document.getElementById('inputLogo');
  const inputRole = document.getElementById('inputRole');
  const inputName = document.getElementById('inputName');
  const inputTitle = document.getElementById('inputTitle');
  const inputBio = document.getElementById('inputBio');
  const inputSatisfaction = document.getElementById('inputSatisfaction');

  // Display Elements
  const displayLogo = document.getElementById('displayLogo');
  const displayRole = document.getElementById('displayRole');
  const displayName = document.getElementById('displayName');
  const displayTitle = document.getElementById('displayTitle');
  const displayBio = document.getElementById('displayBio');
  const displaySatisfaction = document.getElementById('displaySatisfaction');

  if (openPanelBtn && controlDrawer) {
    openPanelBtn.addEventListener('click', () => controlDrawer.classList.add('open'));
  }
  if (closePanelBtn && controlDrawer) {
    closePanelBtn.addEventListener('click', () => controlDrawer.classList.remove('open'));
  }

  // Upload Custom Photo
  if (uploadBtn && imageInput) {
    uploadBtn.addEventListener('click', () => imageInput.click());
    imageInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => { if (profileImg) profileImg.src = event.target.result; };
        reader.readAsDataURL(file);
      }
    });
  }

  // Dynamic Live Binding
  if (inputLogo && displayLogo) inputLogo.addEventListener('input', (e) => displayLogo.textContent = e.target.value || 'PERSHAMA');
  if (inputRole && displayRole) inputRole.addEventListener('input', (e) => displayRole.textContent = e.target.value || '');
  if (inputName && displayName) inputName.addEventListener('input', (e) => displayName.textContent = e.target.value || '');
  if (inputTitle && displayTitle) inputTitle.addEventListener('input', (e) => displayTitle.textContent = e.target.value || '');
  if (inputBio && displayBio) inputBio.addEventListener('input', (e) => displayBio.textContent = e.target.value || '');
  if (inputSatisfaction && displaySatisfaction) inputSatisfaction.addEventListener('input', (e) => displaySatisfaction.textContent = e.target.value || '100%');

});