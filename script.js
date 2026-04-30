/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO SCRIPT — All Interactivity & Data
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════════════════════════
   ██████╗  █████╗ ████████╗ █████╗
   ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗
   ██║  ██║███████║   ██║   ███████║
   ██║  ██║██╔══██║   ██║   ██╔══██║
   ██████╔╝██║  ██║   ██║   ██║  ██║
   ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝

   ↓ EDIT THIS OBJECT TO PERSONALIZE YOUR PORTFOLIO ↓
══════════════════════════════════════════════════════════════ */

const PORTFOLIO_DATA = {
  // ── Personal Info ─────────────────────────────────────────
  name:        "Abdo Al-Adawy",
  nameEn:      "Abdo Al-Adawy",
  title:       "Full Stack Developer",
  location:    "Giza, Egypt",
  email:       "abdoaladawy2000@gmail.com",
  availability: "Available for Freelance & Remote — Part-time",
  cvUrl:       "CV/Abdo_Al-Adawy_CV.pdf",

  // ── Social Links ──────────────────────────────────────────
  github:   "https://github.com/Abdo2000-1",
  linkedin: "https://www.linkedin.com/in/abdo-al-adawy-a2238133b",

  // ── Hero ──────────────────────────────────────────────────
  heroDesc: "CS student at Cairo University — building clean, scalable web apps from pixel-perfect UIs to robust backends with Django & React.",

  // ── Stats removed — not used ───────────────────────────────
  stats: {
    projects:  6,
    experience: 2,
    clients:   1,
  },

  // ── About ─────────────────────────────────────────────────
  aboutLead: "Second-year CS student at Cairo University's Faculty of Computers & AI — shipping real products while still in college.",
  aboutBody: "I'm a Full Stack Developer who thrives across the entire stack: crafting responsive UIs with React & Tailwind, building solid backends with Python/Django, and diving deep into systems programming with C++ and JUCE. I've led teams, delivered commercial client projects, and have a genuine passion for clean architecture, good UX, and solving hard problems.",

  // ── Skills ────────────────────────────────────────────────
  skills: {
    frontend: [
      { name: "HTML5 & CSS3",    icon: "🌐" },
      { name: "JavaScript ES6+", icon: "⚡" },
      { name: "React.js",        icon: "⚛️" },
      { name: "Tailwind CSS",    icon: "🎨" },
    ],
    backend: [
      { name: "Python & Django", icon: "🐍" },
      { name: "C++",             icon: "⚙️" },
      { name: "C# .NET",         icon: "🔷" },
      { name: "SQL",             icon: "🗄️" },
      { name: "Firebase",        icon: "🔥" },
      { name: "JUCE (C++)",      icon: "🎸" },
    ],
    tools: [
      { name: "Git & GitHub",    icon: "🐙" },
      { name: "GitLab",          icon: "🦊" },
      { name: "Figma",           icon: "🎯" },
      { name: "VS Code",         icon: "💻" },
      { name: "Netlify / Vercel",icon: "🚀" },
      { name: "Stitch",          icon: "🔗" },
    ],
    soft: [
      { name: "Team Leadership",     icon: "👥" },
      { name: "Problem Solving",     icon: "🧩" },
      { name: "Data Structures & Algorithms", icon: "📊" },
      { name: "Software Engineering", icon: "🏗️" },
      { name: "OOP & SOLID",         icon: "🧱" },
      { name: "UX/UI Principles",    icon: "✏️" },
      { name: "Technical Writing",   icon: "📝" },
      { name: "Creative Thinking",   icon: "💡" },
    ],
  },

  // ── Tech Ticker ───────────────────────────────────────────
  ticker: [
    { icon: "⚛️", name: "React" },
    { icon: "🐍", name: "Python" },
    { icon: "⚙️", name: "C++" },
    { icon: "⚡", name: "JavaScript" },
    { icon: "🎨", name: "Tailwind CSS" },
    { icon: "🔥", name: "Firebase" },
    { icon: "🎸", name: "JUCE" },
    { icon: "🌐", name: "HTML5 & CSS3" },
    { icon: "🐙", name: "Git" },
    { icon: "🔷", name: "C# .NET" },
    { icon: "🗄️", name: "SQL" },
    { icon: "🎯", name: "Figma" },
  ],

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      id: 1,
      title: "LinkedOn",
      desc: "A responsive professional networking web interface with adaptive layouts and cross-browser compatibility. Led a 6-member team to deliver all project phases on schedule.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      category: "web",
      icon: "🔗",
      github: "https://github.com/Abdo2000-1/Web-Technology-Assignment.git",
      live: null,
    },
    {
      id: 2,
      title: "Asia Store",
      desc: "Fully responsive e-commerce storefront with optimized navigation and modern UI components. Automated deployment via GitHub and Netlify.",
      tags: ["React.js", "Firebase", "CSS3"],
      category: "web",
      icon: "🛍️",
      github: "https://github.com/Abdo2000-1/Asia-Store.git",
      live: "https://asia-store.netlify.app/",
    },
    {
      id: 3,
      title: "Gedo Shopping",
      desc: "Full-stack e-commerce platform for a commercial client featuring a Firebase-powered dashboard and WhatsApp-integrated billing system.",
      tags: ["HTML5", "CSS3", "JavaScript", "Firebase"],
      category: "web",
      icon: "🛒",
      github: "https://github.com/Abdo2000-1/Gedo-Shoping.git",
      live: "https://abdo2000-1.github.io/Gedo-Shoping/",
    },
    {
      id: 4,
      title: "Ultimate Tic-Tac-Toe Engine",
      desc: "C++ gaming engine supporting 14 game variants, built with OOP principles (Polymorphism/Abstraction) and a unified Game Manager to decouple core logic.",
      tags: ["C++", "OOP", "Game Engine"],
      category: "cpp",
      icon: "♟️",
      github: "https://github.com/Abdo2000-1/Tic-Tac-Toe-Game-Space-.git",
      live: null,
    },
    {
      id: 5,
      title: "Dual-Deck DJ Audio Player",
      desc: "Cross-platform desktop player with dual-deck mixing, real-time crossfading, and automated metadata extraction using advanced OOP and the JUCE framework.",
      tags: ["C++", "JUCE", "OOP"],
      category: "cpp",
      icon: "🎛️",
      github: "https://github.com/Abdo2000-1/Dual-Deck-DJ-Audio-Player-.git",
      live: null,
    },
    {
      id: 6,
      title: "Baby Photoshop",
      desc: "C++ image processor with 15+ advanced filters including Edge Detection and Oil Painting, featuring complex image manipulation logic and an Undo functionality.",
      tags: ["C++", "Image Processing", "OOP"],
      category: "cpp",
      icon: "🖼️",
      github: "https://github.com/Abdo2000-1/Baby-Photoshop-Console-App",
      live: null,
    },
  ],
};

/* ══════════════════════════════════════════════════════════════
   POPULATE DATA INTO DOM
══════════════════════════════════════════════════════════════ */
function populateData() {
  const d = PORTFOLIO_DATA;

  // Nav name
  const navName = document.getElementById('navName');
  if (navName) navName.textContent = d.nameEn.split(' ')[0] || d.nameEn;

  // Hero
  const heroName = document.getElementById('heroName');
  if (heroName) heroName.textContent = d.nameEn;

  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) heroTitle.textContent = d.title;

  const heroDesc = document.getElementById('heroDesc');
  if (heroDesc) heroDesc.textContent = d.heroDesc;

  // Stats
  const statProjects = document.getElementById('statProjects');
  const statExp      = document.getElementById('statExp');
  const statClients  = document.getElementById('statClients');
  if (statProjects) animateCounter(statProjects, 0, d.stats.projects, 1500);
  if (statExp)      animateCounter(statExp, 0, d.stats.experience, 1500);
  if (statClients)  animateCounter(statClients, 0, d.stats.clients, 1500);

  // About
  const aboutLead  = document.getElementById('aboutLead');
  const aboutBody  = document.getElementById('aboutBody');
  const codeName   = document.getElementById('codeName');
  if (aboutLead) aboutLead.textContent = d.aboutLead;
  if (aboutBody) aboutBody.textContent = d.aboutBody;
  if (codeName)  codeName.textContent  = d.nameEn;

  // Info items
  const infoLocation = document.getElementById('infoLocation');
  const infoEmail    = document.getElementById('infoEmail');
  const infoAvail    = document.getElementById('infoAvail');
  if (infoLocation) infoLocation.textContent = d.location;
  if (infoEmail)    infoEmail.textContent    = d.email;
  if (infoAvail)    infoAvail.textContent    = d.availability;

  // CV Button
  const cvBtn = document.getElementById('cvBtn');
  if (cvBtn) cvBtn.href = d.cvUrl;

  // Skills
  renderSkills('frontendSkills', d.skills.frontend);
  renderSkills('backendSkills',  d.skills.backend);
  renderSkills('toolsSkills',    d.skills.tools);
  renderSkills('softSkills',     d.skills.soft);

  // Ticker
  renderTicker(d.ticker);

  // Projects
  renderProjects(d.projects);

  // Contact
  const contactEmail   = document.getElementById('contactEmail');
  const contactGithub  = document.getElementById('contactGithub');
  const contactLinkedin = document.getElementById('contactLinkedin');

  if (contactEmail) {
    contactEmail.href = `mailto:${d.email}`;
    contactEmail.querySelector('.link-val').textContent = d.email;
  }
  if (contactGithub) {
    contactGithub.href = d.github;
    contactGithub.querySelector('.link-val').textContent = d.github.replace('https://', '');
  }
  if (contactLinkedin) {
    contactLinkedin.href = d.linkedin;
    contactLinkedin.querySelector('.link-val').textContent = d.linkedin.replace('https://', '');
  }

  // Footer
  const footerName = document.getElementById('footerName');
  if (footerName) footerName.textContent = d.nameEn.split(' ')[0] || d.nameEn;

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

/* ══════════════════════════════════════════════════════════════
   RENDER SKILLS
══════════════════════════════════════════════════════════════ */
function renderSkills(containerId, skills) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = skills.map(skill => `
    <div class="skill-card">
      <div class="skill-top">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-icon">${skill.icon}</span>
      </div>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════════════════════
   RENDER TICKER
══════════════════════════════════════════════════════════════ */
function renderTicker(items) {
  const track = document.getElementById('tickerTrack');
  if (!track) return;

  // Duplicate items for seamless loop
  const doubled = [...items, ...items];
  track.innerHTML = doubled.map(item => `
    <div class="ticker-item">
      <span>${item.icon}</span> ${item.name}
    </div>
    <div class="ticker-item" style="opacity:0.3">✦</div>
  `).join('');
}

/* ══════════════════════════════════════════════════════════════
   RENDER PROJECTS
══════════════════════════════════════════════════════════════ */
function renderProjects(projects, filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((p, i) => `
    <div class="project-card reveal" style="animation-delay:${i * 0.1}s"
         data-category="${p.category}">
      <div class="project-thumb">
        <div class="project-thumb-icon">${p.icon}</div>
        <div class="project-links">
          <a href="${p.github}" class="project-link-btn" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          ${p.live ? `<a href="${p.live}" class="project-link-btn" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
            Live
          </a>` : `<span class="project-link-btn disabled" title="Under development">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            In Dev
          </span>`}
        </div>
      </div>
      <div class="project-body">
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
      </div>
    </div>
  `).join('');

  // Re-observe newly added elements
  observeReveal();
}

/* ══════════════════════════════════════════════════════════════
   LOADER
══════════════════════════════════════════════════════════════ */
function initLoader() {
  const loader     = document.getElementById('loader');
  const loaderBar  = loader?.querySelector('.loader-bar');
  const loaderText = document.getElementById('loaderText');
  if (!loader) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 18 + 4;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        triggerHeroAnimations();
      }, 400);
    }
    if (loaderBar)  loaderBar.style.setProperty('--progress', progress + '%');
    if (loaderText) loaderText.textContent = Math.floor(progress) + '%';
  }, 60);

  document.body.style.overflow = 'hidden';
}

/* ══════════════════════════════════════════════════════════════
   HERO ANIMATIONS
══════════════════════════════════════════════════════════════ */
function triggerHeroAnimations() {
  const reveals = document.querySelectorAll('.hero .reveal');
  reveals.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 150);
  });
}

/* ══════════════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════════════ */
let revealObserver;

function observeReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);

        // Animate skill bars when visible
        const bars = entry.target.querySelectorAll ? entry.target.querySelectorAll('.skill-bar-fill') : [];
        bars.forEach(bar => {
          setTimeout(() => {
            bar.style.width = bar.dataset.level + '%';
          }, 300);
        });
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

// Also observe skill bar fills when a skills panel becomes visible
function observeSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        setTimeout(() => {
          bar.style.width = bar.dataset.level + '%';
        }, 200);
        barObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.1 });

  bars.forEach(bar => barObserver.observe(bar));
}

/* ══════════════════════════════════════════════════════════════
   THEME TOGGLE
══════════════════════════════════════════════════════════════ */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const html   = document.documentElement;
  const stored = localStorage.getItem('portfolio-theme') || 'dark';

  html.setAttribute('data-theme', stored);

  toggle?.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  });
}

/* ══════════════════════════════════════════════════════════════
   NAV — Active link & Scroll effects
══════════════════════════════════════════════════════════════ */
function initNav() {
  const nav     = document.getElementById('nav');
  const links   = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll: nav shadow + active link
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 20);

    // Active section detection
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) current = section.id;
    });

    links.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }, { passive: true });

  // Smooth scroll on nav links
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════════════════════════════ */
function initMobileMenu() {
  const toggle  = document.getElementById('menuToggle');
  const menu    = document.getElementById('mobileMenu');
  const links   = document.querySelectorAll('.mobile-link');
  const bars    = toggle?.querySelectorAll('span');

  toggle?.addEventListener('click', () => {
    const isOpen = menu?.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';

    if (bars) {
      if (isOpen) {
        bars[0].style.transform = 'translateY(7px) rotate(45deg)';
        bars[1].style.opacity   = '0';
        bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity   = '';
        bars[2].style.transform = '';
      }
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu?.classList.remove('open');
      document.body.style.overflow = '';
      if (bars) {
        bars[0].style.transform = '';
        bars[1].style.opacity   = '';
        bars[2].style.transform = '';
      }
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════════════════════════ */
function initCursor() {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;

  // Only on desktop
  if (window.matchMedia('(max-width: 768px)').matches) {
    cursor.style.display   = 'none';
    follower.style.display = 'none';
    return;
  }

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  // Smooth follower
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover effects
  const hoverables = document.querySelectorAll('a, button, .project-card, .skill-card');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width    = '16px';
      cursor.style.height   = '16px';
      follower.style.width  = '56px';
      follower.style.height = '56px';
      follower.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width    = '10px';
      cursor.style.height   = '10px';
      follower.style.width  = '36px';
      follower.style.height = '36px';
      follower.style.opacity = '0.5';
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   SKILLS TABS
══════════════════════════════════════════════════════════════ */
function initSkillsTabs() {
  const tabs   = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.skills-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = document.getElementById(`tab-${target}`);
      panel?.classList.add('active');

      // Animate bars in newly shown panel
      setTimeout(() => {
        panel?.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.level + '%';
        });
      }, 100);
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   PROJECTS FILTER
══════════════════════════════════════════════════════════════ */
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      renderProjects(PORTFOLIO_DATA.projects, filter);
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════════════════════════ */
function initContactForm() {
  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const btnText    = submitBtn?.querySelector('.btn-text');
  const btnLoading = submitBtn?.querySelector('.btn-loading');
  const successMsg = document.getElementById('formSuccess');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Show loading
    btnText?.classList.add('hidden');
    btnLoading?.classList.remove('hidden');
    if (submitBtn) submitBtn.disabled = true;

    const formData = {
      name:    form.querySelector('[name="name"]')?.value,
      email:   form.querySelector('[name="email"]')?.value,
      subject: form.querySelector('[name="subject"]')?.value,
      message: form.querySelector('[name="message"]')?.value,
    };

    try {
      // ─── DJANGO BACKEND INTEGRATION ────────────────────────
      // Uncomment and update the URL when Django backend is ready:
      //
      // const response = await fetch('/api/contact/', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'X-CSRFToken': getCookie('csrftoken'),
      //   },
      //   body: JSON.stringify(formData),
      // });
      //
      // if (!response.ok) throw new Error('Server error');
      // const data = await response.json();
      // ───────────────────────────────────────────────────────

      // Simulate API call (remove when Django is connected)
      await new Promise(r => setTimeout(r, 1500));

      // Success
      form.reset();
      successMsg?.classList.remove('hidden');
      setTimeout(() => successMsg?.classList.add('hidden'), 5000);

    } catch (err) {
      alert('حدث خطأ أثناء الإرسال. حاول مرة أخرى.');
      console.error('Form error:', err);
    } finally {
      btnText?.classList.remove('hidden');
      btnLoading?.classList.add('hidden');
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

/* ══════════════════════════════════════════════════════════════
   COUNTER ANIMATION
══════════════════════════════════════════════════════════════ */
function animateCounter(el, from, to, duration) {
  const start = performance.now();
  const update = (timestamp) => {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    el.textContent = Math.floor(from + (to - from) * eased) + '+';
    if (progress < 1) requestAnimationFrame(update);
  };

  // Only start when in viewport
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      requestAnimationFrame(update);
      observer.disconnect();
    }
  }, { threshold: 0.5 });
  observer.observe(el);
}

/* ══════════════════════════════════════════════════════════════
   DJANGO CSRF HELPER (للاستخدام مع الباكند)
══════════════════════════════════════════════════════════════ */
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(name + '=')) {
        cookieValue = decodeURIComponent(cookie.slice(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

/* ══════════════════════════════════════════════════════════════
   PROFILE IMAGE FALLBACK
══════════════════════════════════════════════════════════════ */
function initProfileImg() {
  const img = document.getElementById('profileImg');
  if (!img) return;

  img.addEventListener('error', () => {
    // Create a stylish placeholder if image not found
    const placeholder = document.createElement('div');
    placeholder.style.cssText = `
      position: absolute; inset: 2px;
      background: linear-gradient(135deg, var(--surface), var(--bg-3));
      border-radius: 26px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      z-index: 1;
    `;
    placeholder.innerHTML = `
      <div style="font-size:4rem;opacity:0.5">👨‍💻</div>
      <div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-muted);text-align:center;">
        image/profile.jpg
      </div>
    `;
    img.parentNode.appendChild(placeholder);
    img.style.display = 'none';
  });
}

/* ══════════════════════════════════════════════════════════════
   SMOOTH SCROLL FOR ALL ANCHOR LINKS
══════════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   PARALLAX ORBS
══════════════════════════════════════════════════════════════ */
function initParallax() {
  const orbs = document.querySelectorAll('.orb');
  if (!orbs.length) return;

  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    orbs.forEach((orb, i) => {
      const strength = (i + 1) * 12;
      orb.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
  }, { passive: true });
}

/* ══════════════════════════════════════════════════════════════
   MAIN INIT
══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Order matters
  initTheme();
  populateData();
  initLoader();
  initNav();
  initMobileMenu();
  initCursor();
  initSkillsTabs();
  initProjectsFilter();
  initContactForm();
  initSmoothScroll();
  initParallax();
  initProfileImg();

  // Start reveal observer after DOM is ready
  setTimeout(observeReveal, 100);

  // Animate first visible skill bars (frontend tab active by default)
  setTimeout(observeSkillBars, 800);

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* ══════════════════════════════════════════════════════════════
   WINDOW RESIZE — Re-init cursor check
══════════════════════════════════════════════════════════════ */
window.addEventListener('resize', () => {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  cursor.style.display   = isMobile ? 'none' : '';
  follower.style.display = isMobile ? 'none' : '';
});
