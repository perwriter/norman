
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-primary font-headline">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your privacy is important to us.
        </p>
      </header>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl">Our Commitment to Your Privacy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg leading-relaxed prose dark:prose-invert max-w-none">
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

          <p>
            This Privacy Policy explains how Norman Lu ("I", "me", "my") collects, uses, and discloses information about you when you visit my website [YourWebsiteAddress.com] (the "Site") and use the services offered on the Site.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-primary">Information I Collect</h2>
          <p>
            I may collect personal information that you voluntarily provide to me, such as your name and email address when you contact me through the contact form or subscribe to a newsletter (if applicable).
          </p>
          <p>
            I may also automatically collect certain information when you visit the Site, such as your IP address, browser type, operating system, referring URLs, and information about your usage of the Site, through cookies and similar tracking technologies.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-primary">How I Use Your Information</h2>
          <p>I may use the information I collect for various purposes, including to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Send you newsletters or promotional materials, if you have opted in.</li>
            <li>Improve and optimize the Site and its content.</li>
            <li>Monitor and analyze trends, usage, and activities in connection with the Site.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-primary">Sharing Your Information</h2>
          <p>
            I do not sell, trade, or otherwise transfer to outside parties your personally identifiable information except as described in this policy. I may share your information with trusted third-party service providers who assist me in operating my website, conducting my business, or servicing you, so long as those parties agree to keep this information confidential. I may also release your information when I believe release is appropriate to comply with the law, enforce my site policies, or protect mine or others' rights, property, or safety.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-primary">Cookies</h2>
          <p>
            The Site may use "cookies" to enhance User experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about you. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the Site may not function properly.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-3 text-primary">Your Choices</h2>
          <p>
            You may opt out of receiving promotional emails from me by following the instructions in those emails. If you opt out, I may still send you non-promotional communications, such as those about your inquiries.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-primary">Changes to This Privacy Policy</h2>
          <p>
            I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-primary">Contact Me</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact me via the contact form on this website.
          </p>
          <p className="italic text-sm text-muted-foreground mt-6">
            <strong>Disclaimer:</strong> This is a sample Privacy Policy and may not be suitable for all purposes. You should consult with a legal professional to ensure your Privacy Policy complies with all applicable laws and regulations.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
