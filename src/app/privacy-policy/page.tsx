
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - Vividfolio',
  description: 'Privacy Policy for Vividfolio.',
};

export default function PrivacyPolicyPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-destructive font-semibold border-l-4 border-destructive pl-4 py-2 bg-destructive/10 rounded-md mb-8">
                IMPORTANT NOTE: This is an automatically generated placeholder. 
                Please replace this text with your complete and legally compliant privacy policy. 
                Consult a legal expert for this purpose.
              </p>

              <h2>1. Data Protection at a Glance</h2>
              <h3>General Information</h3>
              <p>The following gives a simple overview of what happens to your personal data when you visit our website. Personal data is any data with which you could be personally identified.</p>

              <h3>Data Collection on this Website</h3>
              <p><strong>Who is responsible for data collection on this website?</strong></p>
              <p>The data processing on this website is carried out by the website operator. The operator's contact details can be found in the website's imprint.</p>
              <p><strong>How do we collect your data?</strong></p>
              <p>Some data are collected when you provide it to us. This could, for example, be data you enter on a contact form.</p>
              <p>Other data are collected automatically by our IT systems when you visit the website. These data are primarily technical data such as the browser and operating system you are using or the time you accessed the page. These data are collected automatically as soon as you enter our website.</p>
              
              <p><strong>Data collection by the personalization feature:</strong></p>
              <p>When you use the personalization feature and enter a profile URL (e.g., from LinkedIn), this URL, along with the portfolio content, is sent to an AI service (Google Gemini via Genkit) to generate a personalized introduction. This data is processed solely for this purpose and is not stored permanently unless necessary for service provision or due to legal obligations. Processing is based on your consent, given by using the feature.</p>
              
              <p><strong>Data collection by the contact form:</strong></p>
              <p>Should you send us questions via the contact form, we will collect the data entered on the form, including the contact details you provide, to answer your question and any follow-up questions. We do not share this information without your permission. The processing of this data is based on Art. 6 (1) (b) GDPR, if your inquiry is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of inquiries addressed to us (Art. 6 (1) (f) GDPR) or on your consent (Art. 6 (1) (a) GDPR) if it has been obtained. (Note: The contact form is currently a simulation and does not send data.)</p>
              
              <p><strong>What do we use your data for?</strong></p>
              <p>Part of the data is collected to ensure the proper functioning of the website. Data from the personalization feature is used to show you a tailored version of the portfolio. Data from the contact form (if activated) is used to process your inquiries.</p>
              
              <p><strong>What rights do you have regarding your data?</strong></p>
              <p>You always have the right to request information about your stored data, its origin, its recipients, and the purpose of its collection at no charge. You also have the right to request that it be corrected or deleted. If you have given consent to data processing, you may revoke this consent at any time for future effect. You also have the right, under certain circumstances, to request the restriction of the processing of your personal data. You also have the right to lodge a complaint with the competent supervisory authorities.</p>
              
              <h2>2. General Notes and Mandatory Information</h2>
              <h3>Data Protection</h3>
              <p>The operators of these pages take the protection of your personal data very seriously. We treat your personal data as confidential and in accordance with the statutory data protection regulations and this privacy policy.</p>
              
              <h3>Revocation of your consent to data processing</h3>
              <p>Many data processing operations are only possible with your express consent. You may revoke your consent at any time with future effect. The legality of the data processing carried out until the revocation remains unaffected by the revocation.</p>

              <h3>Right to lodge a complaint with the competent supervisory authority</h3>
              <p>In the case of breaches of the GDPR, the persons affected are entitled to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, their place of work or the place of the alleged breach. The right to lodge a complaint is without prejudice to any other administrative or judicial remedies.</p>
              
              <p className="mt-6">Last updated: [Insert date of last update here]</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
