import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground animate-slide-up">
              <p className="text-sm text-muted-foreground">Last updated: February 2025</p>
              
              <p className="text-xl">
                At Smart Utility Hub, your privacy is our top priority. This Privacy Policy explains how we handle 
                your information when you use our website and tools.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Data Collection</h2>
              <p>
                Smart Utility Hub is designed with privacy at its core. All our tools work entirely in your browser 
                using client-side JavaScript. This means:
              </p>
              <ul>
                <li>We do not collect, store, or transmit any data you enter into our tools</li>
                <li>All calculations happen locally on your device</li>
                <li>Your information never leaves your browser</li>
                <li>We do not use cookies for tracking purposes</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Analytics</h2>
              <p>
                We may use basic analytics tools to understand how visitors use our site (such as page views and 
                popular features). This data is:
              </p>
              <ul>
                <li>Completely anonymous and aggregated</li>
                <li>Used solely to improve our services</li>
                <li>Never linked to any personal information</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Third-Party Services</h2>
              <p>
                Some of our tools may use third-party APIs (for example, QR code generation). When you use these tools:
              </p>
              <ul>
                <li>Data is sent directly to the API provider's servers</li>
                <li>We do not store or log this data</li>
                <li>Third-party services have their own privacy policies</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Contact Forms</h2>
              <p>
                If you contact us through our contact form, we collect:
              </p>
              <ul>
                <li>Your name and email address (to respond to your inquiry)</li>
                <li>The content of your message</li>
              </ul>
              <p>
                This information is used solely to respond to your inquiry and is not shared with third parties.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Data Security</h2>
              <p>
                Since all tools work locally in your browser, your data remains on your device. We implement 
                industry-standard security measures to protect our website and any communications with us.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Your Rights</h2>
              <p>
                Because we don't collect or store personal data from tool usage, there's no personal data for us 
                to access, modify, or delete. However, if you've contacted us via email, you have the right to:
              </p>
              <ul>
                <li>Request deletion of your contact information</li>
                <li>Request a copy of any data we have about you</li>
                <li>Opt out of future communications</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13. We do not knowingly collect information from 
                children under 13 years of age.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with 
                an updated revision date.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:support@smartutilityhub.com" className="text-primary hover:underline">
                  support@smartutilityhub.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
