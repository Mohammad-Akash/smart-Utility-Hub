import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiscountCalculator from "@/components/tools/DiscountCalculator";
import { Percent } from "lucide-react";

const DiscountCalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Percent className="text-purple-600" size={32} />
            </div>
            <h1 className="text-4xl font-bold mb-4">Discount Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Calculate discounts and final prices to save money while shopping.
            </p>
          </div>
          
          <div className="animate-slide-up">
            <DiscountCalculator />
          </div>
          
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Smart Shopping Tips</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Always compare the final price with other stores before buying</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Watch out for "fake" discounts with inflated original prices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Stack coupons and sales for maximum savings when possible</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DiscountCalculatorPage;
