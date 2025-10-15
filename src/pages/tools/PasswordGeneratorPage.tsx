import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PasswordGenerator from "@/components/tools/PasswordGenerator";
import { Key } from "lucide-react";

const PasswordGeneratorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Key className="text-orange-600" size={32} />
            </div>
            <h1 className="text-4xl font-bold mb-4">Password Generator</h1>
            <p className="text-lg text-muted-foreground">
              Generate strong, secure passwords to protect your accounts from hackers.
            </p>
          </div>
          
          <div className="animate-slide-up">
            <PasswordGenerator />
          </div>
          
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Password Security Best Practices</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary">🔒</span>
                <span><strong>Use unique passwords</strong> for each account to prevent domino effect breaches</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">🔒</span>
                <span><strong>Minimum 12 characters</strong> with a mix of uppercase, lowercase, numbers, and symbols</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">🔒</span>
                <span><strong>Never share passwords</strong> or write them down in plain text</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">🔒</span>
                <span><strong>Use a password manager</strong> to securely store all your passwords</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">🔒</span>
                <span><strong>Enable 2FA</strong> (Two-Factor Authentication) wherever possible</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PasswordGeneratorPage;
