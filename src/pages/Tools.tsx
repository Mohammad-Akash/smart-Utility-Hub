import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BMICalculator from "@/components/tools/BMICalculator";
import CalorieCalculator from "@/components/tools/CalorieCalculator";
import WordCounter from "@/components/tools/WordCounter";
import DiscountCalculator from "@/components/tools/DiscountCalculator";
import PasswordGenerator from "@/components/tools/PasswordGenerator";
import QRCodeGenerator from "@/components/tools/QRCodeGenerator";
import ZakatCalculator from "@/components/tools/ZakatCalculator";

const Tools = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Tools</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of free, easy-to-use tools designed to make your life easier.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          <BMICalculator />
          <CalorieCalculator />
          <WordCounter />
          <DiscountCalculator />
          <PasswordGenerator />
          <QRCodeGenerator />
          <ZakatCalculator />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tools;
