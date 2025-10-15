import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground animate-slide-up">
              <p className="text-sm text-muted-foreground">Last updated: February 2025</p>
              
              <p className="text-xl">
                Welcome to Smart Utility Hub. By accessing and using our website and tools, you agree to be bound 
                by these Terms of Service.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Smart Utility Hub, you acknowledge that you have read, understood, and agree 
                to be bound by these Terms of Service and our Privacy Policy.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">2. Use of Services</h2>
              <p>
                Smart Utility Hub provides free online tools for personal and educational use. You agree to:
              </p>
              <ul>
                <li>Use our services only for lawful purposes</li>
                <li>Not attempt to interfere with or disrupt our services</li>
                <li>Not use automated systems to access our site without permission</li>
                <li>Not misrepresent your identity or affiliation</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">3. No Account Required</h2>
              <p>
                Our tools are designed to work without registration. You can use all features without creating an 
                account. This means you are responsible for keeping your own records of calculations or results.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">4. Accuracy of Information</h2>
              <p>
                While we strive to provide accurate tools and calculators:
              </p>
              <ul>
                <li>Results are for informational and educational purposes only</li>
                <li>They should not replace professional advice (medical, financial, or legal)</li>
                <li>We do not guarantee the accuracy or completeness of any results</li>
                <li>You use our tools at your own risk</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">5. Disclaimer of Warranties</h2>
              <p>
                Smart Utility Hub is provided "as is" without warranties of any kind, either express or implied. 
                We do not warrant that:
              </p>
              <ul>
                <li>Our services will be uninterrupted or error-free</li>
                <li>The results will be accurate, reliable, or correct</li>
                <li>Any errors will be corrected</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Smart Utility Hub shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">7. Intellectual Property</h2>
              <p>
                All content on Smart Utility Hub, including text, graphics, logos, and software, is the property 
                of Smart Utility Hub and is protected by copyright and intellectual property laws.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">8. Third-Party Links and Services</h2>
              <p>
                Our site may contain links to third-party websites or services. We are not responsible for the 
                content or practices of these third parties.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">9. Medical and Financial Disclaimer</h2>
              <p>
                Tools such as BMI calculator, calorie calculator, and zakat calculator provide estimates only. 
                These tools:
              </p>
              <ul>
                <li>Are not a substitute for professional medical or financial advice</li>
                <li>Should not be used for diagnosis or treatment decisions</li>
                <li>Are for educational and informational purposes only</li>
              </ul>
              <p>
                Always consult with qualified professionals for personalized advice.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective 
                immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">11. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services immediately, without prior 
                notice, for any violation of these Terms.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the European Union, 
                without regard to conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">13. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:support@smartutilityhub.com" className="text-primary hover:underline">
                  support@smartutilityhub.com
                </a>
              </p>
              
              <div className="mt-12 p-6 bg-accent rounded-lg border border-accent-foreground/10">
                <p className="text-sm">
                  <strong>Important:</strong> By using Smart Utility Hub, you acknowledge that you have read and 
                  understood these Terms of Service and agree to be bound by them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
