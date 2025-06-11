
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Metadata should be handled differently for multilingual sites, typically via route segments or specialized libraries.
// For now, keeping it simple.
// export const metadata = {
//   title: 'Imprint - Vividfolio',
//   description: 'Imprint for Vividfolio.',
// };

export default function ImprintPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow container px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/" passHref>
            <Button variant="outline" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              {t('backToHome')}
            </Button>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">{t('imprintTitle')}</h1>
          
          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-destructive font-semibold border-l-4 border-destructive pl-4 py-2 bg-destructive/10 rounded-md mb-8">
                IMPORTANT NOTE: This is an automatically generated placeholder. 
                Please replace this text with your complete and legally compliant imprint. 
                Consult a legal expert for this purpose.
              </p>

              <h2>Information pursuant to § 5 TMG (German Telemedia Act) or equivalent local regulations</h2>
              <p>[Your Name/Company Name]</p>
              <p>[Your Street and House Number]</p>
              <p>[Your Postal Code and City]</p>
              <p>[Your Country]</p>

              <h2>Represented by:</h2>
              <p>[Name of authorized representative, if applicable]</p>

              <h2>Contact:</h2>
              <p>Phone: [Your phone number, if available]</p>
              <p>Email: [Your email address]</p>
              
              <h2>VAT ID / Tax ID:</h2>
              <p>Sales tax identification number according to [relevant law, e.g., §27a Value Added Tax Act if applicable]:</p>
              <p>[Your VAT ID or Tax ID, if available/applicable]</p>

              <h2>Responsible for the content according to [relevant law, e.g., § 55 Abs. 2 RStV in Germany]:</h2>
              <p>[Name and address of the person responsible for the content, if different from above]</p>
              
              <h2>Dispute Resolution</h2>
              <p>
                The European Commission provides a platform for online dispute resolution (ODR): 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr
                </a>. 
                Our e-mail address can be found above in the imprint.
              </p>
              <p>
                We are not willing or obliged to participate in dispute resolution proceedings before a 
                consumer arbitration board (or specify if you are).
              </p>

              <h3>Liability for Content</h3>
              <p>
                As service providers, we are liable for own contents of these websites according to general laws. However, service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.
              </p>
              <p>
                Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.
              </p>

              <h3>Liability for Links</h3>
              <p>
                Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.
              </p>
              <p>
                The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.
              </p>

              <h3>Copyright</h3>
              <p>
                Contents and compilations published on these websites by the providers are subject to copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only.
              </p>
              <p>
                The commercial use of our contents without permission of the originator is prohibited. Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
