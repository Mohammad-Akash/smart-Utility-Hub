import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZakatCalculator from "@/components/tools/ZakatCalculator";
import { DollarSign } from "lucide-react";

const ZakatCalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-secondary" size={32} />
            </div>
            <h1 className="text-4xl font-bold mb-4">Zakat Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Calculate your zakat obligations quickly and accurately according to Islamic principles.
            </p>
          </div>
          
          <div className="animate-slide-up">
            <ZakatCalculator />
          </div>
          
          <div className="mt-12 space-y-6">
            <div className="p-6 bg-muted/30 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">About Zakat</h2>
              <p className="text-muted-foreground mb-4">
                Zakat is one of the Five Pillars of Islam and is an obligatory act of charity. It purifies 
                wealth and helps those in need. The standard rate is 2.5% of eligible wealth held for one 
                lunar year.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Important:</strong> This calculator provides an estimate. For precise calculations 
                and religious guidance, please consult with a qualified Islamic scholar.
              </p>
            </div>
            
            <div className="p-6 bg-secondary/5 border border-secondary/20 rounded-lg">
              <h3 className="font-semibold mb-3">What Assets Are Zakatable?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Cash in hand or in bank accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Gold and silver (jewelry above personal use)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Business inventory and merchandise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  <span>Stocks, bonds, and investment accounts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ZakatCalculatorPage;
