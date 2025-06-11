
export interface Translations {
  [key: string]: {
    [lang: string]: string;
  };
}

export const translations: Translations = {
  // Navbar
  navHome: { en: 'Home', de: 'Start' },
  navProjects: { en: 'Projects', de: 'Projekte' },
  navSkills: { en: 'Skills', de: 'Fähigkeiten' },
  navContact: { en: 'Contact', de: 'Kontakt' },
  languageSwitchLabel: { en: 'Change Language', de: 'Sprache ändern' },
  languageEnglish: { en: 'English', de: 'Englisch' },
  languageGerman: { en: 'German', de: 'Deutsch' },
  vividfolio: { en: 'Vividfolio', de: 'Vividfolio' }, // App name likely stays same

  // Hero Section
  heroTitlePart1: { en: 'Crafting', de: 'Gestaltung' },
  heroTitlePart2: { en: 'Vivid', de: 'Lebendiger' },
  heroTitlePart3: { en: 'Digital Realities', de: 'Digitaler Realitäten' },
  viewMyWork: { en: 'View My Work', de: 'Meine Arbeit ansehen' },
  personalizeYourView: { en: 'Personalize Your View (e.g., LinkedIn Profile)', de: 'Ansicht personalisieren (z.B. LinkedIn Profil)'},
  profileUrlPlaceholder: { en: 'https://linkedin.com/in/yourprofile', de: 'https://linkedin.com/in/deinprofil'},
  personalizeButton: { en: 'Go', de: 'Los'},
  personalizeHint: { en: 'Enter a public profile URL to see an AI-tailored introduction.', de: 'Gib eine öffentliche Profil-URL ein, um eine KI-gestaltete Einleitung zu sehen.'},

  // Projects Section
  projectsTitle: { en: 'Featured Projects', de: 'Ausgewählte Projekte' },
  projectsSubtitle: { en: 'A selection of my work, showcasing creative solutions and technical skills.', de: 'Eine Auswahl meiner Arbeit, die kreative Lösungen und technische Fähigkeiten demonstriert.' },

  // Skills Section
  skillsTitle: { en: 'Core Competencies', de: 'Kernkompetenzen' },
  skillsSubtitle: { en: 'A versatile skill set honed through experience and continuous learning.', de: 'Ein vielseitiges Fähigkeitenspektrum, das durch Erfahrung und kontinuierliches Lernen verfeinert wurde.' },
  
  // Contact Section
  contactTitle: { en: "Let's Connect", de: "Lass uns verbinden" },
  contactSubtitle: { en: "Have a project in mind or just want to say hi? Feel free to reach out.", de: "Hast du ein Projekt im Sinn oder möchtest einfach nur Hallo sagen? Melde dich gerne." },
  contactFullName: { en: "Full Name", de: "Vollständiger Name" },
  contactYourName: { en: "Your Name", de: "Dein Name" },
  contactEmailAddress: { en: "Email Address", de: "E-Mail-Adresse" },
  contactYourEmail: { en: "you@example.com", de: "du@beispiel.com" },
  contactMessage: { en: "Message", de: "Nachricht" },
  contactYourMessage: { en: "Your message...", de: "Deine Nachricht..." },
  contactSendMessage: { en: "Send Message", de: "Nachricht senden" },
  contactDirectContact: { en: "Direct Contact", de: "Direkter Kontakt" },
  contactFindMeSocial: { en: "Find me on Social Media", de: "Finde mich auf Social Media" },
  contactQuickChat: { en: "Prefer a Quick Chat?", de: "Bevorzugst du einen schnellen Chat?" },
  contactQuickChatDesc: { en: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.", de: "Ich bin immer offen für die Diskussion neuer Projekte, kreativer Ideen oder Möglichkeiten, Teil deiner Visionen zu sein." },


  // Footer
  footerImprint: { en: 'Imprint', de: 'Impressum' },
  footerPrivacyPolicy: { en: 'Privacy Policy', de: 'Datenschutzerklärung' },
  footerRightsReserved: { en: 'Vividfolio. All rights reserved.', de: 'Vividfolio. Alle Rechte vorbehalten.' },
  footerDesignedWith: { en: 'Designed with passion and coded with Next.js & Tailwind CSS.', de: 'Mit Leidenschaft entworfen und mit Next.js & Tailwind CSS programmiert.'},

  // Legal Pages
  imprintTitle: { en: 'Imprint', de: 'Impressum' },
  privacyPolicyTitle: { en: 'Privacy Policy', de: 'Datenschutzerklärung' },
  backToHome: { en: 'Back to Home', de: 'Zurück zur Startseite' },
};

export type Language = 'en' | 'de';
