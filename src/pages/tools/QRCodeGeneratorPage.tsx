import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QRCodeGenerator from "@/components/tools/QRCodeGenerator";
import { QrCode } from "lucide-react";

const QRCodeGeneratorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <QrCode className="text-pink-600" size={32} />
            </div>
            <h1 className="text-4xl font-bold mb-4">QR Code Generator</h1>
            <p className="text-lg text-muted-foreground">
              Create QR codes from text or URLs in seconds. Download and share instantly.
            </p>
          </div>
          
          <div className="animate-slide-up">
            <QRCodeGenerator />
          </div>
          
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Creative Uses for QR Codes</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Business</h3>
                <ul className="space-y-1">
                  <li>• Business cards with contact info</li>
                  <li>• Product packaging links</li>
                  <li>• Event registration</li>
                  <li>• Digital menus for restaurants</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Personal</h3>
                <ul className="space-y-1">
                  <li>• Share WiFi passwords</li>
                  <li>• Wedding invitations</li>
                  <li>• Social media profiles</li>
                  <li>• Contact-free payments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QRCodeGeneratorPage;
