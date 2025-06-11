
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPolicyPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">{t('privacyPolicyTitle')}</h1>

          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-destructive font-semibold border-l-4 border-destructive pl-4 py-2 bg-destructive/10 rounded-md mb-8">
                {t('legalImportantNote')}
              </p>

              <p>{t('privacyPolicyEffectiveDate')}</p>

              <h2>{t('privacyPolicyIntroductionTitle')}</h2>
              <p>{t('privacyPolicyIntroductionText1')}</p>
              <p>{t('privacyPolicyIntroductionText2')}</p>
              
              <h2>{t('privacyPolicyWhatInfoTitle')}</h2>
              <p><strong>{t('privacyPolicyWhatInfoPersonal')}</strong></p>
              <p>{t('privacyPolicyWhatInfoPersonalText1')}</p>
              <p>{t('privacyPolicyWhatInfoPersonalText2')}</p>
              <ul>
                <li dangerouslySetInnerHTML={{ __html: t('privacyPolicyWhatInfoProfileUrls') }} />
                <li dangerouslySetInnerHTML={{ __html: t('privacyPolicyWhatInfoContactForm') }} />
              </ul>
              <p><strong>{t('privacyPolicyWhatInfoAuto')}</strong></p>
              <p>{t('privacyPolicyWhatInfoAutoText')}</p>

              <h2>{t('privacyPolicyHowInfoTitle')}</h2>
              <p>{t('privacyPolicyHowInfoText')}</p>
              <ul>
                <li>{t('privacyPolicyHowInfoListServices')}</li>
                <li>{t('privacyPolicyHowInfoListInquiries')}</li>
                <li>{t('privacyPolicyHowInfoListAdmin')}</li>
                <li>{t('privacyPolicyHowInfoListProtect')}</li>
                <li>{t('privacyPolicyHowInfoListBusiness')}</li>
              </ul>

              <h2>{t('privacyPolicySharedTitle')}</h2>
              <p>{t('privacyPolicySharedText')}</p>
              <p>{t('privacyPolicySharedTextSpecific')}</p>
              <ul>
                <li dangerouslySetInnerHTML={{ __html: t('privacyPolicySharedAi') }} />
                <li dangerouslySetInnerHTML={{ __html: t('privacyPolicySharedLegal') }} />
              </ul>

              <h2>{t('privacyPolicyKeepInfoTitle')}</h2>
              <p>{t('privacyPolicyKeepInfoText1')}</p>
              <p>{t('privacyPolicyKeepInfoText2')}</p>

              <h2>{t('privacyPolicySafeInfoTitle')}</h2>
              <p>{t('privacyPolicySafeInfoText')}</p>

              <h2>{t('privacyPolicyRightsTitle')}</h2>
              <p>{t('privacyPolicyRightsText1')}</p>
              <p>{t('privacyPolicyRightsText2')}</p>
              <p>{t('privacyPolicyRightsText3')}</p>

              <h2>{t('privacyPolicyUpdatesTitle')}</h2>
              <p>{t('privacyPolicyUpdatesText')}</p>

              <h2>{t('privacyPolicyContactUsTitle')}</h2>
              <p>{t('privacyPolicyContactUsText1')}</p>
              <p>{t('privacyPolicyContactUsCompany')}</p>
              <p>{t('privacyPolicyContactUsAddress')}</p>
              
              <p className="mt-6">{t('privacyPolicyLastUpdated')}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    