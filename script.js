const PROJECTS = [
  {
    slug: 'showreel',
    title: 'Showreel',
    titleId: 'Showreel',
    category: 'Portfolio Reel',
    categoryId: 'Reel Portofolio',
    year: '2024',
    description:
      'A condensed portfolio reel focusing on pacing, mood, and message-driven edits across different formats and visual treatments.',
    descriptionId:
      'Reel portofolio singkat yang berfokus pada ritme, suasana, dan edit berbasis pesan di berbagai format serta gaya visual.',
    cover: 'https://i.ytimg.com/vi/CDPaxVHcudI/maxresdefault.jpg',
    videoId: 'CDPaxVHcudI',
    featured: true,
    tags: ['Showreel', 'Short Form', 'Long Form', 'Gaming', 'Documentary']
  },
  {
    slug: 'camera-showcase',
    title: 'Camera Showcase',
    titleId: 'Tampilan Kamera',
    category: 'Quick Edit',
    categoryId: 'Edit Cepat',
    year: '2024',
    description:
      'A rhythm-first edit built around narrative clarity, controlled motion, and intentional sound design.',
    descriptionId:
      'Edit berorientasi ritme yang dibangun dengan fokus pada kejelasan narasi, gerakan yang terkontrol, dan desain suara yang terarah.',
    cover: 'https://i.ytimg.com/vi/yNqr0wm0kcA/maxresdefault.jpg',
    videoId: 'yNqr0wm0kcA',
    featured: true,
    tags: ['Color Grading', 'Beat Transition', 'Sound Effect', 'Animated Text']
  },
  {
    slug: 'short-form-05',
    title: 'Short Form 05',
    titleId: 'Short Form 05',
    category: 'Short Form',
    categoryId: 'Short Form',
    year: '2024',
    description:
      'A short-form edit shaped around attention, pacing, and voice-led storytelling.',
    descriptionId:
      'Edit short-form yang dibentuk dengan fokus pada perhatian, ritme, dan storytelling yang dipimpin oleh suara.',
    cover: 'https://i.ytimg.com/vi/VRBRK-fg_7g/maxresdefault.jpg',
    videoId: 'VRBRK-fg_7g',
    featured: true,
    tags: ['Custom Animated Captions', 'Color Correction', 'SFX', 'Audio Adjustment']
  },
  {
    slug: 'short-form-04',
    title: 'Short Form 04',
    titleId: 'Short Form 04',
    category: 'Short Form',
    categoryId: 'Short Form',
    year: '2024',
    description:
      'A cleaner edit designed for attention retention, clarity, and efficient storytelling.',
    descriptionId:
      'Edit yang lebih bersih dan dirancang untuk mempertahankan perhatian, menjaga kejelasan, serta menyampaikan cerita secara efisien.',
    cover: 'https://i.ytimg.com/vi/jU-MddeAP9E/maxresdefault.jpg',
    videoId: 'jU-MddeAP9E',
    featured: false,
    tags: ['Auto Captions', 'Color Correction', 'SFX', 'Audio Adjustment']
  },
  {
    slug: 'short-form-01',
    title: 'Short Form 01',
    titleId: 'Short Form 01',
    category: 'Short Form',
    categoryId: 'Short Form',
    year: '2024',
    description:
      'Overlay-led motion and visual emphasis used to build a smoother, more polished short-form result.',
    descriptionId:
      'Gerakan dan penekanan visual berbasis overlay digunakan untuk menghasilkan hasil short-form yang lebih halus dan rapi.',
    cover: 'https://i.ytimg.com/vi/qJZzdn6u0EA/maxresdefault.jpg',
    videoId: 'qJZzdn6u0EA',
    featured: false,
    tags: ['Overlay', 'Smooth Motion', 'Visual Adjustment', 'Element Animation']
  },
  {
    slug: 'short-form-02',
    title: 'Short Form 02',
    titleId: 'Short Form 02',
    category: 'Short Form',
    categoryId: 'Short Form',
    year: '2024',
    description:
      'A concise motion-led edit balancing rhythm and readability through subtle visual treatment.',
    descriptionId:
      'Edit singkat dengan fokus gerak yang menyeimbangkan ritme dan keterbacaan lewat sentuhan visual yang halus.',
    cover: 'https://i.ytimg.com/vi/YujdBC7HvOk/maxresdefault.jpg',
    videoId: 'YujdBC7HvOk',
    featured: false,
    tags: ['Overlay', 'Smooth Motion', 'Visual Adjustment', 'Element Animation']
  },
  {
    slug: 'short-form-03',
    title: 'Short Form 03',
    titleId: 'Short Form 03',
    category: 'Short Form',
    categoryId: 'Short Form',
    year: '2024',
    description:
      'A more dynamic short-form treatment that leans on motion, polish, and visual rhythm.',
    descriptionId:
      'Penanganan short-form yang lebih dinamis dengan menonjolkan gerak, sentuhan halus, dan ritme visual.',
    cover: 'https://i.ytimg.com/vi/6YyLdL14NW0/maxresdefault.jpg',
    videoId: '6YyLdL14NW0',
    featured: false,
    tags: ['3D Motion', 'Smooth Motion', 'Visual Adjustment', 'Element Animation']
  },
  {
    slug: 'long-form-02',
    title: 'Long Form 02',
    titleId: 'Long Form 02',
    category: 'Long Form',
    categoryId: 'Long Form',
    year: '2024',
    description:
      'Long-form pacing built around continuity, structure, and natural progression across the story arc.',
    descriptionId:
      'Ritme long-form yang dibangun dari kesinambungan, struktur, dan perkembangan alami sepanjang alur cerita.',
    cover: 'https://i.ytimg.com/vi/Pr-EQW_q0w4/maxresdefault.jpg',
    videoId: 'Pr-EQW_q0w4',
    featured: false,
    tags: ['Color Grading', 'Auto Captions', 'Visual Adjustment', 'Audio Adjustment']
  },
  {
    slug: 'long-form-01',
    title: 'Long Form 01',
    titleId: 'Long Form 01',
    category: 'Long Form',
    categoryId: 'Long Form',
    year: '2024',
    description:
      'Detail-rich long-form sequencing for a smoother and more intentional narrative experience.',
    descriptionId:
      'Urutan long-form yang kaya detail untuk pengalaman narasi yang lebih halus dan lebih terarah.',
    cover: 'https://i.ytimg.com/vi/GRRJknlK-Bc/maxresdefault.jpg',
    videoId: 'GRRJknlK-Bc',
    featured: false,
    tags: ['Overlay', 'Smooth Motion', 'Smooth Text Animation', 'Visual Adjustment']
  },
  {
    slug: 'gaming-raw',
    title: 'Gaming — Raw',
    titleId: 'Gaming — Mentah',
    category: 'Gaming / Visual Direction',
    categoryId: 'Gaming / Arah Visual',
    year: '2024',
    description:
      'Original gameplay preserved in its natural form, with no treatment beyond the essential edit.',
    descriptionId:
      'Gameplay asli dipertahankan dalam bentuk naturalnya tanpa sentuhan lebih dari edit esensial yang diperlukan.',
    cover: 'https://i.ytimg.com/vi/1TjfrltN7WY/maxresdefault.jpg',
    videoId: '1TjfrltN7WY',
    featured: false,
    tags: ['Raw Footage', 'Gameplay', 'Natural Timing']
  },
  {
    slug: 'gaming-natural',
    title: 'Gaming — Natural',
    titleId: 'Gaming — Alami',
    category: 'Gaming / Visual Direction',
    categoryId: 'Gaming / Arah Visual',
    year: '2024',
    description:
      'A balanced treatment that retains the original character of the footage while shaping the atmosphere.',
    descriptionId:
      'Penanganan yang seimbang, tetap mempertahankan karakter asli rekaman sambil membentuk suasana yang lebih kuat.',
    cover: 'https://i.ytimg.com/vi/9CntAcsA67U/maxresdefault.jpg',
    videoId: '9CntAcsA67U',
    featured: false,
    tags: ['Natural Treatment', 'Gameplay', 'Color Balance']
  },
  {
    slug: 'gaming-cinematic',
    title: 'Gaming — Cinematic',
    titleId: 'Gaming — Sinematik',
    category: 'Gaming / Visual Direction',
    categoryId: 'Gaming / Arah Visual',
    year: '2024',
    description:
      'A more intentional mood-driven revision using atmosphere, depth, and cinematic color treatment.',
    descriptionId:
      'Versi yang lebih terarah secara suasana dengan penggunaan atmosfer, kedalaman, dan treatment warna sinematik.',
    cover: 'https://i.ytimg.com/vi/PbmCT9Byfck/maxresdefault.jpg',
    videoId: 'PbmCT9Byfck',
    featured: false,
    tags: ['Cinematic', 'Atmosphere', 'Depth', 'Mood']
  }
];

const featuredProjects = PROJECTS.filter((project) => project.featured).slice(0, 3);
const modal = document.getElementById('project-modal');
const detail = document.getElementById('project-detail');
const closeButton = document.querySelector('.close-modal');
const languageButtons = document.querySelectorAll('.language-button');
const languageIntro = document.getElementById('language-intro');
const introButtons = document.querySelectorAll('.language-intro-button');
const translatableElements = document.querySelectorAll('[data-en][data-id]');

let currentLanguage = localStorage.getItem('portfolio-language') || 'en';

function getLocalizedText(textEn, textId) {
  return currentLanguage === 'id' ? textId : textEn;
}

function renderProjectCard(project) {
  const title = getLocalizedText(project.title, project.titleId || project.title);
  const description = getLocalizedText(project.description, project.descriptionId || project.description);
  const category = getLocalizedText(project.category, project.categoryId || project.category);

  return `
    <article class="project-card">
      <button type="button" class="project-trigger" data-slug="${project.slug}" aria-label="View ${title}">
        <div class="project-thumb">
          <img src="${project.cover}" alt="${title}" loading="lazy" />
        </div>
        <div class="project-body">
          <div class="project-row">
            <h3>${title}</h3>
            <span>${project.year}</span>
          </div>
          <p>${description}</p>
          <span class="meta-tag">${category}</span>
        </div>
      </button>
    </article>
  `;
}

function renderProjectDetail(project) {
  const title = getLocalizedText(project.title, project.titleId || project.title);
  const description = getLocalizedText(project.description, project.descriptionId || project.description);
  const category = getLocalizedText(project.category, project.categoryId || project.category);

  return `
    <div class="detail-header">
      <p class="eyebrow detail-kicker">${category}</p>
      <h2>${title}</h2>
    </div>

    <div class="detail-video">
      <iframe
        src="https://www.youtube-nocookie.com/embed/${project.videoId}?rel=0&amp;modestbranding=1&amp;controls=1&amp;playsinline=1"
        title="${title}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>

    <p class="detail-description">${description}</p>

    <ul class="detail-tags">
      ${project.tags.map((tag) => `<li>${tag}</li>`).join('')}
    </ul>
  `;
}

function openProject(slug) {
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) return;

  detail.innerHTML = renderProjectDetail(project);
  modal.hidden = false;
  document.body.classList.add('modal-open');
}

function closeProject() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
}

function populateGrids() {
  const featuredGrid = document.getElementById('featured-projects');
  const allGrid = document.getElementById('all-projects');

  if (featuredGrid) {
    featuredGrid.innerHTML = featuredProjects.map(renderProjectCard).join('');
  }

  if (allGrid) {
    allGrid.innerHTML = PROJECTS.map(renderProjectCard).join('');
  }
}

function setLanguage(lang) {
  currentLanguage = lang;

  translatableElements.forEach((element) => {
    const nextText = lang === 'id' ? element.dataset.id : element.dataset.en;
    element.textContent = nextText;
  });

  languageButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  localStorage.setItem('portfolio-language', lang);
  populateGrids();
}

function closeLanguageIntro() {
  if (!languageIntro) return;

  languageIntro.classList.add('is-closing');
  window.setTimeout(() => {
    languageIntro.classList.remove('is-visible', 'is-closing');
    languageIntro.setAttribute('aria-hidden', 'true');
  }, 700);
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

introButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.introLang);
    closeLanguageIntro();
  });
});

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('.project-trigger');

  if (trigger) {
    openProject(trigger.dataset.slug);
    return;
  }

  if (event.target === modal) {
    closeProject();
  }
});

if (closeButton) {
  closeButton.addEventListener('click', closeProject);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) {
    closeProject();
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
setLanguage(currentLanguage);
populateGrids();
