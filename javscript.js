
    (function() {
      const homePage = document.getElementById('home-page');
      const indiraPage = document.getElementById('indira-page');
      const kalpanaPage = document.getElementById('kalpana-page');
      const maryPage = document.getElementById('mary-page');
      const lataPage = document.getElementById('lata-page');
      const savitriPage = document.getElementById('savitri-page');
      const achievementsPage = document.getElementById('achievements-page');
      const galleryPage = document.getElementById('gallery-page');

      const navHome = document.getElementById('nav-home');
      const navIndira = document.getElementById('nav-indira');
      const navKalpana = document.getElementById('nav-kalpana');
      const navMary = document.getElementById('nav-mary');
      const navLata = document.getElementById('nav-lata');
      const navSavitri = document.getElementById('nav-savitri');
      const navAchievements = document.getElementById('nav-achievements');
      const navGallery = document.getElementById('nav-gallery');

      const allPages = [homePage, indiraPage, kalpanaPage, maryPage, lataPage, savitriPage, achievementsPage, galleryPage];
      const allNavs = [navHome, navIndira, navKalpana, navMary, navLata, navSavitri, navAchievements, navGallery];

      function setActivePage(pageId) {
        allPages.forEach(p => p.classList.remove('active-page'));
        allNavs.forEach(n => n.classList.remove('active'));

        switch(pageId) {
          case 'home': homePage.classList.add('active-page'); navHome.classList.add('active'); break;
          case 'indira': indiraPage.classList.add('active-page'); navIndira.classList.add('active'); break;
          case 'kalpana': kalpanaPage.classList.add('active-page'); navKalpana.classList.add('active'); break;
          case 'mary': maryPage.classList.add('active-page'); navMary.classList.add('active'); break;
          case 'lata': lataPage.classList.add('active-page'); navLata.classList.add('active'); break;
          case 'savitri': savitriPage.classList.add('active-page'); navSavitri.classList.add('active'); break;
          case 'achievements': achievementsPage.classList.add('active-page'); navAchievements.classList.add('active'); break;
          case 'gallery': galleryPage.classList.add('active-page'); navGallery.classList.add('active'); break;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      navHome.addEventListener('click', (e) => { e.preventDefault(); setActivePage('home'); });
      navIndira.addEventListener('click', (e) => { e.preventDefault(); setActivePage('indira'); });
      navKalpana.addEventListener('click', (e) => { e.preventDefault(); setActivePage('kalpana'); });
      navMary.addEventListener('click', (e) => { e.preventDefault(); setActivePage('mary'); });
      navLata.addEventListener('click', (e) => { e.preventDefault(); setActivePage('lata'); });
      navSavitri.addEventListener('click', (e) => { e.preventDefault(); setActivePage('savitri'); });
      navAchievements.addEventListener('click', (e) => { e.preventDefault(); setActivePage('achievements'); });
      navGallery.addEventListener('click', (e) => { e.preventDefault(); setActivePage('gallery'); });

      setActivePage('home');
    })();
  