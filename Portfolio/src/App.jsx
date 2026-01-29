import { useEffect, useState } from "react";
import "./App.css";

const TEXT = {
  en: {
    nav: {
      about: "About",
      stack: "Tech Stack",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    ctaHire: "Hire Me",
    heroBadge: "Fullstack Developer · 15 y.o.",
    heroTitleLine1: "Hello!",
    heroTitleLine2: "I'm",
    heroSubtitle:
      "Young fullstack developer from Bishkek, Kyrgyzstan. I design and build clean, fast and modern web applications — from idea to production.",
    heroViewProjects: "View Projects",
    heroCollaborate: "Let's Collaborate",
    metaLocationLabel: "Location",
    metaLocationValue: "Bishkek, Kyrgyzstan",
    metaStatusLabel: "Status",
    metaStatusValue: "Available for Hire",
    metaFocusLabel: "Focus",
    metaFocusValue: "Fullstack · UI/UX · Performance",
    currentFocus: "Current Focus",
    focusList: [
      "Advanced React applications",
      "Complex state management",
      "Mobile‑first responsive design",
      "Performance optimisation",
    ],
    quickStats: "Quick Stats",
    statYearsOld: "Years old",
    statProjects: "Projects",
    statYearsCoding: "Years coding",
    aboutTitle: "About Me",
    aboutSubtitle:
      "Passionate 15‑year‑old fullstack developer, learning fast and building real products for real people.",
    aboutP1:
      "I am a student developer from Bishkek, Kyrgyzstan, focused on creating clean, functional and visually striking web experiences. I combine a strong sense of design with solid engineering practices to build scalable and maintainable applications.",
    aboutP2:
      "My goal is to join a leading tech company as a fullstack developer, work with talented teams, and ship products that solve real‑world problems. Until then, I keep improving through freelancing, courses, and personal projects.",
    goalsLabel: "Goals",
    goalsList: [
      "Become a top‑tier developer",
      "Build scalable applications",
      "Create innovative solutions",
      "Continuously learn and grow",
    ],
    languagesLabel: "Languages",
    funFactsLabel: "Fun Facts",
    funFactsList: [
      "Gaming enthusiast",
      "Design lover",
      "Tech explorer",
      "Problem solver",
    ],
    techTitle: "Tech Stack",
    techSubtitle: "From pixel‑perfect interfaces to robust backends.",
    techFrontend: "Frontend",
    techBackend: "Backend",
    techTools: "Tools",
    techSpecial: "Specialisations",
    projectsTitle: "Featured Projects",
    projectsSubtitle:
      "A selection of my favourite work. Design is black & white, but the experiences are far from it.",
    experienceTitle: "Experience & Achievements",
    timeline: {
      year1Title: "Student Developer — OkurMen",
      year1Text:
        "Intensive programming education focused on real projects and modern development practices.",
      ongoingTitle: "Freelance Developer",
      ongoingText:
        "Building custom websites and applications for clients with a focus on performance and usability.",
      alwaysTitle: "Self‑Learning",
      alwaysText:
        "Constantly improving through online resources, courses, and challenging personal projects.",
    },
    achievements: {
      young: {
        label: "Young Developer",
        text: "15‑year‑old fullstack developer in the community.",
      },
      freelance: {
        label: "Freelance Success",
        text: "Completed multiple client projects with positive feedback.",
      },
      design: {
        label: "Design Excellence",
        text: "Creating beautiful, functional user interfaces.",
      },
      learning: {
        label: "Rapid Learning",
        text: "Quick adaptation to new tools and technologies.",
      },
    },
    contactTitle: "Let's Connect",
    contactSubtitle:
      "Open to internships, freelance projects, and collaborations.",
    contactDetails: "Contact Details",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactGitHub: "GitHub",
    contactAddress: "Address",
    formTitle: "Send a Message",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Project details",
    formNote:
      "This is a demo form — you can reach me directly via email or phone.",
    langToggleLabel: "Language",
    alertDemo:
      "Thank you! This is a demo form, please contact me via email or WhatsApp.",
  },
  ru: {
    nav: {
      about: "Обо мне",
      stack: "Технологии",
      projects: "Проекты",
      experience: "Опыт",
      contact: "Контакты",
    },
    ctaHire: "Нанять меня",
    heroBadge: "Fullstack‑разработчик · 15 лет",
    heroTitleLine1: "Hello!",
    heroTitleLine2: "Я",
    heroSubtitle:
      "Молодой fullstack‑разработчик из Бишкека. Создаю чистые, быстрые и современные веб‑приложения — от идеи до продакшена.",
    heroViewProjects: "Посмотреть проекты",
    heroCollaborate: "Сотрудничать",
    metaLocationLabel: "Локация",
    metaLocationValue: "Бишкек, Кыргызстан",
    metaStatusLabel: "Статус",
    metaStatusValue: "Открыт для предложений",
    metaFocusLabel: "Фокус",
    metaFocusValue: "Fullstack · UI/UX · Производительность",
    currentFocus: "Текущий фокус",
    focusList: [
      "Продвинутые React‑приложения",
      "Сложное управление состоянием",
      "Мобильный (mobile‑first) дизайн",
      "Оптимизация производительности",
    ],
    quickStats: "Статистика",
    statYearsOld: "Лет",
    statProjects: "Проектов",
    statYearsCoding: "Лет опыта",
    aboutTitle: "Обо мне",
    aboutSubtitle:
      "Увлечённый 15‑летний fullstack‑разработчик, который быстро учится и делает реальные проекты.",
    aboutP1:
      "Я начинающий разработчик из Бишкека, Кыргызстан. Люблю создавать аккуратные, понятные и визуально сильные веб‑интерфейсы. Совмещаю чувство дизайна с инженерным подходом, чтобы делать масштабируемые приложения.",
    aboutP2:
      "Моя цель — работать fullstack‑разработчиком в крупной IT‑компании, создавать продукты, которые решают реальные задачи. Пока я к этому иду — через фриланс, курсы и собственные проекты.",
    goalsLabel: "Цели",
    goalsList: [
      "Стать топовым разработчиком",
      "Создавать масштабируемые приложения",
      "Придумывать и реализовывать новые решения",
      "Непрерывно учиться и расти",
    ],
    languagesLabel: "Языки",
    funFactsLabel: "Факты",
    funFactsList: [
      "Люблю видеоигры и геймдизайн",
      "Нравится красивый UI‑дизайн",
      "Постоянно изучаю новые технологии",
      "Люблю решать сложные задачи",
    ],
    techTitle: "Технологии",
    techSubtitle: "От пиксель‑перфект интерфейсов до надёжного backend.",
    techFrontend: "Фронтенд",
    techBackend: "Бэкенд",
    techTools: "Инструменты",
    techSpecial: "Специализация",
    projectsTitle: "Избранные проекты",
    projectsSubtitle:
      "Подборка моих любимых работ. Дизайн чёрно‑белый, но опыт — яркий.",
    experienceTitle: "Опыт и достижения",
    timeline: {
      year1Title: "Студент‑разработчик — OkurMen",
      year1Text:
        "Интенсивное обучение программированию с упором на реальные проекты и современные практики.",
      ongoingTitle: "Фриланс‑разработчик",
      ongoingText:
        "Создаю сайты и веб‑приложения для клиентов с акцентом на удобство и скорость.",
      alwaysTitle: "Самообразование",
      alwaysText:
        "Постоянно прокачиваюсь через онлайн‑курсы, документацию и личные проекты.",
    },
    achievements: {
      young: {
        label: "Молодой разработчик",
        text: "15‑летний fullstack‑разработчик в сообществе.",
      },
      freelance: {
        label: "Успехи во фрилансе",
        text: "Завершил несколько коммерческих проектов с хорошими отзывами.",
      },
      design: {
        label: "Сильный дизайн",
        text: "Создаю красивые и удобные интерфейсы.",
      },
      learning: {
        label: "Быстрое обучение",
        text: "Быстро осваиваю новые технологии и инструменты.",
      },
    },
    contactTitle: "Связаться со мной",
    contactSubtitle:
      "Открыт к стажировкам, фрилансу и интересным коллаборациям.",
    contactDetails: "Контакты",
    contactEmail: "Почта",
    contactPhone: "Телефон",
    contactGitHub: "GitHub",
    contactAddress: "Адрес",
    formTitle: "Написать сообщение",
    formName: "Имя",
    formEmail: "Email",
    formMessage: "Расскажите о проекте",
    formNote:
      "Это демо‑форма — лучше пишите сразу на почту или в мессенджер.",
    langToggleLabel: "Язык",
    alertDemo:
      "Спасибо! Это демо‑форма, лучше свяжитесь со мной через email или WhatsApp.",
  },
  ky: {
    nav: {
      about: "Жөнүндө",
      stack: "Технологиялар",
      projects: "Проекттер",
      experience: "Тажрыйба",
      contact: "Байланыш",
    },
    ctaHire: "Ишке чакыруу",
    heroBadge: "Fullstack‑долбоорчу · 15 жаш",
    heroTitleLine1: "Hello!",
    heroTitleLine2: "Мен",
    heroSubtitle:
      "Бишкектен чыккан жаш fullstack‑долбоорчу. Идеядан тартып продакшнга чейинки замандын талабына ылайык веб‑приложениелерди түзөм.",
    heroViewProjects: "Проекттерди көрүү",
    heroCollaborate: "Келгиле, иштешели",
    metaLocationLabel: "Дарек",
    metaLocationValue: "Бишкек, Кыргызстан",
    metaStatusLabel: "Статус",
    metaStatusValue: "Жумушка жана долбоорлорго ачык",
    metaFocusLabel: "Фокус",
    metaFocusValue: "Fullstack · UI/UX · Өндүрүмдүүлүк",
    currentFocus: "Азыркы фокус",
    focusList: [
      "Татаал React‑приложениелер",
      "Кыйын state‑менеджмент",
      "Mobile‑first адаптивдүү дизайн",
      "Коддун өндүрүмдүүлүгүн жогорулатуу",
    ],
    quickStats: "Статистика",
    statYearsOld: "Жаш",
    statProjects: "Проект",
    statYearsCoding: "Жыл код жазуу",
    aboutTitle: "Жөнүндө",
    aboutSubtitle:
      "15 жаштагы fullstack‑долбоорчу. Тез үйрөнөм, чыныгы колдонуучулар үчүн чыныгы продукттарды жасайм.",
    aboutP1:
      "Мен Бишкектен чыккан жаш программистмин. Таза, түшүнүктүү жана кооз веб‑интерфейстерди түзгөндү жактырам. Дизайн жана инженердик ой жүгүртүүнү айкалыштырып, масштабдалуучу колдонмолорду жазам.",
    aboutP2:
      "Максатым — белгилүү IT‑компанияда fullstack‑долбоорчу болуп иштеп, көйгөйлөрдү чече турган продукттарды чыгаруу. Азырынча бул максатка фриланс, курстар жана жеке проекттер аркылуу жетип жатам.",
    goalsLabel: "Максаттар",
    goalsList: [
      "Күчтүү, тажрыйбалуу разработчик болуу",
      "Масштабдалуучу сервистерди жазуу",
      "Чыныгы көйгөйлөргө чечим табуу",
      "Токтобой окуп, өнүгүп туруу",
    ],
    languagesLabel: "Тилдер",
    funFactsLabel: "Кызыктар",
    funFactsList: [
      "Оюндарды жана алардын механикасын жактырам",
      "Сапаттуу UI‑дизайнга кызыгам",
      "Ар дайым жаңы технологияларды изилдейм",
      "Катуу задачаларды чечкенди жакшы көрөм",
    ],
    techTitle: "Технологиялар",
    techSubtitle: "Интерфейстен тартып backend’ге чейинки толук стэк.",
    techFrontend: "Frontend",
    techBackend: "Backend",
    techTools: "Куралдар",
    techSpecial: "Адистешүү",
    projectsTitle: "Негизги проекттер",
    projectsSubtitle:
      "Өзүмө эң жаккан иштерим. Дизайн чорно‑ак, бирок тажрыйба түстүү.",
    experienceTitle: "Тажрыйба жана жетишкендиктер",
    timeline: {
      year1Title: "Студент‑долбоорчу — OkurMen",
      year1Text:
        "Реалдуу проекттерге негизделген интенсивдүү программалоо курсу.",
      ongoingTitle: "Фриланс‑долбоорчу",
      ongoingText:
        "Клиенттер үчүн тез жана ылайыкташкан сайттар менен веб‑колдонмолорду жазам.",
      alwaysTitle: "Өз алдынча окуу",
      alwaysText:
        "Онлайн курстар, документация жана жеке проекттер аркылуу дайыма өсүп жатам.",
    },
    achievements: {
      young: {
        label: "Жаш разработчик",
        text: "Комьюнити ичинде 15 жаштагы fullstack‑долбоорчу.",
      },
      freelance: {
        label: "Фриланста тажрыйба",
        text: "Бир нече коммерциялык проектти ийгиликтүү бүтүргөм.",
      },
      design: {
        label: "Коопсуз дизайн",
        text: "Сулуу жана пайдалануучуга ыңгайлуу интерфейстерди түзөм.",
      },
      learning: {
        label: "Тез үйрөнөм",
        text: "Жаңы технологияларды бат өздөштүрөм.",
      },
    },
    contactTitle: "Байланышалы",
    contactSubtitle:
      "Стажировкага, фриланска жана кызыктуу проекттерге ачыкмын.",
    contactDetails: "Байланыш маалыматтары",
    contactEmail: "Email",
    contactPhone: "Телефон",
    contactGitHub: "GitHub",
    contactAddress: "Дарек",
    formTitle: "Маалымат калтыруңуз",
    formName: "Атыңыз",
    formEmail: "Email",
    formMessage: "Проект жөнүндө айтып бериңиз",
    formNote:
      "Бул демо‑форма. Эң жакшысы — дароо почта же мессенджер аркылуу жазуу.",
    langToggleLabel: "Тил",
    alertDemo:
      "Рахмат! Бул демо‑форма, мага email же WhatsApp аркылуу жазганыңыз жакшы.",
  },
};

function App() {
  const [lang, setLang] = useState("ru");

  const t = TEXT[lang];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    alert(t.alertDemo);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible", "revealed-once");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const year = new Date().getFullYear();

  return (
    <div className="page">
      <header className="header">
        <div className="header__logo">RS</div>
        <nav className="header__nav">
          <button onClick={() => scrollToSection("about")}>
            {t.nav.about}
          </button>
          <button onClick={() => scrollToSection("stack")}>
            {t.nav.stack}
          </button>
          <button onClick={() => scrollToSection("projects")}>
            {t.nav.projects}
          </button>
          <button onClick={() => scrollToSection("timeline")}>
            {t.nav.experience}
          </button>
          <button onClick={() => scrollToSection("contact")}>
            {t.nav.contact}
          </button>
        </nav>
        <div className="header__controls">
          <div className="lang-switch">
            <span className="lang-switch__label">{t.langToggleLabel}:</span>
            <button
              className={`chip ${lang === "ky" ? "chip--active" : ""}`}
              onClick={() => setLang("ky")}
            >
              KG
            </button>
            <button
              className={`chip ${lang === "ru" ? "chip--active" : ""}`}
              onClick={() => setLang("ru")}
            >
              RU
            </button>
            <button
              className={`chip ${lang === "en" ? "chip--active" : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <button
            className="header__cta header__cta--ghost"
            onClick={() => scrollToSection("contact")}
          >
            {t.ctaHire}
          </button>
        </div>
      </header>

      <main>
        <section className="section hero" id="top">
          <div className="hero__content reveal">
            <p className="hero__eyebrow">{t.heroBadge}</p>
            <h1 className="hero__title">
              {t.heroTitleLine1}
              <br />
              {t.heroTitleLine2}{" "}
              <span className="outline">Ramis&nbsp;Sharshenov</span>
            </h1>
            <p className="hero__subtitle">
              {t.heroSubtitle}
            </p>
            <div className="hero__actions">
              <button
                className="ё"
                onClick={() => scrollToSection("projects")}
              >
                {t.heroViewProjects}
              </button>
              <button
                className="btn btn--ghost"
                onClick={() => scrollToSection("contact")}
              >
                {t.heroCollaborate}
              </button>
            </div>
            <div className="hero__meta">
              <div>
                <span className="label">{t.metaLocationLabel}</span>
                <span className="value">{t.metaLocationValue}</span>
              </div>
              <div>
                <span className="label">{t.metaStatusLabel}</span>
                <span className="value">{t.metaStatusValue}</span>
              </div>
              <div>
                <span className="label">{t.metaFocusLabel}</span>
                <span className="value">{t.metaFocusValue}</span>
              </div>
            </div>
          </div>

          <div className="hero__side reveal">
            <div className="hero-card">
              <p className="hero-card__label">{t.currentFocus}</p>
              <ul className="hero-card__list">
                {t.focusList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="hero-card hero-card--secondary">
              <p className="hero-card__label">{t.quickStats}</p>
              <div className="hero-card__grid">
                <div>
                  <span className="number">15</span>
                  <span className="caption">{t.statYearsOld}</span>
                </div>
                <div>
                  <span className="number">10+</span>
                  <span className="caption">{t.statProjects}</span>
                </div>
      <div>
                  <span className="number">1+</span>
                  <span className="caption">{t.statYearsCoding}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--split" id="about">
          <div className="section__header reveal">
            <h2 className="section__title">{t.aboutTitle}</h2>
            <p className="section__subtitle">{t.aboutSubtitle}</p>
          </div>
          <div className="section__body">
            <div className="text-block reveal">
              <p>
                {t.aboutP1}
              </p>
              <p>
                {t.aboutP2}
              </p>
            </div>
            <div className="about-grid reveal">
              <div className="pill-card">
                <span className="pill-card__label">{t.goalsLabel}</span>
                <ul>
                  {t.goalsList.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
              <div className="pill-card">
                <span className="pill-card__label">{t.languagesLabel}</span>
                <ul>
                  <li>🇰🇬 Kyrgyz — Native</li>
                  <li>🇺🇸 English — Fluent</li>
                </ul>
              </div>
              <div className="pill-card">
                <span className="pill-card__label">{t.funFactsLabel}</span>
                <ul>
                  {t.funFactsList.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="stack">
          <div className="section__header reveal">
            <h2 className="section__title">{t.techTitle}</h2>
            <p className="section__subtitle">{t.techSubtitle}</p>
          </div>

          <div className="stack-grid">
            <div className="stack-group reveal">
              <h3>{t.techFrontend}</h3>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Redux</li>
                <li>HTML5 &amp; CSS3</li>
                <li>Bootstrap</li>
                <li>Foundation</li>
              </ul>
            </div>
            <div className="stack-group reveal">
              <h3>{t.techBackend}</h3>
              <ul>
                <li>Python</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="stack-group reveal">
              <h3>{t.techTools}</h3>
              <ul>
                <li>Git &amp; GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className="stack-group reveal">
              <h3>{t.techSpecial}</h3>
              <ul>
                <li>Fullstack development</li>
                <li>Responsive design</li>
                <li>UI/UX design</li>
                <li>Performance optimisation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section__header reveal">
            <h2 className="section__title">{t.projectsTitle}</h2>
            <p className="section__subtitle">{t.projectsSubtitle}</p>
          </div>

          <div className="projects-grid">
            <Project
              title="Genius"
              tag="Web App"
              desc="A cutting‑edge web application highlighting innovative design and smooth user experience."
              items={[
                "Modern, minimal UI/UX",
                "Fully responsive layout",
                "Advanced interactive features",
              ]}
            />
            <Project
              title="Северяночка"
              tag="E‑commerce"
              desc="Full‑featured e‑commerce platform delivering a complete shopping experience."
              items={[
                "Shopping cart & checkout flow",
                "Payment integration",
                "User authentication system",
              ]}
            />
            <Project
              title="StarBucks"
              tag="Brand Website"
              desc="Modern coffee shop website with a focus on motion and visual storytelling."
              items={[
                "Smooth micro‑interactions",
                "Interactive menu",
                "Online ordering flow",
              ]}
            />
            <Project
              title="Интернет магазин"
              tag="E‑commerce"
              desc="Complete online store with product catalog and admin tools."
              items={[
                "Searchable product catalogue",
                "Admin dashboard",
                "Order management",
              ]}
            />
            <Project
              title="Healthycarely"
              tag="Healthcare"
              desc="Healthcare platform for managing patients and appointments."
              items={[
                "Patient registration",
                "Appointment scheduling",
                "Medical record management",
              ]}
            />
            <Project
              title="Unitidlet"
              tag="Gaming"
              desc="Gaming platform focused on user engagement and progression."
              items={[
                "User profiles & achievements",
                "Engagement‑driven UX",
                "Social features",
              ]}
            />
            <Project
              title="Авто покраски"
              tag="Services"
              desc="Automotive services website for showcasing work and booking."
              items={[
                "Service booking flow",
                "Portfolio gallery",
                "Customer reviews",
              ]}
            />
            <Project
              title="Comics"
              tag="Platform"
              desc="Digital comics platform with a smooth reading experience."
              items={[
                "Optimised comic reader",
                "Library management",
                "Reading progress tracking",
              ]}
            />
            <Project
              title="Rolls‑Royce"
              tag="Showcase"
              desc="Luxury car website focusing on premium visuals and interaction."
              items={[
                "High‑end visual design",
                "Interactive galleries",
                "Virtual showroom experience",
              ]}
            />
          </div>
        </section>

        <section className="section section--split" id="timeline">
          <div className="section__header reveal">
            <h2 className="section__title">{t.experienceTitle}</h2>
          </div>
          <div className="section__body">
            <div className="timeline reveal">
              <TimelineItem
                date="1 Year"
                title={t.timeline.year1Title}
                text={t.timeline.year1Text}
              />
              <TimelineItem
                date="Ongoing"
                title={t.timeline.ongoingTitle}
                text={t.timeline.ongoingText}
              />
              <TimelineItem
                date="Always"
                title={t.timeline.alwaysTitle}
                text={t.timeline.alwaysText}
              />
            </div>

            <div className="achievements reveal">
              <Achievement
                label={t.achievements.young.label}
                text={t.achievements.young.text}
              />
              <Achievement
                label={t.achievements.freelance.label}
                text={t.achievements.freelance.text}
              />
              <Achievement
                label={t.achievements.design.label}
                text={t.achievements.design.text}
              />
              <Achievement
                label={t.achievements.learning.label}
                text={t.achievements.learning.text}
              />
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section__header reveal">
            <h2 className="section__title">{t.contactTitle}</h2>
            <p className="section__subtitle">{t.contactSubtitle}</p>
          </div>

          <div className="contact-grid">
            <div className="contact-card reveal">
              <h3>{t.contactDetails}</h3>
              <ul>
                <li>
                  <span className="label">{t.contactEmail}</span>
                  <a href="mailto:rsedy28@gmail.com" className="link">
                    rsedy28@gmail.com
                  </a>
                </li>
                <li>
                  <span className="label">{t.contactPhone}</span>
                  <a href="tel:+996508138887" className="link">
                    +996 508 138 887
                  </a>
                </li>
                <li>
                  <span className="label">{t.contactGitHub}</span>
                  <a
                    href="https://github.com/rsedy28-afk"
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/rsedy28-afk
                  </a>
                </li>
              </ul>
            </div>

            <form
              className="contact-form reveal"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <h3>{t.formTitle}</h3>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">{t.formName}</label>
                  <input id="name" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="email">{t.formEmail}</label>
                  <input id="email" type="email" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="message">{t.formMessage}</label>
                <textarea id="message" rows="4" required />
              </div>
              <button className="btn btn--primary" type="submit">
                {t.formTitle}
              </button>
              <p className="form-note">
                {t.formNote}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {year} Ramis Sharshenov. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Project({ title, tag, desc, items }) {
  return (
    <article className="project-card reveal">
      <div className="project-card__header">
        <h3>{title}</h3>
        <span className="project-card__tag">{tag}</span>
      </div>
      <p className="project-card__desc">{desc}</p>
      <ul className="project-card__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function TimelineItem({ date, title, text }) {
  return (
    <div className="timeline__item">
      <div className="timeline__date">{date}</div>
      <div className="timeline__content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Achievement({ label, text }) {
  return (
    <div className="achievement-card">
      <span className="achievement-card__label">{label}</span>
      <p>{text}</p>
    </div>
  );
}

export default App;
