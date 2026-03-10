export type Lang = "EN" | "FR" | "AR";

export const translations = {
  EN: {
    nav: {
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      hire: "Hire Me",
    },
    hero: {
      badge: "Available for Projects",
      typed: "> Hello, World. I engineer scalable web & mobile solutions.",
      subtitle:
        "Full Stack Developer specializing in responsive, high-performance applications. Turning ideas into production-ready products.",
      cta: "View Projects",
      ctaSecondary: "Get In Touch",
      scroll: "Scroll",
    },
    about: {
      sectionProps: "About",
      title: "Who I Am",
      terminalName: "about.json — zsh",
      developer: "Amir Mezazigh",
      role: "Full Stack Developer & SaaS Specialist",
      experience: "7+ Years",
      core_focus: [
        "Scalable Mobile & Web Applications",
        "SaaS Architecture",
        "PWA"
      ],
      spoken_languages: ["Arabic", "English", "French"],
      featured_projects: {
        snapHVAC: "Professional HVAC/R PWA",
        Saroukh: "Personal progress tracker"
      },
      status: "Building the next big thing... 🚀"
    },
    projects: {
      sectionProps: "Work",
      title: "Featured Projects",
      subtitle: "Real-world applications built with performance, usability, and scalability in mind.",
      viewProject: "View Project",
      list: [
        {
          badge: "PWA",
          title: "snapHVAC",
          description: "Professional digital manifold and HVAC/R companion app. A comprehensive toolkit for HVAC technicians built as an offline-capable Progressive Web App.",
          features: ["PT Calculator", "Refrigerant Charge Calculator", "Error Codes Database"]
        },
        {
          badge: "Web App",
          title: "Saroukh",
          description: "Personal progress tracking web application designed to support mental wellness and personal development with powerful utility tools.",
          features: ["Custom breathing tools (4-7-8)", "SOS emergency contacts", "Secure data backup/restore system"]
        }
      ]
    },
    services: {
      sectionProps: "Expertise",
      title: "What I Do",
      subtitle: "End-to-end development services to bring your vision to life.",
      list: [
        {
          title: "Frontend Development",
          description: "Crafting pixel-perfect, responsive UIs with React and Next.js. From design system implementation to complex interactive dashboards — fast, accessible, and beautiful."
        },
        {
          title: "Backend & API Integration",
          description: "Building robust server-side solutions with Node.js. RESTful APIs, GraphQL endpoints, database architecture, and seamless third-party integrations."
        },
        {
          title: "Progressive Web Apps",
          description: "Developing offline-first PWAs that are installable, lightning fast, and deliver native-like experiences across all devices and platforms."
        }
      ]
    },
    contact: {
      sectionProps: "Contact",
      title: "Get In Touch",
      subtitle: "Let's build something great together",
      messageSent: "Message Sent!",
      messageSentDesc: "Thanks for reaching out. I'll get back to you soon.",
      nameLabel: "Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email",
      emailPlaceholder: "john@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      sendBtn: "Send Message",
      sending: "Sending...",
      errorMessage: "Something went wrong. Please try again.",
      orConnect: "or connect with me",
      footer: "© {year} DevPortfolio. Built with Next.js & Tailwind CSS."
    },
    tech: {
      "JavaScript": "JavaScript",
      "React": "React",
      "Node.js": "Node.js",
      "PWA": "PWA",
      "SaaS Architecture": "SaaS Architecture",
      "REST APIs": "REST APIs",
      "Git": "Git",
      "SQL": "SQL",
      "NoSQL": "NoSQL"
    }
  },
  FR: {
    nav: {
      about: "À propos",
      services: "Services",
      projects: "Projets",
      contact: "Contact",
      hire: "Embauchez-moi",
    },
    hero: {
      badge: "Disponible pour des projets",
      typed: "> Bonjour. Je conçois des solutions web & mobile évolutives.",
      subtitle:
        "Développeur Full Stack spécialisé dans les applications performantes et responsives. Transformer vos idées en produits prêts pour la production.",
      cta: "Voir les projets",
      ctaSecondary: "Me contacter",
      scroll: "Défiler",
    },
    about: {
      sectionProps: "À propos",
      title: "Qui je suis",
      terminalName: "about.json — zsh",
      developer: "Amir Mezazigh",
      role: "Développeur Full Stack & Spécialiste SaaS",
      experience: "7+ Ans",
      core_focus: [
        "Applications Web & Mobiles Évolutives",
        "Architecture SaaS",
        "PWA (Progressive Web Apps)"
      ],
      spoken_languages: ["Arabe", "Anglais", "Français"],
      featured_projects: {
        snapHVAC: "PWA Professionnelle CVC/R (HVAC/R)",
        Saroukh: "Outil de suivi de progression personnelle"
      },
      status: "En train de construire la prochaine grande innovation... 🚀"
    },
    projects: {
      sectionProps: "Travaux",
      title: "Projets Mis en Avant",
      subtitle: "Des applications concrètes conçues avec performance, ergonomie et évolutivité à l'esprit.",
      viewProject: "Voir le Projet",
      list: [
        {
          badge: "PWA",
          title: "snapHVAC",
          description: "Application compagnon professionnelle de manifold numérique CVC/R. Une boîte à outils complète pour les techniciens CVC, construite comme une Progressive Web App capable de fonctionner hors ligne.",
          features: ["Calculateur PT", "Calculateur de charge de fluide frigorigène", "Base de données de codes d'erreur"]
        },
        {
          badge: "Application Web",
          title: "Saroukh",
          description: "Application web de suivi des progrès personnels conçue pour soutenir le bien-être mental et le développement personnel avec des outils utilitaires puissants.",
          features: ["Outils de respiration personnalisés (4-7-8)", "Contacts d'urgence SOS", "Système de sauvegarde/restauration sécurisé des données"]
        }
      ]
    },
    services: {
      sectionProps: "Expertise",
      title: "Ce Que Je Fais",
      subtitle: "Des services de développement de bout en bout pour donner vie à votre vision.",
      list: [
        {
          title: "Développement Frontend",
          description: "Création d'interfaces utilisateur (UI) réactives au pixel près avec React et Next.js. De l'implémentation du système de design aux tableaux de bord interactifs complexes — rapides, accessibles et esthétiques."
        },
        {
          title: "Backend & Intégration d'API",
          description: "Construction de solutions robustes côté serveur avec Node.js. APIs RESTful, points d'accès GraphQL, architecture de bases de données, et intégrations fluides de services tiers."
        },
        {
          title: "Progressive Web Apps",
          description: "Développement de PWAs fonctionnant d'abord hors ligne (Offline-first), installables, extrêmement rapides, et offrant des expériences proches des applications natives sur tous les appareils et plateformes."
        }
      ]
    },
    contact: {
      sectionProps: "Contact",
      title: "Contactez-moi",
      subtitle: "Construisons quelque chose d'exceptionnel ensemble",
      messageSent: "Message Envoyé !",
      messageSentDesc: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      nameLabel: "Nom",
      namePlaceholder: "Jean Dupont",
      emailLabel: "Email",
      emailPlaceholder: "jean@exemple.com",
      messageLabel: "Message",
      messagePlaceholder: "Parlez-moi de votre projet...",
      sendBtn: "Envoyer le Message",
      sending: "Envoi en cours...",
      errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
      orConnect: "ou connectez-vous avec moi",
      footer: "© {year} DevPortfolio. Construit avec Next.js & Tailwind CSS."
    },
    tech: {
      "JavaScript": "JavaScript",
      "React": "React",
      "Node.js": "Node.js",
      "PWA": "PWA",
      "SaaS Architecture": "Architecture SaaS",
      "REST APIs": "API REST",
      "Git": "Git",
      "SQL": "SQL",
      "NoSQL": "NoSQL"
    }
  },
  AR: {
    nav: {
      about: "من أنا",
      services: "الخدمات",
      projects: "المشاريع",
      contact: "تواصل",
      hire: "وظّفني",
    },
    hero: {
      badge: "متاح للمشاريع",
      typed: "> مرحباً. أبني حلولاً رقمية للويب والجوال قابلة للتوسع.",
      subtitle:
        "مطوّر Full Stack متخصص في تطبيقات عالية الأداء ومتجاوبة. أحوّل أفكارك إلى منتجات جاهزة للإنتاج.",
      cta: "عرض المشاريع",
      ctaSecondary: "تواصل معي",
      scroll: "تمرير",
    },
    about: {
      sectionProps: "معلومات",
      title: "من أنا",
      terminalName: "about.json — zsh",
      developer: "أمير مزازيغ",
      role: "مطور Full Stack وخبير في معمارية SaaS",
      experience: "أكثر من 7 سنوات",
      core_focus: [
        "تطبيقات الويب والجوال القابلة للتوسع",
        "معمارية البرمجيات كخدمة (SaaS)",
        "تطبيقات الويب التقدمية (PWA)"
      ],
      spoken_languages: ["العربية", "الإنجليزية", "الفرنسية"],
      featured_projects: {
        snapHVAC: "تطبيق PWA احترافي لأنظمة التدفئة والتهوية وتكييف الهواء (HVAC/R)",
        Saroukh: "أداة تتبع التقدم الشخصي"
      },
      status: "أقوم ببناء المشروع الكبير القادم... 🚀"
    },
    projects: {
      sectionProps: "أعمالي",
      title: "مشاريع مميزة",
      subtitle: "تطبيقات واقعية مصممة مع التركيز على الأداء العالي، سهولة الاستخدام، وقابلية التوسع.",
      viewProject: "عرض المشروع",
      list: [
        {
          badge: "PWA",
          title: "snapHVAC",
          description: "تطبيق مساعد ومقياس مجمع رقمي (Digital Manifold) احترافي. مجموعة أدوات شاملة لفنيي التدفئة والتهوية، مبني بوصفه تطبيق ويب تقدمي (PWA) يدعم العمل دون اتصال بالإنترنت.",
          features: ["حاسبة الضغط ودرجة الحرارة (PT)", "حاسبة شحنة وسيط التبريد", "قاعدة بيانات لرموز الخطأ"]
        },
        {
          badge: "تطبيق ويب",
          title: "Saroukh",
          description: "تطبيق ويب لتتبع التقدم الشخصي مصمم لدعم الصحة النفسية والتطوير الذاتي، مزود بأدوات مفيدة وفعالة.",
          features: ["أدوات تنفس مخصصة (4-7-8)", "جهات اتصال لحالات الطوارئ (SOS)", "نظام آمن للنسخ الاحتياطي واستعادة البيانات"]
        }
      ]
    },
    services: {
      sectionProps: "الخبرات",
      title: "ماذا أقدم",
      subtitle: "خدمات تطوير برمجيات متكاملة لتحويل رؤيتك إلى واقع ملموس.",
      list: [
        {
          title: "تطوير الواجهات الأمامية (Frontend)",
          description: "تصميم واجهات مستخدم متجاوبة ودقيقة باستخدام React و Next.js. بدءاً من تطبيق أنظمة التصميم ووصولاً إلى لوحات التحكم التفاعلية المعقدة — أداء سريع، إمكانية وصول عالية، وتصميم جذاب."
        },
        {
          title: "تطوير الواجهات الخلفية وربط واجهات برمجة التطبيقات (Backend & APIs)",
          description: "بناء حلول قوية ومستقرة من جهة الخادم باستخدام Node.js. برمجة واجهات RESTful APIs ونقاط نهاية GraphQL، وهندسة قواعد البيانات، والدمج السلس مع خدمات الأطراف الثالثة."
        },
        {
          title: "تطبيقات الويب التقدمية (PWA)",
          description: "تطوير تطبيقات PWA تدعم العمل دون اتصال بالإنترنت كأولوية (Offline-first)، قابلة للتثبيت، سريعة الاستجابة، وتوفر تجربة قريبة من التطبيقات الأصلية عبر جميع الأجهزة والمنصات."
        }
      ]
    },
    contact: {
      sectionProps: "تواصل معى",
      title: "دعنا نتواصل",
      subtitle: "لنبني شيئاً عظيماً معاً",
      messageSent: "تم إرسال الرسالة!",
      messageSentDesc: "شكراً لتواصلك معي. سأرد عليك في أقرب وقت ممكن.",
      nameLabel: "الاسم",
      namePlaceholder: "جون دو",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "john@example.com",
      messageLabel: "الرسالة",
      messagePlaceholder: "أخبرني عن مشروعك...",
      sendBtn: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      orConnect: "أو تواصل معي عبر",
      footer: "© {year} DevPortfolio. تم التطوير باستخدام Next.js و Tailwind CSS."
    },
    tech: {
      "JavaScript": "جافا سكريبت (JavaScript)",
      "React": "React",
      "Node.js": "Node.js",
      "PWA": "PWA",
      "SaaS Architecture": "معمارية SaaS",
      "REST APIs": "REST APIs",
      "Git": "Git",
      "SQL": "SQL",
      "NoSQL": "NoSQL"
    }
  },
} as const;

export type Translations = (typeof translations)[Lang];
