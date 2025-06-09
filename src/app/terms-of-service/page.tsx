
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-primary font-headline">Terms of Service</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Please read these terms carefully before using our site.
        </p>
      </header>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl">Agreement to Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg leading-relaxed prose dark:prose-invert max-w-none">
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

          <p>
            These Terms of Service ("Terms") govern your access to and use of the website [YourWebsiteAddress.com] (the "Site"), operated by Norman Lu ("I", "me", "my"). By accessing or using the Site, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Site.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-primary">Use of the Site</h2>
          <p>
            You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the Site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Site.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3 text-primary">Intellectual Property</h2>
          <p>
            The Site and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Norman Lu and his licensors. The Site is protected by copyright, trademark, and other laws of both the [Your Country] and foreign countries. My trademarks and trade dress may not be used in connection with any product or service without my prior written consent.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-primary">Links to Other Websites</h2>
          <p>
            My Site may contain links to third-party web sites or services that are not owned or controlled by Norman Lu. I have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that I shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
          </p>
          <p>
            I strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-primary">Limitation of Liability</h2>
          <p>
            In no event shall Norman Lu, nor his directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Site; (ii) any conduct or content of any third party on the Site; (iii) any content obtained from the Site; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not I have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-primary">Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction, e.g., State of New York, USA], without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-primary">Changes to These Terms</h2>
          <p>
            I reserve the right, at my sole discretion, to modify or replace these Terms at any time. If a revision is material I will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at my sole discretion.
          </p>
          <p>
            By continuing to access or use my Site after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Site.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-primary">Contact Me</h2>
          <p>
            If you have any questions about these Terms, please contact me via the contact form on this website.
          </p>
           <p className="italic text-sm text-muted-foreground mt-6">
            <strong>Disclaimer:</strong> This is a sample Terms of Service and may not be suitable for all purposes. You should consult with a legal professional to ensure your Terms of Service comply with all applicable laws and regulations.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
