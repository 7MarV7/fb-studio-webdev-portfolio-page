
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
                {t('legalImportantNote')}
              </p>

              <h2>{t('imprintInfoPursuant')}</h2>
              <p>{t('imprintYourNameCompany')}</p>
              <p>{t('imprintYourStreet')}</p>
              <p>{t('imprintYourPostalCity')}</p>
              <p>{t('imprintYourCountry')}</p>

              <h2>{t('imprintRepresentedBy')}</h2>
              <p>{t('imprintNameRepresentative')}</p>

              <h2>{t('imprintContact')}</h2>
              <p>{t('imprintPhone')}</p>
              <p>{t('imprintEmail')}</p>
              
              <h2>{t('imprintVatId')}</h2>
              <p>{t('imprintVatIdText')}</p>
              <p>{t('imprintYourVatId')}</p>

              <h2>{t('imprintResponsibleContent')}</h2>
              <p>{t('imprintResponsibleNameAddress')}</p>
              
              <h2>{t('imprintDisputeResolution')}</h2>
              <p>
                {t('imprintDisputeResolutionEU')}{' '}
                <a href={t('imprintDisputeResolutionEUPlatformLink')} target="_blank" rel="noopener noreferrer">
                  {t('imprintDisputeResolutionEUPlatformLink')}
                </a>. 
                {' '}{t('imprintDisputeResolutionEmail')}
              </p>
              <p>
                {t('imprintDisputeResolutionParticipation')}
              </p>

              <h3>{t('imprintLiabilityContent')}</h3>
              <p>
                {t('imprintLiabilityContentText1')}
              </p>
              <p>
                {t('imprintLiabilityContentText2')}
              </p>

              <h3>{t('imprintLiabilityLinks')}</h3>
              <p>
                {t('imprintLiabilityLinksText1')}
              </p>
              <p>
                {t('imprintLiabilityLinksText2')}
              </p>

              <h3>{t('imprintCopyright')}</h3>
              <p>
                {t('imprintCopyrightText1')}
              </p>
              <p>
                {t('imprintCopyrightText2')}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    