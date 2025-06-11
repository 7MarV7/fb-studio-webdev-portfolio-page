
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Impressum - Vividfolio',
  description: 'Impressum (Imprint) for Vividfolio.',
};

export default function ImpressumPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Impressum (Imprint)</h1>
          
          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-destructive font-semibold border-l-4 border-destructive pl-4 py-2 bg-destructive/10 rounded-md">
                WICHTIGER HINWEIS: Dies ist ein automatisch generierter Platzhalter. 
                Bitte ersetzen Sie diesen Text durch Ihr vollständiges und rechtsgültiges Impressum. 
                Konsultieren Sie hierfür einen Rechtsexperten.
              </p>
              <p className="text-destructive font-semibold border-l-4 border-destructive pl-4 py-2 bg-destructive/10 rounded-md mb-8">
                IMPORTANT NOTE: This is an automatically generated placeholder. 
                Please replace this text with your complete and legally compliant imprint. 
                Consult a legal expert for this purpose.
              </p>

              <h2>Angaben gemäß § 5 TMG</h2>
              <p>[Ihr Name/Firmenname]</p>
              <p>[Ihre Straße und Hausnummer]</p>
              <p>[Ihre PLZ und Stadt]</p>

              <h2>Vertreten durch:</h2>
              <p>[Name des Vertretungsberechtigten, falls zutreffend]</p>

              <h2>Kontakt:</h2>
              <p>Telefon: [Ihre Telefonnummer, falls vorhanden]</p>
              <p>E-Mail: [Ihre E-Mail-Adresse]</p>
              
              <h2>Umsatzsteuer-ID:</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:</p>
              <p>[Ihre Umsatzsteuer-ID, falls vorhanden]</p>

              <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
              <p>[Name und Anschrift der für den Inhalt verantwortlichen Person]</p>
              
              <h2>EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr
                </a>. 
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h3>Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3>Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3>Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
