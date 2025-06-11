
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
  initialIntroduction: { // This key might be used in HeroSection, ensure it has translations
    en: "A passionate and creative Web Developer specializing in crafting immersive and interactive digital experiences. With a strong foundation in modern frontend and backend technologies, coupled with a keen eye for design and 3D graphics, I transform complex ideas into elegant and user-friendly solutions. Explore my work to see how I can bring your next project to life.",
    de: "Eine leidenschaftliche und kreative Webentwicklerin, spezialisiert auf die Gestaltung immersiver und interaktiver digitaler Erlebnisse. Mit einer starken Grundlage in modernen Frontend- und Backend-Technologien, gepaart mit einem scharfen Auge für Design und 3D-Grafiken, verwandle ich komplexe Ideen in elegante und benutzerfreundliche Lösungen. Entdecke meine Arbeit, um zu sehen, wie ich dein nächstes Projekt zum Leben erwecken kann."
  },
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
    en: 'IMPORTANT NOTE: This is automatically generated placeholder text. Please replace this text with your complete and legally compliant imprint/privacy policy. Consult a legal expert for this purpose.',
    de: 'WICHTIGER HINWEIS: Dies ist ein automatisch generierter Platzhaltertext. Bitte ersetzen Sie diesen Text durch Ihr vollständiges und rechtskonformes Impressum/Datenschutzerklärung. Konsultieren Sie hierfür einen Rechtsexperten.'
  },

  // Imprint Page
  imprintTitle: { en: 'Imprint', de: 'Impressum' },
  imprintInfoPursuant: {
    en: 'Information pursuant to § 5 TMG (German Telemedia Act) or equivalent local regulations',
    de: 'Angaben gemäß § 5 TMG oder entsprechenden lokalen Vorschriften'
  },
  imprintYourNameCompany: { en: '[Your Name/Company Name]', de: '[Ihr Name/Firmenname]' },
  imprintYourStreet: { en: '[Your Street and House Number]', de: '[Ihre Straße und Hausnummer]' },
  imprintYourPostalCity: { en: '[Your Postal Code and City]', de: '[Ihre Postleitzahl und Stadt]' },
  imprintYourCountry: { en: '[Your Country]', de: '[Ihr Land]' },
  imprintRepresentedBy: { en: 'Represented by:', de: 'Vertreten durch:' },
  imprintNameRepresentative: { en: '[Name of authorized representative, if applicable]', de: '[Name des Vertretungsberechtigten, falls zutreffend]' },
  imprintContact: { en: 'Contact:', de: 'Kontakt:' },
  imprintPhone: { en: 'Phone: [Your phone number, if available]', de: 'Telefon: [Ihre Telefonnummer, falls vorhanden]' },
  imprintEmail: { en: 'Email: [Your email address]', de: 'E-Mail: [Ihre E-Mail-Adresse]' },
  imprintVatId: { en: 'VAT ID / Tax ID:', de: 'USt-IdNr. / Steuernummer:' },
  imprintVatIdText: { 
    en: 'Sales tax identification number according to [relevant law, e.g., §27a Value Added Tax Act if applicable]:',
    de: 'Umsatzsteuer-Identifikationsnummer gemäß [einschlägigem Gesetz, z.B. §27a UStG, falls zutreffend]:'
  },
  imprintYourVatId: { en: '[Your VAT ID or Tax ID, if available/applicable]', de: '[Ihre USt-IdNr. oder Steuernummer, falls vorhanden/zutreffend]' },
  imprintResponsibleContent: { 
    en: 'Responsible for the content according to [relevant law, e.g., § 55 Abs. 2 RStV in Germany]:',
    de: 'Verantwortlich für den Inhalt nach [einschlägigem Gesetz, z.B. § 55 Abs. 2 RStV]:'
  },
  imprintResponsibleNameAddress: { en: '[Name and address of the person responsible for the content, if different from above]', de: '[Name und Anschrift des Verantwortlichen für den Inhalt, falls abweichend]' },
  imprintDisputeResolution: { en: 'Dispute Resolution', de: 'Streitschlichtung' },
  imprintDisputeResolutionEU: { 
    en: 'The European Commission provides a platform for online dispute resolution (ODR):',
    de: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:'
  },
  imprintDisputeResolutionEUPlatformLink: { en: 'https://ec.europa.eu/consumers/odr', de: 'https://ec.europa.eu/consumers/odr' },
  imprintDisputeResolutionEmail: { en: 'Our e-mail address can be found above in the imprint.', de: 'Unsere E-Mail-Adresse finden Sie oben im Impressum.' },
  imprintDisputeResolutionParticipation: { 
    en: 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board (or specify if you are).',
    de: 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (oder geben Sie an, falls Sie es sind).'
  },
  imprintLiabilityContent: { en: 'Liability for Content', de: 'Haftung für Inhalte' },
  imprintLiabilityContentText1: { 
    en: 'As service providers, we are liable for own contents of these websites according to general laws. However, service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.',
    de: 'Als Diensteanbieter sind wir gemäß allgemeiner Gesetze für eigene Inhalte auf diesen Seiten verantwortlich. Diensteanbieter sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen permanent zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.'
  },
  imprintLiabilityContentText2: { 
    en: 'Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.',
    de: 'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.'
  },
  imprintLiabilityLinks: { en: 'Liability for Links', de: 'Haftung für Links' },
  imprintLiabilityLinksText1: {
    en: 'Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.',
    de: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.'
  },
  imprintLiabilityLinksText2: {
    en: 'The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.',
    de: 'Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.'
  },
  imprintCopyright: { en: 'Copyright', de: 'Urheberrecht' },
  imprintCopyrightText1: {
    en: 'Contents and compilations published on these websites by the providers are subject to copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only.',
    de: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.'
  },
  imprintCopyrightText2: {
    en: 'The commercial use of our contents without permission of the originator is prohibited. Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.',
    de: 'Die kommerzielle Nutzung unserer Inhalte ohne Zustimmung des Urhebers ist untersagt. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.'
  },

  // Privacy Policy Page
  privacyPolicyTitle: { en: 'Privacy Policy', de: 'Datenschutzerklärung' },
  privacyPolicyEffectiveDate: { en: 'Effective Date: [Insert Date]', de: 'Gültigkeitsdatum: [Datum einfügen]' },
  privacyPolicyIntroductionTitle: { en: '1. Introduction', de: '1. Einleitung' },
  privacyPolicyIntroductionText1: {
    en: 'Welcome to Vividfolio. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at [Your Contact Email].',
    de: 'Willkommen bei Vividfolio. Wir verpflichten uns, Ihre persönlichen Daten und Ihr Recht auf Privatsphäre zu schützen. Wenn Sie Fragen oder Bedenken zu dieser Datenschutzerklärung oder unseren Praktiken in Bezug auf Ihre persönlichen Daten haben, kontaktieren Sie uns bitte unter [Ihre Kontakt-E-Mail].'
  },
  privacyPolicyIntroductionText2: {
    en: 'This privacy notice describes how we might use your information if you visit our website at [Your Website URL] or use our services, such as the AI personalization feature.',
    de: 'Diese Datenschutzerklärung beschreibt, wie wir Ihre Informationen verwenden könnten, wenn Sie unsere Website unter [Ihre Website-URL] besuchen oder unsere Dienste nutzen, wie z.B. die KI-Personalisierungsfunktion.'
  },
  privacyPolicyWhatInfoTitle: { en: '2. What Information Do We Collect?', de: '2. Welche Informationen sammeln wir?' },
  privacyPolicyWhatInfoPersonal: { en: 'Personal information you disclose to us:', de: 'Persönliche Informationen, die Sie uns offenlegen:' },
  privacyPolicyWhatInfoPersonalText1: {
    en: 'We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website (such as using the AI personalization feature or submitting the contact form) or otherwise when you contact us.',
    de: 'Wir sammeln personenbezogene Daten, die Sie uns freiwillig zur Verfügung stellen, wenn Sie Interesse an Informationen über uns oder unsere Produkte und Dienstleistungen bekunden, an Aktivitäten auf der Website teilnehmen (z.B. Nutzung der KI-Personalisierungsfunktion oder Absenden des Kontaktformulars) oder uns anderweitig kontaktieren.'
  },
  privacyPolicyWhatInfoPersonalText2: {
    en: 'The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:',
    de: 'Die von uns erhobenen personenbezogenen Daten hängen vom Kontext Ihrer Interaktionen mit uns und der Website, den von Ihnen getroffenen Entscheidungen und den von Ihnen genutzten Produkten und Funktionen ab. Die von uns erhobenen personenbezogenen Daten können Folgendes umfassen:'
  },
  privacyPolicyWhatInfoProfileUrls: {
    en: '<strong>Profile URLs for Personalization:</strong> If you use our AI personalization feature, you may provide a URL to a public online profile (e.g., LinkedIn). This URL, along with existing portfolio content, is sent to an AI service (Google Gemini via Genkit) to generate a personalized introduction. This data is processed for this purpose and is not stored by us beyond the immediate processing needs unless legally required.',
    de: '<strong>Profil-URLs zur Personalisierung:</strong> Wenn Sie unsere KI-Personalisierungsfunktion nutzen, können Sie eine URL zu einem öffentlichen Online-Profil (z.B. LinkedIn) angeben. Diese URL wird zusammen mit vorhandenen Portfolio-Inhalten an einen KI-Dienst (Google Gemini über Genkit) gesendet, um eine personalisierte Einleitung zu generieren. Diese Daten werden zu diesem Zweck verarbeitet und von uns nicht über den unmittelbaren Verarbeitungsbedarf hinaus gespeichert, es sei denn, dies ist gesetzlich vorgeschrieben.'
  },
  privacyPolicyWhatInfoContactForm: {
    en: '<strong>Contact Form Data:</strong> If you use our contact form, we collect your name, email address, and the message you send. (Note: The contact form is currently a simulation and does not actually send or store data.)',
    de: '<strong>Kontaktformulardaten:</strong> Wenn Sie unser Kontaktformular verwenden, erfassen wir Ihren Namen, Ihre E-Mail-Adresse und die von Ihnen gesendete Nachricht. (Hinweis: Das Kontaktformular ist derzeit eine Simulation und sendet oder speichert keine Daten tatsächlich.)'
  },
  privacyPolicyWhatInfoAuto: { en: 'Information automatically collected:', de: 'Automatisch gesammelte Informationen:' },
  privacyPolicyWhatInfoAutoText: {
    en: 'We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.',
    de: 'Wir sammeln automatisch bestimmte Informationen, wenn Sie die Website besuchen, nutzen oder auf ihr navigieren. Diese Informationen geben Ihre spezifische Identität nicht preis (wie Ihren Namen oder Ihre Kontaktinformationen), können aber Geräte- und Nutzungsinformationen wie Ihre IP-Adresse, Browser- und Geräteeigenschaften, Betriebssystem, Spracheinstellungen, verweisende URLs, Gerätename, Land, Standort, Informationen darüber, wie und wann Sie unsere Website nutzen, und andere technische Informationen enthalten. Diese Informationen werden hauptsächlich benötigt, um die Sicherheit und den Betrieb unserer Website aufrechtzuerhalten, sowie für unsere internen Analyse- und Berichtszwecke.'
  },
  privacyPolicyHowInfoTitle: { en: '3. How Do We Use Your Information?', de: '3. Wie verwenden wir Ihre Informationen?' },
  privacyPolicyHowInfoText: {
    en: 'We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.',
    de: 'Wir verwenden die über unsere Website gesammelten personenbezogenen Daten für eine Vielzahl von unten beschriebenen Geschäftszwecken. Wir verarbeiten Ihre personenbezogenen Daten für diese Zwecke unter Berufung auf unsere berechtigten Geschäftsinteressen, um einen Vertrag mit Ihnen abzuschließen oder zu erfüllen, mit Ihrer Zustimmung und/oder zur Erfüllung unserer gesetzlichen Verpflichtungen.'
  },
  privacyPolicyHowInfoListServices: { 
    en: 'To provide and personalize our services (e.g., the AI portfolio personalization feature).',
    de: 'Zur Bereitstellung und Personalisierung unserer Dienste (z.B. die KI-Portfolio-Personalisierungsfunktion).'
  },
  privacyPolicyHowInfoListInquiries: { 
    en: 'To respond to user inquiries/offer support to users.',
    de: 'Um auf Benutzeranfragen zu antworten/Benutzern Unterstützung anzubieten.'
  },
  privacyPolicyHowInfoListAdmin: {
    en: 'To send administrative information to you.',
    de: 'Um Ihnen administrative Informationen zuzusenden.'
  },
  privacyPolicyHowInfoListProtect: {
    en: 'To protect our Services.',
    de: 'Zum Schutz unserer Dienste.'
  },
  privacyPolicyHowInfoListBusiness: {
    en: 'For other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, marketing and your experience.',
    de: 'Für andere Geschäftszwecke, wie Datenanalyse, Identifizierung von Nutzungstrends, Bestimmung der Wirksamkeit unserer Werbekampagnen und zur Bewertung und Verbesserung unserer Website, Produkte, Marketing und Ihrer Erfahrung.'
  },
  privacyPolicySharedTitle: { en: '4. Will Your Information Be Shared With Anyone?', de: '4. Werden Ihre Informationen mit jemandem geteilt?' },
  privacyPolicySharedText: {
    en: 'We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.',
    de: 'Wir geben Informationen nur mit Ihrer Zustimmung weiter, um Gesetze einzuhalten, Ihnen Dienstleistungen zu erbringen, Ihre Rechte zu schützen oder geschäftliche Verpflichtungen zu erfüllen.'
  },
  privacyPolicySharedTextSpecific: { en: 'Specifically:', de: 'Insbesondere:' },
  privacyPolicySharedAi: {
    en: '<strong>AI Service Providers:</strong> For the personalization feature, the provided profile URL and portfolio content are shared with Google\'s Gemini AI model via Genkit for processing. We do not control Google\'s subsequent use of this data; please refer to Google\'s privacy policies.',
    de: '<strong>KI-Dienstleister:</strong> Für die Personalisierungsfunktion werden die bereitgestellte Profil-URL und Portfolio-Inhalte zur Verarbeitung an das Gemini-KI-Modell von Google über Genkit weitergegeben. Wir kontrollieren nicht die anschließende Verwendung dieser Daten durch Google; bitte beachten Sie die Datenschutzrichtlinien von Google.'
  },
  privacyPolicySharedLegal: {
    en: '<strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.',
    de: '<strong>Gesetzliche Verpflichtungen:</strong> Wir können Ihre Informationen offenlegen, wenn wir gesetzlich dazu verpflichtet sind, um geltendes Recht, behördliche Anfragen, ein Gerichtsverfahren, einen Gerichtsbeschluss oder ein rechtliches Verfahren einzuhalten.'
  },
  privacyPolicyKeepInfoTitle: { en: '5. How Long Do We Keep Your Information?', de: '5. Wie lange bewahren wir Ihre Informationen auf?' },
  privacyPolicyKeepInfoText1: {
    en: 'We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).',
    de: 'Wir bewahren Ihre personenbezogenen Daten nur so lange auf, wie es für die in dieser Datenschutzerklärung dargelegten Zwecke erforderlich ist, es sei denn, eine längere Aufbewahrungsfrist ist gesetzlich vorgeschrieben oder zulässig (z.B. steuerliche, buchhalterische oder andere gesetzliche Anforderungen).'
  },
  privacyPolicyKeepInfoText2: {
    en: 'Data provided for the AI personalization feature is not stored by us after the personalization is generated, other than potentially in transient logs or as required by our AI service provider\'s terms.',
    de: 'Daten, die für die KI-Personalisierungsfunktion bereitgestellt werden, werden von uns nach der Generierung der Personalisierung nicht gespeichert, außer möglicherweise in transienten Protokollen oder wie es die Bedingungen unseres KI-Dienstleisters erfordern.'
  },
  privacyPolicySafeInfoTitle: { en: '6. How Do We Keep Your Information Safe?', de: '6. Wie schützen wir Ihre Informationen?' },
  privacyPolicySafeInfoText: {
    en: 'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.',
    de: 'Wir haben angemessene technische und organisatorische Sicherheitsmaßnahmen getroffen, um die Sicherheit aller von uns verarbeiteten personenbezogenen Daten zu schützen. Trotz unserer Schutzmaßnahmen und Bemühungen, Ihre Informationen zu sichern, kann jedoch keine elektronische Übertragung über das Internet oder Informationsspeichertechnologie zu 100% garantiert sicher sein.'
  },
  privacyPolicyRightsTitle: { en: '7. What Are Your Privacy Rights?', de: '7. Was sind Ihre Datenschutzrechte?' },
  privacyPolicyRightsText1: {
    en: 'In some regions (like the European Economic Area and the UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.',
    de: 'In einigen Regionen (wie dem Europäischen Wirtschaftsraum und dem Vereinigten Königreich) haben Sie bestimmte Rechte gemäß den geltenden Datenschutzgesetzen. Dazu können das Recht gehören, (i) Zugang zu Ihren personenbezogenen Daten zu beantragen und eine Kopie davon zu erhalten, (ii) Berichtigung oder Löschung zu beantragen; (iii) die Verarbeitung Ihrer personenbezogenen Daten einzuschränken; und (iv) gegebenenfalls auf Datenübertragbarkeit. Unter bestimmten Umständen haben Sie möglicherweise auch das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.'
  },
  privacyPolicyRightsText2: {
    en: 'If you have given consent to data processing, you may revoke this consent at any time for future effect.',
    de: 'Wenn Sie Ihre Einwilligung zur Datenverarbeitung gegeben haben, können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.'
  },
  privacyPolicyRightsText3: {
    en: 'To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.',
    de: 'Um eine solche Anfrage zu stellen, verwenden Sie bitte die unten angegebenen Kontaktdaten. Wir werden jede Anfrage gemäß den geltenden Datenschutzgesetzen prüfen und bearbeiten.'
  },
  privacyPolicyUpdatesTitle: { en: '8. Updates to This Notice', de: '8. Aktualisierungen dieser Erklärung' },
  privacyPolicyUpdatesText: {
    en: 'We may update this privacy notice from time to time. The updated version will be indicated by an updated "Effective Date" and the updated version will be effective as soon as it is accessible.',
    de: 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Die aktualisierte Version wird durch ein aktualisiertes "Gültigkeitsdatum" gekennzeichnet und die aktualisierte Version tritt in Kraft, sobald sie zugänglich ist.'
  },
  privacyPolicyContactUsTitle: { en: '9. How Can You Contact Us About This Notice?', de: '9. Wie können Sie uns bezüglich dieser Erklärung kontaktieren?' },
  privacyPolicyContactUsText1: {
    en: 'If you have questions or comments about this notice, you may email us at [Your Contact Email] or by post to:',
    de: 'Wenn Sie Fragen oder Kommentare zu dieser Erklärung haben, können Sie uns per E-Mail unter [Ihre Kontakt-E-Mail] oder per Post an folgende Adresse kontaktieren:'
  },
  privacyPolicyContactUsCompany: { en: '[Your Company Name, if applicable]', de: '[Ihr Firmenname, falls zutreffend]' },
  privacyPolicyContactUsAddress: { en: '[Your Address]', de: '[Ihre Adresse]' },
  privacyPolicyLastUpdated: { en: 'Last updated: [Insert date of last update here]', de: 'Zuletzt aktualisiert: [Datum der letzten Aktualisierung hier einfügen]' }
};

export type Language = 'en' | 'de';

    