
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

              <p>Effective Date: [Insert Date]</p>

              <h2>1. Introduction</h2>
              <p>Welcome to Vividfolio. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at [Your Contact Email].</p>
              <p>This privacy notice describes how we might use your information if you visit our website at [Your Website URL] or use our services, such as the AI personalization feature.</p>
              
              <h2>2. What Information Do We Collect?</h2>
              <p><strong>Personal information you disclose to us:</strong></p>
              <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website (such as using the AI personalization feature or submitting the contact form) or otherwise when you contact us.</p>
              <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:</p>
              <ul>
                <li><strong>Profile URLs for Personalization:</strong> If you use our AI personalization feature, you may provide a URL to a public online profile (e.g., LinkedIn). This URL, along with existing portfolio content, is sent to an AI service (Google Gemini via Genkit) to generate a personalized introduction. This data is processed for this purpose and is not stored by us beyond the immediate processing needs unless legally required.</li>
                <li><strong>Contact Form Data:</strong> If you use our contact form, we collect your name, email address, and the message you send. (Note: The contact form is currently a simulation and does not actually send or store data.)</li>
              </ul>
              <p><strong>Information automatically collected:</strong></p>
              <p>We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.</p>

              <h2>3. How Do We Use Your Information?</h2>
              <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
              <ul>
                <li>To provide and personalize our services (e.g., the AI portfolio personalization feature).</li>
                <li>To respond to user inquiries/offer support to users.</li>
                <li>To send administrative information to you.</li>
                <li>To protect our Services.</li>
                <li>For other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, marketing and your experience.</li>
              </ul>

              <h2>4. Will Your Information Be Shared With Anyone?</h2>
              <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
              <p>Specifically:</p>
              <ul>
                <li><strong>AI Service Providers:</strong> For the personalization feature, the provided profile URL and portfolio content are shared with Google's Gemini AI model via Genkit for processing. We do not control Google's subsequent use of this data; please refer to Google's privacy policies.</li>
                <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
              </ul>

              <h2>5. How Long Do We Keep Your Information?</h2>
              <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).</p>
              <p>Data provided for the AI personalization feature is not stored by us after the personalization is generated, other than potentially in transient logs or as required by our AI service provider's terms.</p>

              <h2>6. How Do We Keep Your Information Safe?</h2>
              <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>

              <h2>7. What Are Your Privacy Rights?</h2>
              <p>In some regions (like the European Economic Area and the UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.</p>
              <p>If you have given consent to data processing, you may revoke this consent at any time for future effect.</p>
              <p>To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.</p>

              <h2>8. Updates to This Notice</h2>
              <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Effective Date" and the updated version will be effective as soon as it is accessible.</p>

              <h2>9. How Can You Contact Us About This Notice?</h2>
              <p>If you have questions or comments about this notice, you may email us at [Your Contact Email] or by post to:</p>
              <p>[Your Company Name, if applicable]</p>
              <p>[Your Address]</p>
              
              <p className="mt-6">Last updated: [Insert date of last update here]</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
