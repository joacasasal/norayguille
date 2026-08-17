(function () {
  var config = window.APP_CONFIG || {};

  function formatIban(value) {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  }

  function formatPhone(value) {
    return value.replace(/^\+34/, '').replace(/\s/g, '').replace(/(.{3})/g, '$1 ').trim();
  }

  var ibanValue = (config.cc || '').replace(/\s/g, '');
  var ibanText = document.querySelector('[data-config="cc"]');
  if (ibanText && ibanValue) {
    ibanText.textContent = 'IBAN: ' + formatIban(ibanValue);
  }

  [
    { selector: '[data-config="phone-nora"]', value: config.phones && config.phones.nora },
    { selector: '[data-config="phone-guille"]', value: config.phones && config.phones.guille }
  ].forEach(function (phone) {
    var link = document.querySelector(phone.selector);
    if (link && phone.value) {
      link.href = 'tel:' + phone.value.replace(/\s/g, '');
      link.textContent = formatPhone(phone.value);
    }
  });

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.menu');
  var progress = document.querySelector('.scroll-progress');

  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 40);
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    var percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = Math.min(100, Math.max(0, percentage)) + '%';
  }

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }

  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (element) {
    observer.observe(element);
  });

  var navLinks = Array.from(menu.querySelectorAll('a[href^="#"]'));
  var sections = navLinks.map(function (link) {
    return document.querySelector(link.getAttribute('href'));
  }).filter(Boolean);

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { rootMargin: '-35% 0px -55%', threshold: 0 });

  sections.forEach(function (section) { sectionObserver.observe(section); });

  var cc = document.querySelector('.cc');
  if (cc && ibanValue) {
    cc.addEventListener('click', function () {
      navigator.clipboard.writeText(ibanValue).then(function () {
        var label = cc.querySelector('em');
        label.textContent = 'Copiado';
        window.setTimeout(function () { label.textContent = 'Copiar'; }, 1800);
      });
    });
  }
})();
