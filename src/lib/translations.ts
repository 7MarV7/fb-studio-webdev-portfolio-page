
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
  vividfolio: { en: 'Vividfolio', de: 'Vividfolio' },

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

  // Legal Pages - Common
  backToHome: { en: 'Back to Home', de: 'Zurück zur Startseite' },
  legalImportantNote: { 
    en: 'IMPORTANT NOTE: This is an automatically generated placeholder. Please replace this text with your complete and legally compliant imprint/privacy policy. Consult a legal expert for this purpose.',
    de: 'WICHTIGER HINWEIS: Dies ist ein automatisch generierter Platzhalter. Bitte ersetzen Sie diesen Text durch Ihr vollständiges und rechtskonformes Impressum/Datenschutzerklärung. Konsultieren Sie hierfür einen Rechtsexperten.'
  },

  // Imprint Page
  imprintTitle: { en: 'Imprint', de: 'Impressum' },
  imprintInfoPursuant: {
    en: 'Information pursuant to § 5 TMG (German Telemedia Act) or equivalent local regulations',
    de: 'Angaben gemäß § 5 TMG oder entsprechenden lokalen Vorschriften'
  },
  imprintYourNameCompany: { en: '[Your Name/Company Name]', de: 'DE: [Your Name/Company Name]' },
  imprintYourStreet: { en: '[Your Street and House Number]', de: 'DE: [Your Street and House Number]' },
  imprintYourPostalCity: { en: '[Your Postal Code and City]', de: 'DE: [Your Postal Code and City]' },
  imprintYourCountry: { en: '[Your Country]', de: 'DE: [Your Country]' },
  imprintRepresentedBy: { en: 'Represented by:', de: 'Vertreten durch:' },
  imprintNameRepresentative: { en: '[Name of authorized representative, if applicable]', de: 'DE: [Name of authorized representative, if applicable]' },
  imprintContact: { en: 'Contact:', de: 'Kontakt:' },
  imprintPhone: { en: 'Phone: [Your phone number, if available]', de: 'DE: Phone: [Your phone number, if available]' },
  imprintEmail: { en: 'Email: [Your email address]', de: 'DE: Email: [Your email address]' },
  imprintVatId: { en: 'VAT ID / Tax ID:', de: 'USt-IdNr. / Steuernummer:' },
  imprintVatIdText: { 
    en: 'Sales tax identification number according to [relevant law, e.g., §27a Value Added Tax Act if applicable]:',
    de: 'DE: Sales tax identification number according to [relevant law, e.g., §27a Value Added Tax Act if applicable]:'
  },
  imprintYourVatId: { en: '[Your VAT ID or Tax ID, if available/applicable]', de: 'DE: [Your VAT ID or Tax ID, if available/applicable]' },
  imprintResponsibleContent: { 
    en: 'Responsible for the content according to [relevant law, e.g., § 55 Abs. 2 RStV in Germany]:',
    de: 'DE: Responsible for the content according to [relevant law, e.g., § 55 Abs. 2 RStV in Germany]:'
  },
  imprintResponsibleNameAddress: { en: '[Name and address of the person responsible for the content, if different from above]', de: 'DE: [Name and address of the person responsible for the content, if different from above]' },
  imprintDisputeResolution: { en: 'Dispute Resolution', de: 'Streitschlichtung' },
  imprintDisputeResolutionEU: { 
    en: 'The European Commission provides a platform for online dispute resolution (ODR):',
    de: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:'
  },
  imprintDisputeResolutionEUPlatformLink: { en: 'https://ec.europa.eu/consumers/odr', de: 'https://ec.europa.eu/consumers/odr' }, // Link URL usually stays the same
  imprintDisputeResolutionEmail: { en: 'Our e-mail address can be found above in the imprint.', de: 'Unsere E-Mail-Adresse finden Sie oben im Impressum.' },
  imprintDisputeResolutionParticipation: { 
    en: 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board (or specify if you are).',
    de: 'DE: We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board (or specify if you are).'
  },
  imprintLiabilityContent: { en: 'Liability for Content', de: 'Haftung für Inhalte' },
  imprintLiabilityContentText1: { 
    en: 'As service providers, we are liable for own contents of these websites according to general laws. However, service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.',
    de: 'DE: As service providers, we are liable for own contents of these websites according to general laws. However, service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.'
  },
  imprintLiabilityContentText2: { 
    en: 'Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.',
    de: 'DE: Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.'
  },
  imprintLiabilityLinks: { en: 'Liability for Links', de: 'Haftung für Links' },
  imprintLiabilityLinksText1: {
    en: 'Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.',
    de: 'DE: Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.'
  },
  imprintLiabilityLinksText2: {
    en: 'The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.',
    de: 'DE: The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.'
  },
  imprintCopyright: { en: 'Copyright', de: 'Urheberrecht' },
  imprintCopyrightText1: {
    en: 'Contents and compilations published on these websites by the providers are subject to copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only.',
    de: 'DE: Contents and compilations published on these websites by the providers are subject to copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only.'
  },
  imprintCopyrightText2: {
    en: 'The commercial use of our contents without permission of the originator is prohibited. Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.',
    de: 'DE: The commercial use of our contents without permission of the originator is prohibited. Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.'
  },

  // Privacy Policy Page
  privacyPolicyTitle: { en: 'Privacy Policy', de: 'Datenschutzerklärung' },
  privacyPolicyEffectiveDate: { en: 'Effective Date: [Insert Date]', de: 'DE: Effective Date: [Insert Date]' },
  privacyPolicyIntroductionTitle: { en: '1. Introduction', de: '1. Einleitung' },
  privacyPolicyIntroductionText1: {
    en: 'Welcome to Vividfolio. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at [Your Contact Email].',
    de: 'DE: Welcome to Vividfolio. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at [Your Contact Email].'
  },
  privacyPolicyIntroductionText2: {
    en: 'This privacy notice describes how we might use your information if you visit our website at [Your Website URL] or use our services, such as the AI personalization feature.',
    de: 'DE: This privacy notice describes how we might use your information if you visit our website at [Your Website URL] or use our services, such as the AI personalization feature.'
  },
  privacyPolicyWhatInfoTitle: { en: '2. What Information Do We Collect?', de: '2. Welche Informationen sammeln wir?' },
  privacyPolicyWhatInfoPersonal: { en: 'Personal information you disclose to us:', de: 'Persönliche Informationen, die Sie uns offenlegen:' },
  privacyPolicyWhatInfoPersonalText1: {
    en: 'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website (such as using the AI personalization feature or submitting the contact form) or otherwise when you contact us.',
    de: 'DE: We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website (such as using the AI personalization feature or submitting the contact form) or otherwise when you contact us.'
  },
  privacyPolicyWhatInfoPersonalText2: {
    en: 'The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:',
    de: 'DE: The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:'
  },
  privacyPolicyWhatInfoProfileUrls: {
    en: '<strong>Profile URLs for Personalization:</strong> If you use our AI personalization feature, you may provide a URL to a public online profile (e.g., LinkedIn). This URL, along with existing portfolio content, is sent to an AI service (Google Gemini via Genkit) to generate a personalized introduction. This data is processed for this purpose and is not stored by us beyond the immediate processing needs unless legally required.',
    de: '<strong>Profil-URLs zur Personalisierung:</strong> DE: If you use our AI personalization feature, you may provide a URL to a public online profile (e.g., LinkedIn). This URL, along with existing portfolio content, is sent to an AI service (Google Gemini via Genkit) to generate a personalized introduction. This data is processed for this purpose and is not stored by us beyond the immediate processing needs unless legally required.'
  },
  privacyPolicyWhatInfoContactForm: {
    en: '<strong>Contact Form Data:</strong> If you use our contact form, we collect your name, email address, and the message you send. (Note: The contact form is currently a simulation and does not actually send or store data.)',
    de: '<strong>Kontaktformulardaten:</strong> DE: If you use our contact form, we collect your name, email address, and the message you send. (Note: The contact form is currently a simulation and does not actually send or store data.)'
  },
  privacyPolicyWhatInfoAuto: { en: 'Information automatically collected:', de: 'Automatisch gesammelte Informationen:' },
  privacyPolicyWhatInfoAutoText: {
    en: 'We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.',
    de: 'DE: We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.'
  },
  privacyPolicyHowInfoTitle: { en: '3. How Do We Use Your Information?', de: '3. Wie verwenden wir Ihre Informationen?' },
  privacyPolicyHowInfoText: {
    en: 'We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.',
    de: 'DE: We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.'
  },
  privacyPolicyHowInfoListServices: { 
    en: 'To provide and personalize our services (e.g., the AI portfolio personalization feature).',
    de: 'DE: To provide and personalize our services (e.g., the AI portfolio personalization feature).'
  },
  privacyPolicyHowInfoListInquiries: { 
    en: 'To respond to user inquiries/offer support to users.',
    de: 'DE: To respond to user inquiries/offer support to users.'
  },
  privacyPolicyHowInfoListAdmin: {
    en: 'To send administrative information to you.',
    de: 'DE: To send administrative information to you.'
  },
  privacyPolicyHowInfoListProtect: {
    en: 'To protect our Services.',
    de: 'DE: To protect our Services.'
  },
  privacyPolicyHowInfoListBusiness: {
    en: 'For other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, marketing and your experience.',
    de: 'DE: For other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, marketing and your experience.'
  },
  privacyPolicySharedTitle: { en: '4. Will Your Information Be Shared With Anyone?', de: '4. Werden Ihre Informationen mit jemandem geteilt?' },
  privacyPolicySharedText: {
    en: 'We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.',
    de: 'DE: We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.'
  },
  privacyPolicySharedTextSpecific: { en: 'Specifically:', de: 'Insbesondere:' },
  privacyPolicySharedAi: {
    en: '<strong>AI Service Providers:</strong> For the personalization feature, the provided profile URL and portfolio content are shared with Google\'s Gemini AI model via Genkit for processing. We do not control Google\'s subsequent use of this data; please refer to Google\'s privacy policies.',
    de: '<strong>KI-Dienstleister:</strong> DE: For the personalization feature, the provided profile URL and portfolio content are shared with Google\'s Gemini AI model via Genkit for processing. We do not control Google\'s subsequent use of this data; please refer to Google\'s privacy policies.'
  },
  privacyPolicySharedLegal: {
    en: '<strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.',
    de: '<strong>Gesetzliche Verpflichtungen:</strong> DE: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.'
  },
  privacyPolicyKeepInfoTitle: { en: '5. How Long Do We Keep Your Information?', de: '5. Wie lange bewahren wir Ihre Informationen auf?' },
  privacyPolicyKeepInfoText1: {
    en: 'We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).',
    de: 'DE: We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).'
  },
  privacyPolicyKeepInfoText2: {
    en: 'Data provided for the AI personalization feature is not stored by us after the personalization is generated, other than potentially in transient logs or as required by our AI service provider\'s terms.',
    de: 'DE: Data provided for the AI personalization feature is not stored by us after the personalization is generated, other than potentially in transient logs or as required by our AI service provider\'s terms.'
  },
  privacyPolicySafeInfoTitle: { en: '6. How Do We Keep Your Information Safe?', de: '6. Wie schützen wir Ihre Informationen?' },
  privacyPolicySafeInfoText: {
    en: 'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.',
    de: 'DE: We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.'
  },
  privacyPolicyRightsTitle: { en: '7. What Are Your Privacy Rights?', de: '7. Was sind Ihre Datenschutzrechte?' },
  privacyPolicyRightsText1: {
    en: 'In some regions (like the European Economic Area and the UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.',
    de: 'DE: In some regions (like the European Economic Area and the UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.'
  },
  privacyPolicyRightsText2: {
    en: 'If you have given consent to data processing, you may revoke this consent at any time for future effect.',
    de: 'DE: If you have given consent to data processing, you may revoke this consent at any time for future effect.'
  },
  privacyPolicyRightsText3: {
    en: 'To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.',
    de: 'DE: To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.'
  },
  privacyPolicyUpdatesTitle: { en: '8. Updates to This Notice', de: '8. Aktualisierungen dieser Erklärung' },
  privacyPolicyUpdatesText: {
    en: 'We may update this privacy notice from time to time. The updated version will be indicated by an updated "Effective Date" and the updated version will be effective as soon as it is accessible.',
    de: 'DE: We may update this privacy notice from time to time. The updated version will be indicated by an updated "Effective Date" and the updated version will be effective as soon as it is accessible.'
  },
  privacyPolicyContactUsTitle: { en: '9. How Can You Contact Us About This Notice?', de: '9. Wie können Sie uns bezüglich dieser Erklärung kontaktieren?' },
  privacyPolicyContactUsText1: {
    en: 'If you have questions or comments about this notice, you may email us at [Your Contact Email] or by post to:',
    de: 'DE: If you have questions or comments about this notice, you may email us at [Your Contact Email] or by post to:'
  },
  privacyPolicyContactUsCompany: { en: '[Your Company Name, if applicable]', de: 'DE: [Your Company Name, if applicable]' },
  privacyPolicyContactUsAddress: { en: '[Your Address]', de: 'DE: [Your Address]' },
  privacyPolicyLastUpdated: { en: 'Last updated: [Insert date of last update here]', de: 'DE: Last updated: [Insert date of last update here]' }
};

export type Language = 'en' | 'de';

    