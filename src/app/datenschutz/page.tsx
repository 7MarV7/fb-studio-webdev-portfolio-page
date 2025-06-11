
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Datenschutzerklärung - Vividfolio',
  description: 'Datenschutzerklärung (Privacy Policy) for Vividfolio.',
};

export default function DatenschutzPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow container px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
           <Link href="/" passHref>
            <Button variant="outline" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Datenschutzerklärung (Privacy Policy)</h1>

          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-destructive font-semibold border-l-4 border-destructive pl-4 py-2 bg-destructive/10 rounded-md">
                WICHTIGER HINWEIS: Dies ist ein automatisch generierter Platzhalter. 
                Bitte ersetzen Sie diesen Text durch Ihre vollständige und rechtsgültige Datenschutzerklärung. 
                Konsultieren Sie hierfür einen Rechtsexperten.
              </p>
              <p className="text-destructive font-semibold border-l-4 border-destructive pl-4 py-2 bg-destructive/10 rounded-md mb-8">
                IMPORTANT NOTE: This is an automatically generated placeholder. 
                Please replace this text with your complete and legally compliant privacy policy. 
                Consult a legal expert for this purpose.
              </p>

              <h2>1. Datenschutz auf einen Blick</h2>
              <h3>Allgemeine Hinweise</h3>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

              <h3>Datenerfassung auf dieser Website</h3>
              <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
              <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
              <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
              <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
              <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
              
              <p><strong>Datenerfassung durch das Personalisierungsfeature:</strong></p>
              <p>Wenn Sie die Personalisierungsfunktion nutzen und eine Profil-URL (z.B. von LinkedIn) eingeben, wird diese URL zusammen mit dem Portfolioinhalt an einen KI-Dienst (Google Gemini via Genkit) gesendet, um eine personalisierte Einführung zu generieren. Diese Daten werden nur für diesen Zweck verarbeitet und nicht dauerhaft gespeichert, es sei denn, dies ist zur Erbringung des Dienstes oder aufgrund gesetzlicher Verpflichtungen erforderlich. Die Verarbeitung basiert auf Ihrer Einwilligung, die Sie durch die Nutzung der Funktion erteilen.</p>
              
              <p><strong>Datenerfassung durch das Kontaktformular:</strong></p>
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde. (Hinweis: Das Kontaktformular ist derzeit eine Simulation und sendet keine Daten.)</p>
              
              <p><strong>Wofür nutzen wir Ihre Daten?</strong></p>
              <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Die Daten aus der Personalisierungsfunktion werden genutzt, um Ihnen eine maßgeschneiderte Version des Portfolios anzuzeigen. Daten aus dem Kontaktformular (sofern aktiviert) dienen der Bearbeitung Ihrer Anfragen.</p>
              
              <p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
              <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
              
              <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3>Datenschutz</h3>
              <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
              
              <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

              <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
              
              <p className="mt-6">Stand: [Datum der letzten Aktualisierung hier einfügen]</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
